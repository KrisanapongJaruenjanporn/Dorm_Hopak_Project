# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
"# Dorm_Hopak_Project" 

### Firebase Configuration

The following JavaScript code initializes Firebase with the provided configuration.

```javascript
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  // ... (add your Firebase configuration here)
};

const db = firebase.initializeApp(firebaseConfig);
export const auth = db.auth();
export const firestore = db.firestore();
export const storageRef = db.storage();
export const storage = db.storage();

export default db;
