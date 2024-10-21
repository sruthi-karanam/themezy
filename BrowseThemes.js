// Component to browse themes
import React from 'react';
import { Link } from 'react-router-dom';

const BrowseThemes = ({ themes }) => {
  return (
    <div className="container">
      <h2>Available Event Themes</h2>
      <div className="row">
        {themes.map((theme, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img src={theme.image} className="card-img-top" alt={theme.name} />
              <div className="card-body">
                <h5 className="card-title">{theme.name}</h5>
                <p className="card-text">{theme.description}</p>
                <Link to={`/theme/${theme.id}`} className="btn btn-primary">Book This Theme</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseThemes;
