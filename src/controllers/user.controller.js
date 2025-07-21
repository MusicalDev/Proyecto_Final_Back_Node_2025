import userService from "../services/user.service.js";
import bcrypt from 'bcrypt';


// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await userService.getAll();

        // Reordenar propiedades para cada usuario
        const orderedUsers = users.map(user => ({
            nombre: user.nombre,
            apellido: user.apellido,
            id: user.id || user._id, // dependiendo de si usás MongoDB o no
            email: user.email,
        }));


        res.status(200).json({ message: "Lista de usuarios", payload: orderedUsers });
    } catch (error) {
        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message,
        });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getById(id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({
            message: "Usuario encontrado", payload: {
                nombre: user.nombre,
                apellido: user.apellido,
                id: user.id || user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message,
        });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { nombre, apellido, email, password } = req.body;

        if (!nombre || !apellido || !email || !password) {
            return res.status(400).json({ message: "Faltan campos requeridos" });
        }

        // Verificar si el email ya está registrado
        const existingUser = await userService.findByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: "El email ya está en uso, prueba con otro" });
        }

        // Hashear la contraseña (ejemplo con 10 salt rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            nombre,
            apellido,
            email,
            password: hashedPassword, // guardamos la versión hasheada
        };

        const savedUser = await userService.createUser(newUser);

        res
            .status(201)
            .json({ message: "Usuario creado correctamente", payload: savedUser });
    } catch (error) {
        res.status(500).json({
            message: "Error interno del servidor",
            error: error.message,
        });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedUser = await userService.updateUser(id, updatedData);

        res.status(200).json({
            message: "Usuario actualizado correctamente",
            payload: updatedUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el usuario",
            error: error.message,
        });
    }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await userService.deleteUser(id);

        res
            .status(200)
            .json({ message: "Usuario eliminado correctamente", payload: { id } });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el usuario",
            error: error.message,
        });
    }
};

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
