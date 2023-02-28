#E-commerce website using MERN stack
This is a web application for an e-commerce website built using MERN stack (MongoDB, Express, React, and Node.js). The website allows users to browse and purchase products, add items to a cart. (I haven't worked on checkout process, I'd probably use stripe for that). The admin can add, update and delete products and manage orders.

# Features
User authentication (login and registration) using JWT tokens
Product catalog with categories and subcategories ( Not available yet)
Product details page with images, description, price, and reviews
Shopping cart functionality with the ability to add, update and remove items
Order management for admins with the ability to mark orders as shipped and view order details


# Tech stack
1. MongoDB: database for storing product data and user information
2. Express: server framework for Node.js
3. React: client-side library for building user interfaces
4. Node.js: runtime environment for executing JavaScript code


## Getting started
To run the application locally, follow these steps:

# Clone the repository: git clone https://github.com/uness7/E-commerce-Website-from-scratch---MERN-STACK.git

# Install dependencies for the server: cd server && npm install
Create a .env file in the server directory with the following environment 

# variables:
* PORT: server port (default: 8080)
* MONGO_URI: MongoDB connection string
* JWT_SECRET: secret key for generating JWT tokens
* Start the server: cd server && npm start
* Start the client: cd client && npm start
* Open the application in your browser at http://localhost:8080

# Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find a bug or have a suggestion for an improvement.

# License
This project is licensed under the MIT License - see the LICENSE.md file for details.