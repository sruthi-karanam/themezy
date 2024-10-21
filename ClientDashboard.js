// Client dashboard page
import React, { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import eventService from '../services/eventService';

const ClientDashboard = () => {
  const { bookedEvents, setBookedEvents } = useContext(EventContext);

  useEffect(() => {
    const fetchBookedEvents = async () => {
      const data = await eventService.getBookedEvents();
      setBookedEvents(data.events);
    };
    fetchBookedEvents();
  }, [setBookedEvents]);

  return (
    <div>
      <h2>Client Dashboard</h2>
      <h3>Your Booked Events</h3>
      <ul>
        {bookedEvents.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientDashboard;
