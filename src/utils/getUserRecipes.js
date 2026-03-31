import { db } from "../firebase.js";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export async function getUserRecipes(userId) {
  if (!userId) return [];

  try {
    const q = query(
      collection(db, "recipes"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    return [];
  }
}
