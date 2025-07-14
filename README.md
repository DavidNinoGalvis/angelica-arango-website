# 🌿 Sitio Web de Angélica Arango – Psicóloga Clínica

Este es el repositorio del sitio web oficial de **Angélica Arango**, psicóloga especializada en acompañamiento emocional y desarrollo personal. El sitio está diseñado para ser rápido, accesible y fácil de administrar desde un panel WordPress.

---

## 🚀 Tecnologías Utilizadas

- **[Next.js](https://nextjs.org/)** – Framework React para renderizado híbrido.
- **[Tailwind CSS](https://tailwindcss.com/)** – Utilidades CSS para estilos modernos y responsivos.
- **[TypeScript](https://www.typescriptlang.org/)** – Tipado estático para una mayor confiabilidad del código.
- **[WordPress (Headless)](https://developer.wordpress.org/rest-api/)** – CMS usado como backend con API REST JSON.
- **[Framer Motion](https://www.framer.com/motion/)** – Animaciones fluidas en React.
- **[Headless UI](https://headlessui.com/)** – Componentes accesibles y personalizables.

---

## 📁 Estructura de Carpetas

```
├── app/
│   ├── page.tsx                # Página principal
│   ├── layout.tsx              # Layout general
├── components/
│   ├── Navbar.tsx              # Navbar responsive con Drawer
│   ├── Hero.tsx                # Sección principal introductoria
│   └── ...                     # Otros componentes
├── context/                    # Context API si se usa estado global
├── hooks/                      # Custom hooks
├── public/                     # Archivos estáticos (logo, imágenes)
├── styles/                     # (opcional) Estilos globales
└── ...
```

---

## 🌐 Conexión con WordPress Headless

Este proyecto consume los datos desde una instalación de WordPress mediante su **API REST JSON**. Puedes configurar el endpoint desde `.env.local`:

```env
NEXT_PUBLIC_WP_API_URL=https://miwordpress.com/wp-json/wp/v2
```

---

## 📱 Responsive y Accesibilidad

- Optimizado para móviles y pantallas pequeñas.
- Menú de navegación tipo **drawer** en dispositivos móviles.
- Cumple con buenas prácticas de **accesibilidad** y animaciones suaves.

---

## 📦 Instalación y Desarrollo

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/angelica-arango-website.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea el archivo `.env.local` con la URL del WordPress:

   ```env
   NEXT_PUBLIC_WP_API_URL=https://tusitio.wordpress.com/wp-json/wp/v2
   ```

4. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```

---

## 🧠 Autor y Créditos

Desarrollado por [David Nino](https://www.linkedin.com/in/daninodev/) para **Angélica Arango**, psicóloga clínica.

Diseño y branding realizado con ❤️ en Figma.

---

## 📌 Estado del Proyecto

✅ Diseño base completo  
🔄 Integración dinámica con WordPress en progreso  
📱 Navegación móvil funcional

---

## 📃 Licencia

Este proyecto es de uso privado para Angélica Arango. No se permite su redistribución sin autorización expresa.
