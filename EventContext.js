import React, { createContext, useState, useEffect } from 'react';
import eventService from '../services/eventService';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const data = await eventService.getAllThemes();
        setThemes(data.themes);
      } catch (error) {
        console.error("Failed to fetch themes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchThemes();
  }, []);

  const selectTheme = (themeId) => {
    const theme = themes.find(t => t.id === themeId);
    setSelectedTheme(theme);
  };

  return (
    <EventContext.Provider value={{ themes, selectedTheme, selectTheme, loading }}>
      {children}
    </EventContext.Provider>
  );
};
