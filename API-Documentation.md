AUTH APIs
✅ Register User
POST /api/signin

Body:

{
  "email": "user@gmail.com",
  "password": "123456"
}
✅ Login User
POST /api/login

Response:

{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "123",
    "email": "user@gmail.com",
    "role": "user"
  }
}
🎬 MOVIE APIs (User)
✅ Add Movie
POST /api/movies/add

Body:

{
  "imdbID": "tt12345",
  "title": "Movie Name",
  "poster": "https://image-url",
  "rating": 8,
  "review": "Great movie"
}
✅ Get User Movies
GET /api/movies/getMovies
✅ Update Movie
PUT /api/movies/updateMovies/:id

Body:

{
  "rating": 9,
  "review": "Updated review"
}
✅ Delete Movie
DELETE /api/movies/deleteMovie/:id
👑 ADMIN APIs
✅ Get All Users
GET /api/movies/users
✅ Get All Movies
GET /api/movies/all
🛡️ Security Features
Password hashing using bcrypt
JWT Authentication
Role-based authorization
Protected routes with middleware
Input validation (basic)
⚠️ Error Handling
200 → Success
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Server Error
📈 Scalability Notes
Can be extended into microservices architecture
Add Redis caching for frequently accessed data
Use load balancer for high traffic
Separate authentication service for scaling
Docker containerization for deployment
Add pagination for large datasets
📌 Future Improvements
Swagger API documentation
Search & filter movies
Pagination
Better UI enhancements
Rate limiting for APIs