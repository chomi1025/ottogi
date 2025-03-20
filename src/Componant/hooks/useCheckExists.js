"use client";
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebaseConfig"; // Firebase
// 커스텀 훅
export const useCheckExists = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkExists = async (collectionName, fieldName, value) => {
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, collectionName),
        where(fieldName, "==", value)
      );
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty; // 존재하면 true, 없으면 false
    } catch (err) {
      setError(err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { checkExists, loading, error };
};
