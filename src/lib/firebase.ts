// src/lib/firebase.ts
// ──────────────────────────────────────────────────────────────
// Firebase is NOT yet installed in this project.
// To enable Firestore integration:
//
//   1. npm install firebase
//   2. Copy .env.local.example → .env.local and fill in your values
//   3. Uncomment the real implementation below
// ──────────────────────────────────────────────────────────────

// import { initializeApp } from 'firebase/app';
// import { getFirestore }  from 'firebase/firestore';
//
// const firebaseConfig = {
//   apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId:             import.meta.env.VITE_FIREBASE_APP_ID,
// };
//
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);

// Placeholder — remove this once you run `npm install firebase`
export const db = null;
