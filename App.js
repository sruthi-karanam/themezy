import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BrowseThemesPage from './pages/BrowseThemesPage';
import OrganizerDashboard from './pages/OrganizerDashboard';
import ClientDashboard from './pages/ClientDashboard';
import BookEvent from './pages/BookEvent';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';

const App = () => {
  return (
    <AuthProvider>
      <EventProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/browse-themes" element={<BrowseThemesPage />} />
            <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/book-event" element={<BookEvent />} />
          </Routes>
          <Footer />
        </Router>
      </EventProvider>
    </AuthProvider>
  );
};

export default App;
