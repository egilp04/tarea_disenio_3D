# 🏛️ IES Albarregas: Un Viaje al Corazón de Augusta Emerita

Una experiencia web interactiva 3D que fusiona la historia romana de Mérida con la formación tecnológica de vanguardia del **IES Albarregas**. 


## 🌟 Sobre el Proyecto

Este proyecto ha sido desarrollado como una plataforma promocional única para el **IES Albarregas**. A través de una isla flotante interactiva, los visitantes pueden explorar el legado de **Augusta Emerita** y descubrir por qué nuestro instituto es el puente perfecto entre la herencia milenaria y las profesiones del mañana.

### ✨ Características
* **Isla 3D Interactiva:** Explora el Acueducto de los Milagros y el entorno del centro desde cualquier ángulo.
* **Arquitectura Moderna:** Desarrollado con React Three Fiber, Flask, Redis y Docker.
* **Diseño Exclusivo:** Modelado íntegramente en Blender para este proyecto.

---

## 🎨 Diseño 3D y Modelado

El modelo de la isla, el Acueducto de los Milagros y el entorno del IES Albarregas ha sido modelado desde cero buscando un estilo *Low Poly* elegante y optimizado para la web.

* **Archivo blend:** [Descargar el blender: isla.blend](./src/assets/modelo_3D/Isla.blend) (Incluido para fines educativos y transparencia del proceso creativo).
* **Exportado:** Se utiliza el formato `.glb` en el frontend para garantizar una carga fluida y un rendimiento óptimo en navegadores.

---

## 🛠️ Stack Tecnológico

### Frontend
* **React + TypeScript + Vite**
* **Three.js / React Three Fiber:** Para el renderizado de la escena 3D.
* **Tailwind CSS:** Para una interfaz moderna y adaptativa.
* **shadcn/ui:** Componentes de alta calidad y accesibilidad.

### Backend e Infraestructura
* **Flask:** Lógica de servidor y API.
* **Redis:** Sistema de caché y contador de visitas en tiempo real.
* **Docker & Docker Compose:** Contenerización de toda la arquitectura para un despliegue rápido y seguro en Ubuntu Server.

---

## 🚀 Instalación y Despliegue

### Requisitos previos
* Docker y Docker Compose
* Node.js (si deseas ejecutar el frontend por separado)

### Despliegue con Docker
Para levantar todo el entorno (Frontend, Backend, Redis):

```bash
sudo docker compose up -d --build
