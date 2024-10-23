import { useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; //audio

const AppointmentForm = ({ recipientId }: { recipientId: string }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date || !time) {
      setError("Please fill out all required fields.");
      return;
    }

    try {
      let audioUrl = null;

      if (audioFile) {
        const storageRef = ref(storage, `audioMessages/${audioFile.name}`);
        const snapshot = await uploadBytes(storageRef, audioFile);
        audioUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "appointments"), {
        title,
        description,
        date,
        time,
        senderId: currentUser?.uid, // scheduler
        recipientId, // invitee
        status: "pending",
        audioUrl,
      });
      setSuccess("Appointment scheduled successfully!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(`Failed to schedule appointment: ${error.message}`);
      } else {
        setError("Failed to schedule appointment. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Schedule Appointment
          </h2>
          <div className="mb-4">
            <label className="block font-semibold">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">
              Optional Audio Message
            </label>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) =>
                setAudioFile(e.target.files ? e.target.files[0] : null)
              }
              className="border p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
