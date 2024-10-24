# Themezy

Themezy is an innovative event booking platform designed to connect clients with themed event organizers. It offers a seamless experience for users to explore, book, and customize events based on predefined themes or their own preferences.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure user registration and login functionality.
- **Theme Browsing**: Users can browse a wide variety of themed events offered by various organizers.
- **Customizable Events**: Clients have the option to customize their events according to their preferences.
- **Organizer Dashboard**: Event organizers can manage their themes, view bookings, and interact with clients.
- **Client Dashboard**: Clients can view their bookings and event history.
- **Responsive Design**: The platform is built to be responsive, providing a seamless experience across devices.

## Technologies Used

- **Frontend**:
  - React.js
  - Bootstrap
  - CSS

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (using MongoDB Atlas)

- **Authentication**: JSON Web Tokens (JWT)

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

### Clone the Repository

```bash
git clone https://github.com/sruthi-karanam/themezy.git
cd themezy
themezy/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── App.js
    │   └── index.js
