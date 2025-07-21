import {
  getAllUsers,
  getUserById,
  saveUser,
  updateUser as updateUserModel,
  deleteUser as deleteUserModel,
  findUserByEmail
} from '../models/user.model.js';

const getAll = async () => {
  return await getAllUsers();
};

const getById = async (id) => {
  return await getUserById(id);
};


const createUser = async (user) => {
  return await saveUser(user);
};

const updateUser = async (id, updatedData) => {
  return await updateUserModel(id, updatedData);
};

const deleteUser = async (id) => {
  return await deleteUserModel(id);
};

// Nueva función para buscar usuario por email
const findByEmail = async (email) => {
  return await findUserByEmail(email);
};

export default {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
  findByEmail,
};
