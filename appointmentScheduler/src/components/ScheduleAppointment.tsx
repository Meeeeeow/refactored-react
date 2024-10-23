import { useParams } from "react-router-dom";
import AppointForm from "./AppointForm";

const ScheduleAppointment = () => {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h2 className="text-xl font-bold py-4 px-2">Schedule Appointment</h2>
      <AppointForm recipientId={userId!} />
    </div>
  );
};

export default ScheduleAppointment;
