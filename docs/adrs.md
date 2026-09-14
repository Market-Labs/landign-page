# Architecture Decision Records

## ADR-0001: Use Vue 3 + Vite

Status: Accepted

The landing page uses Vue 3 and Vite to keep the project lightweight, component-based, and easy to run locally.

## ADR-0002: Use vue-i18n For Bilingual Content

Status: Accepted

All user-facing text is centralized in `src/locales` to support Spanish and English without duplicating component markup.

## ADR-0003: Use Modular CSS By Section

Status: Accepted

Styles are separated by landing section to keep the visual implementation readable and close to the component structure.
