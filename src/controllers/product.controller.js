import productService from "../services/product.service.js";

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const productos = await productService.getAll();
    const productosOrdenados = productos.map(producto => ({
      nombre: producto.nombre,
      id: producto.id,
      precio: producto.precio,
      cantidad: producto.cantidad,
      disponible: producto.disponible,
    }));

    res.status(200).json({ message: "Lista de productos", payload: productosOrdenados });
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productService.getById(id);

    if (!producto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const productoOrdenado = {
      nombre: producto.nombre,
      id: producto.id,
      precio: producto.precio,
      cantidad: producto.cantidad,
      disponible: producto.disponible,
    };

    res.status(200).json({ message: "Producto encontrado", payload: productoOrdenado });
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, cantidad, disponible } = req.body;

    if (!nombre || precio === undefined) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    const newProduct = {
      nombre,
      precio: +precio,
      cantidad: +cantidad,
      disponible: disponible || false,
    };

    const savedProduct = await productService.createProduct(newProduct);

    res
      .status(201)
      .json({ message: "Producto creado correctamente", payload: savedProduct });
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor",
      error: error.message,
    });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedProduct = await productService.updateProduct(id, updatedData);

    res.status(200).json({
      message: "Producto actualizado correctamente",
      payload: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el producto",
      error: error.message,
    });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await productService.deleteProduct(id);

    res
      .status(200)
      .json({ message: "Producto eliminado correctamente", payload: { id } });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar el producto",
      error: error.message,
    });
  }
};

export default {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
