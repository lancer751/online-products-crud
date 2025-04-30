# Online Store CRUD

Este proyecto es una aplicación web de comercio electrónico que permite a los usuarios explorar productos, filtrarlos, agregarlos al carrito y administrarlos desde un panel de administración. Está construido con una arquitectura de frontend y backend separada, utilizando tecnologías modernas como React, TypeScript, Vite, Prisma y Express.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Rutas de la API](#rutas-de-la-api)
- [Próximas Mejoras](#próximas-mejoras)

---

## Características

### Frontend
- **Framework**: React con TypeScript.
- **Estilización**: TailwindCSS y DaisyUI para un diseño moderno y responsivo.
- **Rutas**: Manejo de rutas dinámicas con TanStack Router.
- **Estado Global**: Context API y Reducers para la gestión del carrito y filtros.
- **Consumo de API**: Axios para interactuar con el backend.
- **Componentes**:
  - **Catálogo de productos**: Lista de productos con filtros por categoría, precio y nombre.
  - **Carrito de compras**: Agregar, eliminar y limpiar productos.
  - **Panel de administración**: Gestión de productos desde un panel dedicado.

### Backend
- **Framework**: Express con TypeScript.
- **Base de Datos**: PostgreSQL gestionada con Prisma ORM.
- **Rutas REST**:
  - CRUD de productos.
  - CRUD de categorías.
- **Validación**: Manejo de errores y validación de datos.
- **CORS**: Configuración para permitir solicitudes desde el frontend.

---

## Tecnologías Utilizadas

### Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- DaisyUI
- TanStack Router
- Axios

### Backend
- Express
- Prisma ORM
- PostgreSQL
- dotenv

---

## Instalación y Configuración

### Requisitos
- Node.js
- pnpm
- PostgreSQL

### Configuración
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/online-store-crud.git
   cd online-store-crud
   ```

2. Configura las variables de entorno:
   - En el directorio [`backend`](backend), crea un archivo `.env` con la variable `DATABASE_URL` para la conexión a PostgreSQL.
   - En el directorio [`client`](client), crea un archivo `.env` con la variable `VITE_API_URL` apuntando al backend.

3. Instala las dependencias:
   ```bash
   pnpm install
   ```

4. Configura la base de datos:
   ```bash
   cd backend
   pnpm prisma migrate dev
   ```

5. Inicia el backend:
   ```bash
   pnpm dev
   ```

6. Inicia el frontend:
   ```bash
   cd ../client
   pnpm dev
   ```

---

## Estructura del Proyecto

```
.
├── backend/
│   ├── prisma/          # Esquema y migraciones de la base de datos
│   ├── src/
│   │   ├── controllers/ # Controladores de las rutas
│   │   ├── routes/      # Rutas REST
│   │   └── index.ts     # Punto de entrada del servidor
│   └── package.json
├── client/
│   ├── public/          # Recursos públicos
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── contexts/    # Context API para estado global
│   │   ├── hooks/       # Hooks personalizados
│   │   ├── pages/       # Páginas principales
│   │   ├── routes/      # Configuración de rutas
│   │   └── App.tsx      # Componente raíz
│   └── package.json
└── README.md
```

---

## Rutas de la API

### Productos
- **GET** `/api/products/`: Obtiene todos los productos.
- **GET** `/api/products/:id`: Obtiene un producto por su ID.
- **POST** `/api/products/`: Crea un nuevo producto.
- **PUT** `/api/products/:id`: Actualiza un producto existente.
- **DELETE** `/api/products/:id`: Elimina un producto.

### Categorías
- **GET** `/api/categories/`: Obtiene todas las categorías.
- **GET** `/api/categories/:id`: Obtiene una categoría por su ID.
- **POST** `/api/categories/`: Crea una nueva categoría.
- **PUT** `/api/categories/:id`: Actualiza una categoría existente.
- **DELETE** `/api/categories/:id`: Elimina una categoría.

---

## Próximas Mejoras
- Autenticación de usuarios.
- Implementación de pruebas unitarias y de integración.
- Optimización de rendimiento y SEO.
- Implementación de un sistema de pagos.

---

¡Contribuciones son bienvenidas! 🎉