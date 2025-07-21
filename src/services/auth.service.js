import jwt from 'jsonwebtoken';
import { db } from '../config/db.js';
import { collection, query, where, getDocs } from 'firebase/firestore';

const usersCollection = collection(db, 'users');

export const login = async (email, password) => {
  // Aquí deberías validar el usuario y password contra la base de datos
  // Por ejemplo, buscar en Firestore si existe el usuario con ese email
  const q = query(usersCollection, where('email', '==', email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;

  const userDoc = querySnapshot.docs[0];
  const userData = userDoc.data();

  // Para simplificar, comparamos la contraseña en texto plano (en producción siempre hashear)
  if (userData.password !== password) return null;

  // Creamos el token JWT
  const token = jwt.sign(
    { uid: userDoc.id, email: userData.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  return token;
};
