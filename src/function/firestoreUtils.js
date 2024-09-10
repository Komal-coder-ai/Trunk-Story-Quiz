
import { getDocs } from 'firebase/firestore';
import { db, collection } from '../firebase.js';

export const fetchDataFromCollection = async (collectionName) => {
    console.log("hellosnapshot")
  try {
    const colRef = collection(db, collectionName);

    const snapshot = await getDocs(colRef);
    console.log('snapshot', snapshot);
    const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return docs;
  } catch (err) {
    console.error('Error fetching documents:', err);
    throw new Error('Error fetching documents');
  }
};
