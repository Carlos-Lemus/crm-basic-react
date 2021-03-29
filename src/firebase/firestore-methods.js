import db from "./firebasConfig";

export const insert = (collection, document) => {
    
    db.collection(collection).doc().set(document);
};

export const getDocuments = (collection, callback) => db.collection(collection).onSnapshot(callback);

export const  getDocument = (collection, id) => db.collection(collection).doc(id).get();

export const update = (collection, document, id) => {
    db.collection(collection).doc(id).update(document);
};

export const remove = (collection, id) => {
    db.collection(collection).doc(id).delete();
};