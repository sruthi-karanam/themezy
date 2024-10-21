// Booking event page
import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import eventService from '../services/eventService';

const BookEvent = () => {
  const { selectedTheme } = useContext(EventContext);
  const [date, setDate] = useState('');

  const handleBooking = async () => {
    await eventService.bookEvent(selectedTheme.id, date);
    // handle success, e.g., show a success message or redirect
  };

  return (
    <div>
      <h2>Book Event</h2>
      <h3>Selected Theme: {selectedTheme.name}</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default BookEvent;
