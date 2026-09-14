# MarketGo Landing Page

Landing page oficial de MarketGo construida con Vue 3, Vite y vue-i18n. El proyecto toma como referencia tecnica la arquitectura modular de BuildLine y una direccion visual inspirada en Ventix.

## Tecnologias

- Vue 3
- Vite
- TypeScript
- vue-i18n
- CSS modular por secciones

## Estructura

```text
public/assets/          # Imagenes e iconos publicos
src/assets/styles/      # Sistema visual y estilos por componente
src/locales/            # Traducciones ES/EN
src/shared/             # Componentes compartidos
src/landing/            # Secciones principales del landing page
docs/                   # Historias de usuario y decisiones arquitectonicas
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Ramas sugeridas

- `main`: version estable.
- `develop`: integracion.
- `feature/project-setup`: configuracion inicial.
- `feature/landing-layout`: estructura visual.
- `feature/i18n-content`: contenido bilingue.
- `feature/docs`: documentacion.
