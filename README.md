# 🏋️ Workout Buddy - MERN Stack Application

A full-stack workout tracking application built with MongoDB, Express, React, and Node.js. This project demonstrates a complete CRUD application with RESTful API, state management using React Context, and MongoDB integration.

## 🚀 Live Demo

[Add your deployed link here]

## 📸 Screenshots

[Add screenshots of your application here]

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- React Context API (State Management)
- date-fns (Date formatting)

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- CORS

**Development Tools:**
- Nodemon
- dotenv

## ✨ Features

- ✅ Create, read, update, and delete workouts
- ✅ Track exercise title, load (kg), and reps
- ✅ Real-time updates with React Context
- ✅ RESTful API architecture
- ✅ Responsive design
- ✅ Error handling and validation
- ✅ MongoDB database integration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

## Project Structure

```
MERN STACK/
├── backend/          # Express API server
│   ├── controllers/  # Route controllers
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   └── server.js     # Entry point
└── frontend/         # React application
    ├── public/
    └── src/
        ├── components/
        ├── pages/
        └── context/
```

## Backend Setup

### 1. Create package.json
```bash
cd backend
npm init -y
```

### 2. Install dependencies
```bash
npm install express dotenv mongoose cors
npm install --save-dev nodemon
```

**Dependencies:**
- `express` - Web framework
- `dotenv` - Load environment variables
- `mongoose` - MongoDB ODM library
- `cors` - Enable communication between different ports
- `nodemon` - Auto-restart server on file changes (dev only)

### 3. Create `.env` file in backend folder
```
PORT=4000
MONGO_URI=your_mongodb_connection_string_here
```

Replace `your_mongodb_connection_string_here` with your MongoDB Atlas connection string or local MongoDB URI.

### 4. Run the backend server
```bash
npm run dev
```

The server will run on `http://localhost:4000`

## Frontend Setup

### 1. Create React app
```bash
npx create-react-app frontend
cd frontend
```

### 2. Install dependencies
```bash
npm install react-router-dom date-fns
```

**Dependencies:**
- `react-router-dom` - Handle routing
- `date-fns` - Format dates

### 3. Configure proxy in `package.json`
Add this line to `frontend/package.json`:
```json
"proxy": "http://localhost:4000"
```

This allows the frontend to communicate with the backend API.

### 4. Run the frontend
```bash
npm start
```

The app will open at `http://localhost:3000`

## Running the Full Application

1. Start the backend server (in `/backend` directory):
   ```bash
   npm run dev
   ```

2. Start the frontend (in `/frontend` directory):
   ```bash
   npm start
   ```

3. Open your browser to `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/workouts` | Get all workouts |
| GET | `/api/workouts/:id` | Get single workout |
| POST | `/api/workouts` | Create new workout |
| PATCH | `/api/workouts/:id` | Update workout |
| DELETE | `/api/workouts/:id` | Delete workout |

## 📁 Project Structure Details

```
backend/
├── controllers/
│   └── workoutController.js    # Business logic for workout operations
├── models/
│   └── workoutModel.js         # Mongoose schema for workouts
├── routes/
│   └── workouts.js             # API route definitions
├── .env                        # Environment variables (not in repo)
├── package.json
└── server.js                   # Express server entry point

frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Navigation component
│   │   ├── WorkoutDetails.js   # Display individual workout
│   │   └── WorkoutForm.js      # Form to create workouts
│   ├── context/
│   │   └── WorkoutContext.js   # Global state management
│   ├── hooks/
│   │   └── useWorkoutsContext.js  # Custom hook for context
│   ├── pages/
│   │   └── Home.js             # Main page
│   ├── App.js
│   └── index.js
└── package.json
```

## Troubleshooting

**Error: "Unexpected token '<'"**
- Make sure the proxy is configured in `frontend/package.json`
- Restart the React dev server after adding the proxy

**Error: EACCES when installing nodemon**
- Install nodemon locally: `npm install --save-dev nodemon`
- Avoid global installation to prevent permission issues

**Cannot connect to MongoDB**
- Check your `.env` file has the correct `MONGO_URI`
- Ensure your MongoDB Atlas IP whitelist includes your IP
- Verify your database user credentials

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Alejandro Stábile**

- GitHub: [@astabile](https://github.com/astabile)
- LinkedIn: [Alejandro Stábile](https://linkedin.com/in/astabile)

## 🙏 Acknowledgments

- Built following MERN stack best practices
- Inspired by modern fitness tracking applications

---

⭐ If you found this project helpful, please consider giving it a star!
