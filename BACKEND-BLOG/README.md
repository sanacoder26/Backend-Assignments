# Simple CRUD 

1. creat a simple blog crud 
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   MONGODB_URI=  enter your url
   
   
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
