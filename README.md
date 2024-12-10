🚀 About the Project
Product Review App is a full-stack web application that allows users to browse products, view
detailed descriptions, read reviews, and provide their own ratings and reviews after logging in. It
features a secure authentication system and a smooth user experience for both product browsing
and review submission.

🎯 Features
Browse Products: View a list of products with detailed descriptions.
Reviews and Ratings: See what others have to say about a product.
User Authentication: Login or register to leave a review.
Secure Authorization: Powered by JWT for secure access control
Responsive Design: Optimized for all screen sizes.
State Management: Efficiently managed using React Query.
Form Handling: Simplified using React Hook Form.
RESTful API: Well-structured API built with Express.js.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: PostgreSQL with Prisma ORM
Authentication: JSON Web Tokens (JWT) and bcrypt.js
State Management: React Query
Version Control: Git & GitHub

🖥️ Installation & Setup
Prerequisites
Node.js installed on your machine.
PostgreSQL installed locally or access to a PostgreSQL database.

Steps
1)Clone the repository
git clone https://github.com/adhilahammed/shopping.git
cd shopping

2)Install dependencies for both server and client
cd backend
npm install
cd ../frontend
npm install

3)Set up environment variables
Create a .env file in the backend directory
PORT=your port number
SALT_ROUNDS=your salt number
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
DATABASE_URL=postgres connection string

4)Run database migrations
cd backend
npx prisma migrate dev

5)Run the backend
cd backend
npm start

6)Run the frontend
cd frontend
npm start
  

