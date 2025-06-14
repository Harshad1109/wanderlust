
# Wanderlust 🌍

A full-stack travel experience platform built with Node.js, Express.js, EJS, Bootstrap, and MongoDB. Users can **sign up**, **create**, **read**, **update**, and **delete** travel listings, all within a responsive and user-friendly interface.

---

## 🧭 Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Prerequisites](#prerequisites)  
5. [Installation](#installation)  
6. [Environment Variables](#environment-variables)  
7. [Usage](#usage)  
8. [Folder Structure](#folder-structure)  
9. [Future Enhancements](#future-enhancements)  
10. [Contributing](#contributing)  
11. [License](#license)  

---

## Introduction

Wanderlust is a travel-sharing web app that empowers users to explore and document their travel experiences. With full CRUD operations and secure authentication, the app ensures a seamless journey creation and sharing process. It’s fully responsive, making it accessible on any device.

---

## Features

- ✅ **User Authentication** – Sign up & log in  
- ✏️ **CRUD Operations** – Create, read, update, delete travel listings  
- 📱 **Responsive Design** – Optimized for mobile, tablet & desktop  
- 🎨 **Intuitive UI** – Built with Bootstrap and EJS

---

## Tech Stack

- **Backend**: Node.js, Express.js  
- **Frontend**: EJS templating, HTML5, CSS3, Bootstrap  
- **Database**: MongoDB  
- **Image Handling**: Multer (for uploads)  
- **Middleware**: Custom and third-party (e.g., authentication, flash messages)

---

## Prerequisites

Ensure you have these installed on your machine:

- [Node.js](https://nodejs.org/) v14+  
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)  
- (Optional) Cloud services like Cloudinary for handling images

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/Harshad1109/wanderlust.git
cd wanderlust

# 2. Install dependencies
npm install

# 3. Configure environment
# Set up your DATABASE_URL, CLOUDINARY_URL, SESSION_SECRET, etc.

# 4. Run the app
node app.js
```

---

## Environment Variables

Create a `.env` file in the root directory and include:

```
DATABASE_URL=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SESSION_SECRET=your_session_secret
```

Adjust as necessary based on configuration.

---

## Usage

- Open your browser at `http://localhost:8080` (or your configured port)  
- **Sign Up / Log In**  
- **Explore Listings** – browse travel experiences  
- **Add New Listing** – upload images, add location & description  
- **Edit/Delete** your own listings  
- **Experience responsive design** on any device

---

## Folder Structure

```
├── app.js
├── controllers/      # Route logic
├── models/           # Mongoose schemas
├── routes/           # Route definitions
├── utils/            # Helpers (e.g., catchAsync)
├── public/           # CSS, JS, media files
├── uploads/          # Uploaded images
├── views/            # EJS templates
├── middleware.js     # Authentication & utility middleware
├── cloudConfig.js    # Cloudinary setup
└── schema.js         # Joi validation schemas
```

---

## Future Enhancements

- 🌟 **Image upload & cloud storage** via Cloudinary  
- 📍 **Map integration** for listing locations  
- 💬 **Review & rating system**  
- 🔐 **Role-based authorization** (hosts vs. guests)  
- 💳 **Payment gateway integration**

---

## Contributing

Want to help make Wanderlust even better?

1. Fork the repo  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a pull request  

Please follow any existing [coding styles and guidelines](#).

---

## License

Released under the MIT License. Feel free to use and contribute!  

---

❤ Built with care by Harshad. Happy traveling & coding!
