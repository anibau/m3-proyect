# SPAPET - Sistema de Gestión de Turnos para un Spa de Mascotas

## Descripción
SPAPET es una aplicación web diseñada para la gestión de turnos en un spa para mascotas. Permite a los usuarios registrarse, iniciar sesión, gestionar sus mascotas y solicitar turnos para sus servicios. El sistema cuenta con autenticación, persistencia de datos y operaciones CRUD para la administración de usuarios y mascotas.

## Tecnologías Utilizadas
- **Frontend:** React, TypeScript
- **Backend:** Express, TypeScript
- **Base de Datos:** PostgreSQL
- **Lenguajes:** JavaScript, TypeScript

## Funcionalidades
- **Autenticación de usuarios** (registro e inicio de sesión)
- **Gestión de turnos** (crear, editar, cancelar turnos)
- **Administración de usuarios** (actualización de perfil y datos personales)
- **Administración de mascotas** (registro, edición y eliminación de mascotas)
- **Persistencia de datos** con PostgreSQL
- **Interfaz amigable** desarrollada con React

## Páginas de la Aplicación
- **Home:** Página principal con información sobre el servicio.
- **Turnos:** Gestión de turnos disponibles y asignados.
- **Register:** Registro de nuevos usuarios.
- **Login:** Inicio de sesión de usuarios registrados.

## Instalación y Ejecución
### 1. Clonar el repositorio
```sh
 git clone https://github.com/anibau/m3-proyect.git
 cd SPAPET
```
### 2. Configuración del Backend
```sh
 cd backend
 npm install
```
#### Variables de Entorno (`.env`)
```env
PORT=5000
DB_HOST=localhost
DB_PORT= tu_port
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=spapet
JWT_SECRET=tu_clave_secreta
```
### 3. Iniciar el Servidor
```sh
 npm run dev
```

### 4. Configuración del Frontend
```sh
 cd ../frontend
 npm install
 npm start
```

## API Endpoints
### **Usuarios**
- `POST /user/register` - Registrar un nuevo usuario.
- `POST /user/login` - Iniciar sesión.
- `GET /user/:id` - Obtener datos de un usuario.
- `PUT /user/:id` - Actualizar datos de un usuario.
- `DELETE /user/:id` - Eliminar un usuario.

### **Mascotas**
- `POST /pets` - Registrar una nueva mascota.
- `GET /pets/:id` - Obtener datos de una mascota.
- `PUT /pets/:id` - Editar datos de una mascota.
- `DELETE /pets/:id` - Eliminar una mascota.

### **Turnos**
- `POST /turns` - Crear un turno.
- `GET /turns` - Listar turnos disponibles.
- `GET /turns/:id` - Obtener un turno específico.
- `PUT /turns/:id` - Editar un turno.
- `DELETE /turns/:id` - Cancelar un turno.

## Contribución
Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios y confirma (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT.

