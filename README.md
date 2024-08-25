# BlogBackend

## Project Overview
BlogBackend is a robust backend system designed to power a blogging platform. It allows users to create, read, update, and delete (CRUD) blog posts while ensuring security through **JWT (JSON Web Token) Authentication**. The project is built using **Node.js**, **Express.js**, and **MongoDB** with a clean and scalable architecture.

## Features
- **User Authentication**: JWT-based user authentication system.
- **CRUD Operations**: Users can create, edit, delete, and view blog posts.
- **Dynamic Commenting**: Supports real-time comments on blog posts.
- **RESTful API**: RESTful routes for various blog-related functionalities.
- **Error Handling**: Comprehensive error handling for smoother user experience.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Authentication**: JWT (JSON Web Token)
- **Templating Engine**: EJS (for rendering dynamic web pages)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (>= 14.x)
- **MongoDB** (>= 4.x) (either local or a cloud instance like MongoDB Atlas)
- **Git** for cloning the repository

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rajaiswal6544/BlogBackend.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd BlogBackend
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

5. **Run the application**:
    ```bash
    npm start
    ```
    The application will be running at `http://localhost:5000`.

## API Endpoints
Here’s a list of the main API endpoints:

### Authentication
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login a user and receive a JWT token

### Blog Posts
- `GET /api/posts` – Fetch all blog posts
- `GET /api/posts/:id` – Fetch a single post by its ID
- `POST /api/posts` – Create a new post (requires JWT token)
- `PUT /api/posts/:id` – Update a post (requires JWT token)
- `DELETE /api/posts/:id` – Delete a post (requires JWT token)

### Comments
- `POST /api/posts/:id/comments` – Add a comment to a specific post (requires JWT token)
- `GET /api/posts/:id/comments` – Get all comments for a specific post

## Features in Future Roadmap
- **User Roles**: Adding different user roles (e.g., Admin, Editor) to manage posts.
- **Rich Text Editor**: Integrating a rich text editor for better post creation.
- **Search Functionality**: Add search and filter features for posts.
- **Social Media Integration**: Allow users to share posts directly to their social media accounts.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/rajaiswal6544/BlogBackend/issues) if you want to contribute.

## Contact
- **Raj Jaiswal**  
  [LinkedIn](https://www.linkedin.com/in/raj-jaiswal-37259922a/)  
  [GitHub](https://github.com/rajaiswal6544)  
