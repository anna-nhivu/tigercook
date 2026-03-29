import { db } from "../firebase.js";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export async function getUserRecipes() {
  try {
    const q = query(
      collection(db, "recipes"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    const recipes = snapshot.docs.map((doc) => ({
      id: doc.id,
      recipeName: doc.data().title,
      cost: doc.data().cost,
      createdAt: doc.data().createdAt,
    }));

    return recipes;

  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}