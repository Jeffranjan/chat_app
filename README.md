# Chat App

A full-stack real-time chat application built with dynamic web technologies. This project enables users to sign up, log in, and exchange messages instantly with other online users.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io.
- **User Authentication**: Secure signup and login with JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Online Status**: Real-time visibility of online users.
- **Image Support**: Upload and send images in chats using Cloudinary.
- **Responsive Design**: Built with TailwindCSS for a seamless experience across devices.
- **Modern UI**: Clean and intuitive user interface developed with React and Vite.

## 🛠 Tech Stack

### Frontend
- **React**: Library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast builds.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Socket.io-client**: Real-time engine for the client.
- **Axios**: Promise-based HTTP client for API requests.
- **React Router DOM**: Declarative routing for React applications.
- **React Hot Toast**: Beautiful notifications for React.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express**: Fast, unopinionated web framework for Node.js.
- **MongoDB**: NoSQL database for storing users and messages (using **Mongoose** for modeling).
- **Socket.io**: Real-time event-based communication library.
- **Cloudinary**: Cloud-based image management service.
- **JWT (jsonwebtoken)**: Secure token-based authentication.
- **Bcryptjs**: Library for hashing passwords.
- **Dotenv**: Module for loading environment variables.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.

## 📂 Project Structure

- **client/**: Contains the React frontend application.
  - `src/`: Source code including components, pages, and assets.
  - `public/`: Static resources.
- **server/**: Contains the Node.js/Express backend.
  - `controllers/`: Logic for handling API requests.
  - `models/`: Mongoose schemas for MongoDB.
  - `routes/`: API route definitions (`userRoutes`, `messageRoutes`).
  - `lib/`: Helper functions and database connection logic.
  - `middleware/`: Custom middleware (e.g., auth protection).

## 🔧 Setup & Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account for image uploads

### 1. Clone the repository
```bash
git clone <repository-url>
cd chat-app
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:
```bash
npm run server
```

### 3. Frontend Setup
Navigate to the client directory and install dependencies:
```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory (if needed for API base URLs, though typically handled via proxy or constants).

Start the frontend development server:
```bash
npm run dev
```

## 📝 Usage

1. Open your browser and navigate to the frontend URL (usually `http://localhost:5173`).
2. Sign up for a new account.
3. Login with your credentials.
4. See other online users on the sidebar.
5. Select a user to start chatting!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
