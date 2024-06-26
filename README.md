# Portfolio

This is a personal portfolio website showcasing my skills, projects, and contact information. Built with React, Material-UI, Firebase, and Framer Motion for animations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Modern UI**: Built with React and Material-UI for a sleek, responsive design.
- **Animations**: Smooth animations using Framer Motion.
- **Firebase Integration**: Stores contact form submissions in Firebase Realtime Database.
- **Responsive Design**: Mobile-first design ensures the website looks great on all devices.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Abhineetsahay/Portfolio.git
    cd Portfolio
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up Firebase**:

    - Create a Firebase project and add a web app.
    - Replace the Firebase configuration in `src/Firebase.js` with your own Firebase project configuration.

    ```js
    // src/Firebase.js
    import { initializeApp } from "firebase/app";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID",
      databaseURL: "YOUR_DATABASE_URL"
    };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

    Your portfolio site should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

Navigate through the different sections of the portfolio to learn more about my skills, view my projects, and get in touch via the contact form.

## Project Structure

```plaintext
Portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── Contact.png
│   ├── components/
│   │   └── ...
│   ├── pages/
│   │   └── ...
│   ├── App.js
│   ├── Firebase.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
```

- `src/assets/`: Contains images and other static assets.
- `src/components/`: Contains React components used throughout the site.
- `src/pages/`: Contains page components like `Home`, `About`, `Projects`, and `Contact`.
- `src/Firebase.js`: Firebase configuration and initialization.
- `src/index.js`: Entry point of the React application.
- `src/App.js`: Main application component.

## Contact

For any inquiries or feedback, please contact me at [abhineetsahay@gmail.com](mailto:abhineetsahay@gmail.com).
