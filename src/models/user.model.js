import { db } from '../config/db.js';
import {
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where
} from 'firebase/firestore';

const usersCollection = collection(db, 'users');

// Obtener todos los usuarios
export const getAllUsers = async () => {
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener un usuario por ID
export const getUserById = async (id) => {
    const userDoc = await getDoc(doc(usersCollection, id));
    if (!userDoc.exists()) return null;
    return { id: userDoc.id, ...userDoc.data() };
};
export const findUserByEmail = async (email) => {
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;
    // Retornamos el primer usuario que coincida
    const userDoc = querySnapshot.docs[0];
    return { id: userDoc.id, ...userDoc.data() };
};

// Guardar un nuevo usuario
export const saveUser = async (user) => {
    const newUserRef = await addDoc(usersCollection, user);
    const newUserDoc = await getDoc(newUserRef);
    return { id: newUserRef.id, ...newUserDoc.data() };
};

// Actualizar un usuario por ID
export const updateUser = async (id, updatedData) => {
    const userRef = doc(usersCollection, id);
    await updateDoc(userRef, updatedData);
    const updatedUserDoc = await getDoc(userRef);
    return { id: updatedUserDoc.id, ...updatedUserDoc.data() };
};

// Eliminar un usuario por ID
export const deleteUser = async (id) => {
    const userRef = doc(usersCollection, id);
    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) return null;
    await deleteDoc(userRef);
    return { id: userDoc.id, ...userDoc.data() };
};
