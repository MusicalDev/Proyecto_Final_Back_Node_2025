import { db } from '../config/db.js';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

const productsCollection = collection(db, 'productos');

// class Producto {
//   constructor(id, nombre, precio, disponible) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.disponible = disponible;
//   }
// }


// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productsCollection);
    const products = [];
    productList.forEach((docu) => {
      products.push({ id: docu.id, ...docu.data() });
    });
    return products;
  } catch (error) {
    throw new Error('Error al obtener productos: ' + error.message);
  }
};

// Obtener producto por ID
export const getProductById = async (id) => {
  try {
    const productRef = doc(db, 'productos', id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) {
      throw new Error('Producto no encontrado');
    }

    return { id: productSnap.id, ...productSnap.data() };
  } catch (error) {
    throw new Error('Error al obtener producto: ' + error.message);
  }
};

// Guardar producto nuevo
export const saveProduct = async (product) => {
  try {
    const newProductRef = await addDoc(productsCollection, product);
    const newProductSnap = await getDoc(newProductRef);
    return { id: newProductRef.id, ...newProductSnap.data() };
  } catch (error) {
    throw new Error('Error al guardar el producto: ' + error.message);
  }
};

// Actualizar producto por ID
export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, 'productos', id);
    await updateDoc(productRef, updatedData);
    const updatedSnap = await getDoc(productRef);
    return { id: updatedSnap.id, ...updatedSnap.data() };
  } catch (error) {
    throw new Error('Error al actualizar producto: ' + error.message);
  }
};

// Eliminar producto por ID
export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, 'productos', id);
    await deleteDoc(productRef);
    return { id, deleted: true };
  } catch (error) {
    throw new Error('Error al eliminar producto: ' + error.message);
  }
};
