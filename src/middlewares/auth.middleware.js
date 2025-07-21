import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Obtener el token del header Authorization

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }

    const verificationResult = verifyToken(token);

    if (!verificationResult.valid) {
        return res.sendStatus(403).json({ message: "Token inválido", error });
    }

    req.user = verificationResult.decoded; 
    next(); 
}; 