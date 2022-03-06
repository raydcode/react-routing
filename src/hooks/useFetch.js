/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import { onSnapshot, colRef, getDoc, doc, db } from '../config';

const useFetch = (post) => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDocument = (post) => {
    if (!post) {
      onSnapshot(colRef, (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ ...doc.data(), id: doc.id });
        });
        setData(result);
      });
    } else {
      const docRef = doc(db, 'posts', post);

      getDoc(docRef).then((doc) => {
        setData(doc.data(), doc.id);
      });
    }
  };

  useEffect(async () => {
    getDocument(post);
  }, []);

  return { data, error, setData };
};

export default useFetch;
