# Blog Application Backend

A complete backend for a blog application built with Node.js, Express, and MongoDB. This project implements full CRUD operations for blogs and secure user authentication using JWT.

## Features

- **User Authentication**: Secure register and login using JWT and bcrypt password hashing.
- **Blog CRUD**: Create, Read, Update, and Delete blog posts.
- **Search Functionality**: Search blogs by title or description using query parameters.
- **MVC Architecture**: Clean separation of concerns with Models, Controllers, and Routes.
- **Middleware**: Authentication middleware to protect routes.
- **Database**: MongoDB integration with Mongoose schemas and validations.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT (JSON Web Token)**
- **Bcryptjs**

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed or a MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://sanaakhter:your_password@cluster0.6pulirz.mongodb.net/blog-app
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=30d
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get token
- `GET /api/auth/me` - Get current user profile (Protected)

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs?search=topic` - Search blogs
- `GET /api/blogs/:id` - Get a single blog
- `POST /api/blogs` - Create a new blog (Protected)
- `PUT /api/blogs/:id` - Update a blog (Protected, Author only)
- `DELETE /api/blogs/:id` - Delete a blog (Protected, Author only)

## Project Structure

```text
├── src/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Authentication & error middleware
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── app.js          # Express app setup
├── server.js           # Entry point
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── README.md           # Project documentation
```

## License

This project is licensed under the ISC License.
