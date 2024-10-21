
```markdown
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
```

### Install Dependencies

Navigate to the `frontend` directory and install the necessary dependencies:

```bash
cd frontend
npm install
```

Then, navigate to the `backend` directory and install the dependencies:

```bash
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following variables:

```
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

Replace `<your_mongodb_uri>` with your MongoDB URI and `<your_jwt_secret>` with your preferred JWT secret.

## Usage

### Starting the Application

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend application:

```bash
cd frontend
npm start
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

```
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
```

## API Endpoints

- `POST /api/auth/login`: User login
- `POST /api/auth/signup`: User registration
- `GET /api/events`: Retrieve all available themes
- `POST /api/events/book`: Book an event

#   t h e m e z y 
 
 
