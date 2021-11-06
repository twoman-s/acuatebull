import { db } from "./../firebase";

export const getData = async (id) => {
  const query = db.collection("users").where("id", "==", id);

  const observer = query.onSnapshot(
    (querySnapshot) => {
      console.log(querySnapshot.size);
      if (querySnapshot.size >= 1) return true;
      else return false;
    },
    (err) => {
      return false;
    }
  );
};

export const setData = async (data) => {
  const res = await db.collection("users").doc(data.name).set(data);
  console.log(res);
};
