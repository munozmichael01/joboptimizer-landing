# 🚀 JobOptimizer - Landing Page

Una landing page moderna y profesional para JobOptimizer, la plataforma de marketing technology que automatiza y optimiza campañas de ofertas de trabajo con IA.

## ✨ Características

- **🎨 Diseño Moderno**: Interface profesional con gradientes, glassmorphism y micro-animaciones
- **📱 Responsive**: Optimizado para todos los dispositivos (mobile-first)
- **⚡ Performance**: Carga rápida y optimizada para conversión
- **🎭 Animaciones**: Efectos suaves con Framer Motion, parallax y scroll triggers
- **🎯 Conversión Optimizada**: CTAs estratégicos, social proof y formularios de captura

## 🛠️ Tecnologías

- **Next.js 15** - React framework con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

## 📋 Secciones

1. **🚀 Hero Section** - Propuesta de valor principal con demo visual
2. **⚡ Problema → Solución** - Transformación del caos manual a automatización IA
3. **🎯 Features** - 3 pilares principales con demos interactivos
4. **👥 Target Audiences** - 4 segmentos con tabs interactivos
5. **💰 Pricing** - 4 planes con calculator ROI
6. **🔥 CTA Final** - Conversión con efectos visuales
7. **📱 Footer** - Links, newsletter y contacto

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm/yarn/pnpm

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/joboptimizer-landing.git
cd joboptimizer-landing

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) para ver la landing page.

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente Next.js
3. Deploy automático en cada push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Añadir `output: 'export'` en `next.config.ts` para static export

### Otros Proveedores
Compatible con cualquier proveedor que soporte Next.js (AWS Amplify, Railway, etc.)

## 🎨 Personalización

### Colores
Editar variables CSS en `src/app/globals.css`:
```css
:root {
  --primary-blue: #2563eb;
  --accent-green: #10b981;
  /* ... más colores */
}
```

### Contenido
- **Hero**: `src/components/sections/HeroSection.tsx`
- **Pricing**: `src/components/sections/PricingSection.tsx`
- **Features**: `src/components/sections/FeaturesSection.tsx`

### Animaciones
Personalizar animaciones en cada componente usando Framer Motion.

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **SEO**: Metadata completo y estructura semántica
- **Accesibilidad**: Cumple estándares WCAG

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-seccion`)
3. Commit cambios (`git commit -m 'Add: nueva sección testimonials'`)
4. Push al branch (`git push origin feature/nueva-seccion`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para detalles.

## 📞 Contacto

- **Email**: hello@joboptimizer.com
- **Website**: [JobOptimizer.com](https://joboptimizer.com)
- **LinkedIn**: [JobOptimizer](https://linkedin.com/company/joboptimizer)

---

⭐ Dale una estrella si este proyecto te fue útil!
