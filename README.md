## Dorm_Hopak_Project

```bash
cd hopak-app
pnpm install
pnpm dev run
```

### Firebase Configuration

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
```

### Security System
```javascript
    e.preventDefault();
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setError("รหัสผ่านต้องประกอบไปด้วยตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข");
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      console.log("Registered user:", user);
    } catch (error) {
      setError(error.message);
      console.error("Error registering user:", error);
    }
```
