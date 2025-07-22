# Plantilla de servidor con capas Express

Este proyecto es una plantilla básica para configurar un servidor con **Express** y **Nodemon**, ideal para iniciar rápidamente nuevos desarrollos en Node.js.

## Características

- **Express** para gestionar rutas y middleware.
- **Nodemon** para recargar automáticamente el servidor durante el desarrollo.
- Configuración minimalista lista para usar.

---

## Instalación

### 1. Clonar el repositorio con `degit`

`degit` es una herramienta para clonar plantillas de manera limpia (sin el historial de Git).

#### Instalar `degit` (si no lo tienes instalado)

```bash
npm install -g degit
```

#### Clonar el repositorio

```bash
degit DanielRiverol/template-express-layers carpeta-destino
```

Reemplaza `usuario/repo-nombre` por el nombre del repositorio y `carpeta-destino` por el nombre de la carpeta donde deseas clonar el proyecto.

### 2. Instalar dependencias

Una vez clonado el repositorio, entra en la carpeta del proyecto:

```bash
cd carpeta-destino
```

Luego, instala las dependencias:

```bash
npm install
```

---

## Comandos disponibles

### Iniciar el servidor

Este comando inicia el servidor en modo desarrollo con Nodemon:

```bash
npm run dev
```

### Actualizar dependencias (Opcional)

Para poder todas estas dependencias a su última versión, deberás instalar un paquete llamado `npm-check-updates` de forma global:

```bash
npm install -g npm-check-updates
```

Una vez instalado deberás correr el siguiente comando:

```bash
ncu -u
```

Esto modificará tu archivo package.json para que todas las dependencias estén listadas en sus últimas versiones.

Una vez completado este proceso, basta con ejecutar el siguiente comando para actualizar todas tus dependencias:

```bash
npm install
```

## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.






La API está desplegada en Vercel:

- **Usuarios**:  
  `https://proyecto-final-back-node-2025.vercel.app`


  # Obtener todos los usuarios: 
  GET: https://proyecto-final-back-node-2025.vercel.app/api/users


  # Obtener usuario por Id: 

  GET: https://proyecto-final-back-node-2025.vercel.app/api/users/id
  ejemplo: https://proyecto-final-back-node-2025.vercel.app/api/users/5wn9L8BWUHNQXlOMUsRg


  # Loguer con un usuario: 

  POST: https://proyecto-final-back-node-2025.vercel.app/api/auth

  Credenciales:
  email: admin@admin.com
  password: admin123

  # Crear usuario: 

  POST: https://proyecto-final-back-node-2025.vercel.app/api/users

  Estructura: 
  {
  "nombre": "Ale",
  "apellido": "Alo",
  "email": "ale@admin.com",
  "password": "admin123"
}

  # Eliminar usuario: 

  DELETE: https://proyecto-final-back-node-2025.vercel.app/api/users/id



- **Productos**:  
  `https://proyecto-final-back-node-2025.vercel.app/api/products`

  # Obtener todos los productos: 

  GET: https://proyecto-final-back-node-2025.vercel.app/api/products


  # Obtener producto por Id: 

  GET: https://proyecto-final-back-node-2025.vercel.app/api/products/id

  Ejempplo:
  https://proyecto-final-back-node-2025.vercel.app/api/products/fcG1ODo82pFydL5mEcVK


  # Crear un nuevo producto: 

POST: https://proyecto-final-back-node-2025.vercel.app/api/products

Estructura: {
  "nombre": "Teclado Mecánico 2",
  "descripcion": "Teclado mecánico con retroiluminación RGB",
  "precio": 4500,
  "cantidad": 10
}

  # Actualizar un producto: 

PUT: https://proyecto-final-back-node-2025.vercel.app/api/products/id

  # Eliminar un producto: 

DELETE: https://proyecto-final-back-node-2025.vercel.app/api/products/id

