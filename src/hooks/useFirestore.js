import { db } from "../firebase/index";
import { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  where,
  query,
  doc,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function useFirestore() {
  let [loading, setLoading] = useState(false);
  let [datas, setDatas] = useState([]);
  let [data, setData] = useState(null);
  let navigate = useNavigate();

  let getCollection = (collectionName, search, _query) => {
    let queryRef = useRef(_query).current;

    useEffect(
      function () {
        setLoading(true);
        let refs = collection(db, collectionName);

        let queries = [];
        if (queryRef) {
          queries.push(where(...queryRef));
        }
        queries.push(orderBy("created_at", "desc"));
        let q = query(refs, ...queries);

        onSnapshot(q, (docs) => {
          let collectionDatas = [];
          docs.forEach((doc) => {
            let data = { id: doc.id, ...doc.data() };
            collectionDatas.push(data);
          });

          if (search) {
            let searchDatas = collectionDatas.filter((doc) => {
              return doc.title.includes(search);
            });
            setDatas(searchDatas);
          } else {
            setDatas(collectionDatas);
          }
          setLoading(false);
        });
      },
      [collectionName, search, queryRef]
    );
    return { loading, datas };
  };

  let getDocument = (collectionName, params) => {
    useEffect(() => {
      setLoading(true);
      let ref = doc(db, collectionName, params.id);
      onSnapshot(ref, (doc) => {
        let data = { id: doc.id, ...doc.data() };
        setData(data);
        setLoading(false);
      });
    }, [collectionName, params.id]);

    return { loading, data };
  };

  let addDocument = async (collectionName, formData) => {
    setLoading(true);
    let ref = collection(db, collectionName);
    await addDoc(ref, formData);
    setLoading(false);
    navigate("/");
  };

  return { getCollection, getDocument, addDocument, loading };
}
