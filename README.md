# PROYECTO FINAL DAWEC CON REACT ROUTER

- Autores: José Antonio, Dani Marin
- Asignatura: Desarrollo de Aplicaciones Web en Entorno Cliente
- Curso: S2DAW

## 1. Descripción de la práctica.
El objetivo de esta práctica consiste en acceder a los datos de una API, para mostrarlos meidante una aplicación de página única utilizando React Router, TypeScript y Tailwind. 

Nuestra pagina obtiene los datos de una API de videojuegos llamada [RAWG](https://api.rawg.io/api), y en nuestro proyecto listamos, filtramos y mostramos informacion de videojuegos, plataformas, y generos.

## 2. Explicación de la aplicación.
Nuestra aplicación consiste en una página web (**Games**) que contiene la lista de todos los videojuegos paginados de 12 en 12 y muestra un poco de informacion como su nombre, fecha de lanzamiento, genero y plataformas, en esta pagina se encuentran dispoibles dos tipos de filtrados, en los que podremos clasificar los juegos por generos y plataformas, al final de la pagina tambien encontraremos unos botones para navegar por las diferentes paginas de videojuegos que se generan debido al paginado de 12 en 12, ademas si pulsamos dentro del card del videojuego nos llevara a una nueva pagina (**GameDetails**), en la que podremos observar mas informacion a cerca del videojuego, como una breve descripcion o todos los generos y plataformas listadas.

Una segunda página (**Platforms**), que es similar a la anterior, pero esta vez contiene un listado de plataformas

Y una tercera página (**Genres**), que contiene un listado de generos

Tambien esta la route (**Layout**), que permite insertar el header y footer a todas las paginas de la web

En todas las páginas se "filtrar por nombre", ya que disponebos de un **SearchInput** que nos permite buscar por nombre en los juegos, plataformas y generos

## 3. Tecnologías utilizadas.
Para la creación de nuestra aplicación, hemos utilizado React Router para especificar diferentes rutas.

Para los estilos hemos decidido utilizar TailwindCSS debido a la flexibilidad que nos proporciona a la hora de estilar la aplicación y lo útil que resultan sus clases predefinidas.

Y adicionalmente hemos utilizado TypeScript en lugar de JavaScript, pues faicilita en gran medida la codificación y elimina muchos errores en tiempo de ejecución gracias al tipado de variables, entre otras características que proporciona.

Todo este proyecto los hemos creado con Vite, un gestor que nos permite instalar dependencias así como poder ejecutar el proyecto de una forma sencilla.

## 4. Instrucciones de instalación.
Ya que hemos utilizado Vite para la creación del proyecto, es necesario instalar Node para ejecutar correctamente el proyecto.

1. Instalar node y sus dependencias utilizando el gestor de paquetes NPM: 
```bash
npm install
```

2. Lanzar la aplicación con node:
```bash
npm run dev
```
La aplicación web responderá a la dirección `http://localhost:5173`.

3. Opcionalmente se puede crear una build de la aplicación:
```bash
npm run build
```

## 5. Enlaces de interés.

- [Enlace a la página desplegada con Vercel](https://proyecto-react-rawg.vercel.app/)