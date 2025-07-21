import express from "express";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/user.route.js";
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';
import { db } from './config/db.js';
// import { auth } from "firebase-admin";
import { authMiddleware } from "./middlewares/auth.middleware.js";


dotenv.config();

//settings
const app = express();
const PORT = process.env.PORT || 3000;
app.set("PORT", PORT);

// middlewares
app.use(cors()); // habilita CORS para peticiones de orígenes cruzados

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));


//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/api/users", userRoutes);
//app.use("/api/products", authMiddleware, productRoutes);
app.use("/api/products",  productRoutes);
app.use("/api/auth", authRoutes);

// Middleware para rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});



