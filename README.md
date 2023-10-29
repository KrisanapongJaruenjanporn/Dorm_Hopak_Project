## Dorm_Hopak_Project

```bash
cd hopak-app
pnpm install
pnpm dev run
```

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
