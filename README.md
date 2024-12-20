# Cat-Breeds 🐱
**Nota: si desea pasar directamente a la ejecución en Android Studio, salte a la ultima linea de este documento** 

Cat-Breeds es una aplicación móvil que creé como parte de una prueba técnica para mostrar mis habilidades en el desarrollo móvil con Frameworks como **Ionic** y **Angular**. Con esta app, puedes explorar y conocer más sobre diferentes razas de gatos, obteniendo información detallada directamente de una API externa

## Características Principales
- 🐾 **Explorar Razas de Gatos**: Lista interactiva de razas con imágenes y descripciones.
- 🔍 **Búsqueda Filtrada**: Encuentra razas específicas con un buscador intuitivo.
- 📖 **Información Detallada**: Accede a características como temperamento, esperanza de vida y origen.
- 🌐 **Consumo de API**: Datos dinámicos obtenidos de [The Cat API](https://thecatapi.com/).

---

## Objetivo del Proyecto
El objetivo de esta prueba técnica es demostrar competencias en:
1. **Desarrollo Móvil Híbrido**: Creación de una experiencia fluida en dispositivos móviles utilizando Ionic.
2. **Consumo de APIs REST**: Conexión y manipulación de datos externos de forma eficiente.
3. **Buenas Prácticas de Código**: Organización modular y aplicación de arquitectura simple pero eficiente.
4. **Diseño UI/UX**: Diseño responsivo y agradable para el usuario.

---

## Estructura del Proyecto 📂

El proyecto sigue una arquitectura modular y organizada para facilitar la escalabilidad y el mantenimiento del código.


- **`core/models/`**: Define modelos como `CatModel` para estructurar datos.
- **`core/services/`**: Implementa servicios como `CatService` para manejar la comunicación con la API.
- **`share/components/`**: Contiene componentes reutilizables que pueden usarse en varias páginas.
- **`pages/`**: Implementa las páginas de la app.

---
## Configuración del Proyecto ⚙️

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1. Clonar el Repositorio 🖥️

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/JaRodriguez97/catBreeds.git
cd catBreeds
```

### 2. Instalar Dependencias 📦
Asegúrate de tener Node.js (v16 o superior) y Ionic CLI instalados. Luego, instala las dependencias:

```bash
npm install
```

### 3. Ejecutar la Aplicación 🚀
Levanta el servidor de desarrollo y abre la aplicación en el navegador:

```bash
ionic serve
```

### 4. Abrir en el android Studio
Teniendo instalado previamente el Android Studio, con el siguiente comando se podrá generar la carpeta WWW, android e ios para posteriormente lanzar el editor y visualizar su funcionamiento:

```bash
npm run dev
```

---


