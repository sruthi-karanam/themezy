// API for events
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events/'; // Update with your backend URL

const getAllThemes = async () => {
  const response = await axios.get(`${API_URL}themes`);
  return response.data;
};

const getAllEvents = async () => {
  const response = await axios.get(`${API_URL}all`);
  return response.data;
};

const bookEvent = async (eventId, date) => {
  const response = await axios.post(`${API_URL}book`, { eventId, date });
  return response.data;
};

const eventService = {
  getAllThemes,
  getAllEvents,
  bookEvent,
};

export default eventService;
