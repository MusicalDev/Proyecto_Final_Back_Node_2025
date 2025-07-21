// import * as authService from '../services/auth.service.js';

// export const login = async (req, res) => {
//   try {
//     const token = await authService.login(req.body.email, req.body.password);
//     if (!token) {
//       return res.status(401).json({ error: 'Credenciales inválidas' });
//     }
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Error en la autenticación' });
//   }
// };

import { generateToken } from "../utils/jwt.js"; 

const default_user = {
    id: "1",
    email: "admin@admin.com",
    password: "admin123"
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (email === default_user.email && password === default_user.password) {
        const token = generateToken(default_user);
        return res.status(200).json({ token });
    } else { return res.status(401).json({ message: 'Credenciales inválidas' });}
};


export default { login };

    