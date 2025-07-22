import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

// Obtener todos los productos
router.get('/', productController.getProducts);

// Obtener un producto por ID
router.get('/:id', productController.getProductById);

// Crear un nuevo producto
//router.post('/', authMiddleware,  productController.createProduct);
router.post('/',  productController.createProduct);

// Actualizar un producto por ID
// router.put('/:id', authMiddleware, productController.updateProduct);
router.put('/:id', productController.updateProduct);

// Eliminar un producto por ID
// router.delete('/:id', authMiddleware, productController.deleteProduct);
router.delete('/:id', productController.deleteProduct);

export default router;

