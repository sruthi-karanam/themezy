// Organizer dashboard page
import React, { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import eventService from '../services/eventService';

const OrganizerDashboard = () => {
  const { events, setEvents } = useContext(EventContext);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await eventService.getAllEvents();
      setEvents(data.events);
    };
    fetchEvents();
  }, [setEvents]);

  return (
    <div>
      <h2>Organizer Dashboard</h2>
      <h3>Your Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrganizerDashboard;
