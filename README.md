# TechConnect

## Overview

**TechConnect** is a project developed to create a user-friendly landing page that showcases the latest in technology. As the sole developer, I undertook this project to improve my skills in web development and create a functional, visually appealing website.

![TechConnect Screenshot](https://i.imgur.com/REY3ToL.png)


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Backend](#backend-1)
  - [API Endpoints](#api-endpoints)
  - [Running the Backend](#running-the-backend)
  - [Environment Variables](#environment-variables)
  - [Project Structure](#project-structure-1)
- [Frontend](#frontend-1)
  - [Running the Frontend](#running-the-frontend)
  - [Available Scripts](#available-scripts)
  - [Project Structure](#frontend-project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Register, log in, and manage user profiles.
- **Job Listings:** View available job opportunities.
- **Reward System:** Explore and manage rewards.
- **Real-Time Updates:** Get real-time notifications for updates.
- **Responsive Design:** User-friendly design for various devices.

## Technologies Used

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Axios
- **Real-Time Updates:** WebSockets
- **Styling:** CSS Modules

## Installation

### Backend

1. Clone the repository:

    ```bash
    git clone https://github.com/Nhlobo/myproject-backend.git
    cd myproject-backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file with the following contents:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/myproject
    JWT_SECRET=your_jwt_secret
    ```

4. Run the backend server:

    ```bash
    npm run dev
    ```

### Frontend

1. Clone the repository:

    ```bash
    git clone https://github.com/Nhlobo/myproject-frontend.git
    cd myproject-frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm start
    ```

## Backend

### API Endpoints

- **Register User**
  - **POST** `/auth/register`
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "message": "User registered successfully" }`

- **Login User**
  - **POST** `/auth/login`
  - Request: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "JWT token" }`

- **Get User Profile**
  - **GET** `/users/profile`
  - Headers: `Authorization: Bearer <token>`
  - Response: `{ "user": { "username": "string" } }`

- **Get Job Listings**
  - **GET** `/jobs`
  - Response: `{ "jobs": [{ "id": "string", "title": "string", "description": "string" }] }`

- **Get Rewards**
  - **GET** `/rewards`
  - Response: `{ "rewards": [{ "id": "string", "title": "string", "points": "number" }] }`

### Running the Backend

To start the backend server in development mode:

```bash
npm run dev
```

### Environment Variables

- **`PORT`**: Port for the server to listen on.
- **`MONGO_URI`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for JWT authentication.

### Project Structure

```
/myproject-backend
  /controllers
    authController.js
    jobController.js
    rewardController.js
    userController.js
  /middleware
    authMiddleware.js
  /models
    Job.js
    Reward.js
    User.js
  /routes
    authRoutes.js
    jobRoutes.js
    rewardRoutes.js
    userRoutes.js
  /utils
    db.js
  /server.js
  .env
  package.json
  README.md
```

## Frontend

### Running the Frontend

To start the frontend development server:

```bash
npm start
```

### Available Scripts

- **`npm start`**: Runs the app in development mode.
- **`npm build`**: Builds the app for production to the `build` folder.
- **`npm test`**: Runs the test suite.
- **`npm eject`**: Exposes the configuration files.

### Project Structure

```
/myproject-frontend
  /public
    index.html
  /src
    /components
      Home.js
      Home.css
      JobList.js
      JobList.css
      Navbar.js
      Navbar.css
      Profile.js
      Profile.css
      Reward.js
      Reward.css
      NotFound.js
      NotFound.css
    /services
      api.js
    /setupProxy.js
    App.js
    index.js
    index.css
  package.json
  README.md
```

## Contributing

We welcome contributions to the project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the new branch.
5. Open a Pull Request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Author:** [Nhlovo-mathebula](https://github.com/Nhlobo)  
**GitHub:** [Nhlobo](https://github.com/Nhlobo)
