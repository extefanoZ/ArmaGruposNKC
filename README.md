# ArmaGruposNKC

Una pequeña aplicación web para crear equipos aleatorios a partir de una lista de participantes. Ideal para juegos, dinámicas de aula o cualquier situación donde necesites dividir personas en grupos rápidos y equitativos.

---

## 🎯 Objetivo
Permitir que un usuario agregue nombres a una lista, seleccione el tamaño de equipo (1–4) y genere equipos aleatorios usando un algoritmo probado (Fisher–Yates) para mezclar la lista.

## ✨ Características
- Añadir y eliminar participantes (persistencia local vía `localStorage`).
- Selección de tamaño de equipo (1 a 12 integrantes).
- Generación de grupos aleatorios y visualización inmediata.
- Pequeña suite de pruebas unitarias para la lógica de agrupamiento (Jest).

## 📦 Estructura del proyecto
- `index.html` — Interfaz de usuario.
- `style.css` — Estilos.
- `app.js` — Lógica de la aplicación y manipulación del DOM.
- `tests/logica.test.js` — Pruebas unitarias de la lógica de agrupamiento.

## 🚀 Cómo usar (rápido)
1. Abrir `index.html` en tu navegador. (Arrastra el archivo al navegador o usa un servidor local).
2. Agrega nombres en el campo "Agregar amigo" y presiona Enter o el botón.
3. Selecciona el tamaño del equipo (1–4) y pulsa "Sortear" para generar los equipos.

## 🛠 Instalación y ejecución
Si usas pnpm (recomendado según el repositorio):

```bash
pnpm install
```

Para correr las pruebas unitarias con Jest:

```bash
pnpm test
```

Nota: La app es una pequeña web estática: puedes abrir `index.html` directamente.

## ✅ Ejemplo de flujo
- Abres la página.
- Agregas: Ana, Juan, Pedro, María, Carlos, Lucía.
- Seleccionas tamaño 2 y haces clic en "Sortear" → obtienes 3 grupos de 2.

## 🧪 Tests
La lógica de creación de grupos se prueba en `tests/logica.test.js` con Jest. Ejecuta `pnpm test` para verificar que la función de agrupamiento cumple con los criterios esperados.

## 🤝 Contribuciones
Si quieres mejorar la UI, añadir opciones de configuración (por ejemplo manejo de desigualdad de grupos) o internacionalización, abre un issue o un PR. Sigue estas recomendaciones:

- Abre un issue describiendo el cambio.
- Crea una rama con un nombre descriptivo.
- Incluye pruebas para cambios en la lógica.

## 📝 Licencia
Licencia abierta.

## ✉️ Contacto
Si tienes dudas o sugerencias, abre un issue en este repositorio.

---

¡Listo! Disfruta armando grupos de forma rápida y sencilla.
