// Page for browsing themes
import React, { useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import eventService from '../services/eventService';

const BrowseThemesPage = () => {
  const { themes, setThemes, loading } = useContext(EventContext);

  useEffect(() => {
    const fetchThemes = async () => {
      const data = await eventService.getAllThemes();
      setThemes(data.themes);
    };
    fetchThemes();
  }, [setThemes]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Browse Themes</h2>
      <ul>
        {themes.map((theme) => (
          <li key={theme.id}>{theme.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseThemesPage;
