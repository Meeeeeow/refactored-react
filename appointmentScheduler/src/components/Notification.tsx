import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
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
      const q = query(
        collection(db, "appointments"),
        where("recipientId", "==", currentUser.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newNotifications = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          let message = "";

          if (data.status === "pending") {
            message = `You have a new appointment request: "${data.title}"`;
          } else if (data.status === "accepted") {
            message = `Your appointment "${data.title}" was accepted.`;
          } else if (data.status === "declined") {
            message = `Your appointment "${data.title}" was declined.`;
          } else if (data.status === "canceled") {
            message = `Your appointment "${data.title}" was canceled.`;
          }

          return {
            id: doc.id,
            message,
            date: data.date,
            status: data.status,
          };
        });
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
            <p className="text-sm text-gray-500">Date: {notification.date}</p>
          </div>
        ))
      ) : (
        <p>No notifications found.</p>
      )}
    </div>
  );
};

export default Notification;
