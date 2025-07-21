import {
  getAllProducts,
  getProductById,
  saveProduct,
  updateProduct as updateProductModel,
  deleteProduct as deleteProductModel
} from '../models/product.model.js';

const getAll = async () => {
  return await getAllProducts();
};

const getById = async (id) => {
  return await getProductById(id);
};

const createProduct = async (product) => {
  return await saveProduct(product);
};

const updateProduct = async (id, updatedData) => {
  return await updateProductModel(id, updatedData);
};

const deleteProduct = async (id) => {
  return await deleteProductModel(id);
};

export default {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
