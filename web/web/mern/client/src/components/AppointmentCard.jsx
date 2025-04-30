// client/src/components/AppointmentCard.jsx
import React from 'react';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-blue-600">{appointment.title}</h3>
      <p className="text-gray-600">Date: {new Date(appointment.date).toLocaleDateString()}</p>
      <p className="text-gray-600">Time: {appointment.time}</p>
      <p className="text-gray-600">Notes: {appointment.description || 'None'}</p>
    </div>
  );
};

export default AppointmentCard;