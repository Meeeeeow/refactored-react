import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, or, where, onSnapshot } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

interface Notification {
  id: string;
  message: string;
  date: string;
  status: string;
}

const Notification = () => {
  const { currentUser } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (currentUser) {
      // Fetch notifications where the user is either the sender or recipient
      const q = query(
        collection(db, "appointments"),
        or(
          where("recipientId", "==", currentUser.uid),
          where("senderId", "==", currentUser.uid)
        )
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();
            let message = "";

            // Determine if current user is the sender or the recipient
            const isSender = data.senderId === currentUser.uid;
            const isRecipient = data.recipientId === currentUser.uid;

            if (data.status === "pending") {
              if (isSender) {
                message = `Your appointment request "${data.title}" is pending.`;
              } else if (isRecipient) {
                message = `You have a new appointment invitation: "${data.title}".`;
              }
            } else if (data.status === "accepted") {
              if (isSender) {
                message = `Your appointment request "${data.title}" was accepted.`;
              } else if (isRecipient) {
                message = `You have accepted the appointment "${data.title}".`;
              }
            } else if (data.status === "declined") {
              if (isSender) {
                message = `Your appointment "${data.title}" was declined by the recipient.`;
              } else if (isRecipient) {
                message = `You have declined the appointment "${data.title}".`;
              }
            } else if (data.status === "canceled") {
              if (isSender) {
                message = `You canceled the appointment "${data.title}".`;
              } else if (isRecipient) {
                message = `The appointment "${data.title}" was canceled by the sender.`;
              }
            }

            return {
              id: doc.id,
              message,
              date: data.date,
              status: data.status,
            };
          })
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );

        setNotifications(newNotifications);
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className="p-4 border rounded shadow-sm mb-4 bg-white hover:bg-gray-100 transition"
          >
            <p>{notification.message}</p>
            <p className="text-sm text-gray-500">
              Appointment Date: {notification.date}
            </p>
          </div>
        ))
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
};

export default Notification;
