import fireBaseKey from "../../fireBaseKey.json" assert { type: "json" };
import admin from 'firebase-admin'

admin.initializeApp({
    credential: admin.credential.cert(fireBaseKey)
});

export const db = admin.firestore();