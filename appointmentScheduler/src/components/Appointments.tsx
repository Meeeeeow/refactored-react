import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  or,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

// Define the structure of an appointment
interface Appointment {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: string;
  senderId: string;
  recipientId: string;
  audioUrl?: string; // Optional audio message
}

const Appointments = () => {
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("upcoming"); // Default filter to upcoming

  useEffect(() => {
    const fetchAppointments = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "appointments"),
          or(
            where("senderId", "==", currentUser.uid),
            where("recipientId", "==", currentUser.uid)
          ) // Fetch appointments where current user is either the sender or recipient
        );

        const querySnapshot = await getDocs(q);
        const appointmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Appointment[];
        setAppointments(appointmentsData);
      }
    };

    fetchAppointments();
  }, [currentUser]);

  // Handle appointment cancellation by the scheduler
  const handleCancelAppointment = async (appointmentId: string) => {
    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await updateDoc(appointmentRef, { status: "canceled" });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId
            ? { ...appointment, status: "canceled" }
            : appointment
        )
      );
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  // Handle appointment acceptance or decline by the recipient
  const handleUpdateStatus = async (
    appointmentId: string,
    newStatus: string
  ) => {
    try {
      const appointmentRef = doc(db, "appointments", appointmentId);
      await updateDoc(appointmentRef, { status: newStatus });
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment.id === appointmentId
            ? { ...appointment, status: newStatus }
            : appointment
        )
      );
    } catch (error) {
      console.error("Error updating appointment status:", error);
    }
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    const currentDate = new Date();

    if (filter === "upcoming") {
      return appointmentDate >= currentDate; // Upcoming appointments
    } else {
      return appointmentDate < currentDate; // Past appointments
    }
  });

  const searchedAppointments = filteredAppointments.filter((appointment) =>
    appointment.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search appointments"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-1/2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>

      {searchedAppointments.length > 0 ? (
        searchedAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="p-4 border rounded shadow-sm mb-4 bg-white hover:bg-gray-100 transition"
          >
            <h3 className="font-bold text-lg">{appointment.title}</h3>
            <p>{appointment.description}</p>
            <p className="text-sm text-gray-500">
              {appointment.date} at {appointment.time}
            </p>
            <p
              className={`mt-2 font-medium ${
                appointment.status === "canceled"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              Status: {appointment.status}
            </p>

            {appointment.audioUrl && (
              <div className="mt-2">
                <p className="font-semibold">Audio Message:</p>
                <audio controls>
                  <source src={appointment.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {appointment.recipientId === currentUser?.uid &&
              appointment.status === "pending" && (
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() =>
                      handleUpdateStatus(appointment.id, "accepted")
                    }
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() =>
                      handleUpdateStatus(appointment.id, "declined")
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Decline
                  </button>
                </div>
              )}

            {appointment.senderId === currentUser?.uid &&
              appointment.status === "pending" && (
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel Appointment
                  </button>
                </div>
              )}
          </div>
        ))
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default Appointments;
