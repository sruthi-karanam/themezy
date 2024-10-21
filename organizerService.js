// API for organizers
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/organizers/'; // Update with your backend URL

const getOrganizerEvents = async (organizerId) => {
  const response = await axios.get(`${API_URL}${organizerId}/events`);
  return response.data;
};

const organizerService = {
  getOrganizerEvents,
};

export default organizerService;
