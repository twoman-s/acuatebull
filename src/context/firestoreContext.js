import { db } from "./../firebase";

export const getData = async (id) => {
  const add = db.collection("users").doc(id);
  const doc = await add.get();
  let data = {};
  if (!doc.exists) {
    return data;
  } else {
    data = doc.data();
    return data;
  }
};

export const setData = async (data) => {
  const res = await db.collection("users").doc(data.id).set(data);
  console.log(res);
};

export const setSubscriberData = async (data) => {
  const res = await db.collection("subscribers").doc().set(data);
  console.log(res);
};

export const getPaymentInfo = async (id) => {
  const add = db.collection("payments").doc(id);
  const doc = await add.get();
  let data = {};
  if (!doc.exists) {
    return data;
  } else {
    data = doc.data();
    return data;
  }
};

export const setPaymentInfo = async (data) => {
  const res = await db.collection("payments").doc(data.id).set(data);
  console.log(res);
};
