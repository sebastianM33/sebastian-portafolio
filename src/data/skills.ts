export interface Tecnologia {
  nombre: string;
  gradienteFondo: string;
  claseIcono: string;
  imagenSrc?: string;
  claseImagen?: string;
}

export const tecnologias: Tecnologia[] = [
  {
    nombre: "React",
    gradienteFondo: "gradient-cyan-blue",
    claseIcono: "devicon-react-original colored",
  },
  {
    nombre: "TypeScript",
    gradienteFondo: "gradient-blue",
    claseIcono: "devicon-typescript-plain colored",
  },
  {
    nombre: "Python",
    gradienteFondo: "gradient-yellow-blue",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    nombre: "MySQL",
    gradienteFondo: "gradient-blue-light",
    claseIcono: "devicon-mysql-original colored",
  },
  {
    nombre: "MongoDB",
    gradienteFondo: "gradient-green-dark",
    claseIcono: "devicon-mongodb-plain colored",
  },
  {
    nombre: "Docker",
    gradienteFondo: "gradient-blue-light",
    claseIcono: "devicon-docker-plain colored",
  },
  {
    nombre: "Git",
    gradienteFondo: "gradient-red-orange",
    claseIcono: "devicon-git-plain colored",
  },
  {
    nombre: "Tailwind",
    gradienteFondo: "gradient-cyan",
    claseIcono: "devicon-tailwindcss-original colored",
  },
  {
    nombre: "JavaScript",
    gradienteFondo: "gradient-yellow",
    claseIcono: "devicon-javascript-plain colored",
  },
  {
    nombre: "Html",
    gradienteFondo: "gradient-orange",
    claseIcono: "devicon-html5-plain colored",
  },
  {
    nombre: "Css",
    gradienteFondo: "gradient-orange",
    claseIcono: "devicon-css3-plain colored",
  },
  {
    nombre: "Figma",
    gradienteFondo: "gradient-orange",
    claseIcono: "devicon-figma-plain colored",
  },
  {
    nombre: "Astro",
    gradienteFondo: "gradient-yellow-blue",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-plain.svg",
    claseImagen: "icono-naranja",
  },
  {
    nombre: "FastAPI",
    gradienteFondo: "gradient-green-dark",
    claseIcono: "devicon-fastapi-plain colored",
  },
  {
    nombre: "Django",
    gradienteFondo: "gradient-green-dark",
    claseIcono: "devicon-django-plain colored",
  },
  {
    nombre: "Github",
    gradienteFondo: "gradient-green-dark",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    claseImagen: "icono-blanco",
  },
  {
    nombre: "Postman",
    gradienteFondo: "gradient-red-orange",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    nombre: "DBeaver",
    gradienteFondo: "gradient-blue-light",
    claseIcono: "",
    imagenSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg",
  },
];
