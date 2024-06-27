
interface linkInterface {
  id: number;
  name: string;
  link: string;
}

interface techInterface {
  id: number;
  name: string;
  icon: string;
}

interface socialInterface {
  id: number;
  name: string;
  icon: string;
  link: string;
}

interface projectInterface {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

interface experienceInterface {
  id: number;
  company: string;
  position: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
}

const links: linkInterface[] = [
  {
    id: 1,
    name: 'Inicio',
    link: '#home'
  },
  {
    id: 2,
    name: 'Acerca',
    link: '#about'
  },
  {
    id: 3,
    name: 'Proyectos',
    link: '#projects'
  },
  {
    id: 4,
    name: 'Experiencia',
    link: '#experience'
  },
  {
    id: 5,
    name: 'Contacto',
    link: '#contact'
  }
]

const technologies: techInterface[] = [
  {
    id: 1,
    name: 'HTML',
    icon: '/icons/html.svg'
  },
  {
    id: 2,
    name: 'CSS',
    icon: '/icons/css.svg'
  },
  {
    id: 3,
    name: 'Javascript',
    icon: 'icons/js.svg'
  },
  {
    id: 4,
    name: 'Typescript',
    icon: 'icons/ts.svg'
  },
  {
    id: 5,
    name: 'Astro',
    icon: 'icons/astro.svg'
  },
  {
    id: 6,
    name: 'React',
    icon: 'icons/react.svg'
  },
  {
    id: 7,
    name: 'Git',
    icon: 'icons/git.svg'
  },
  {
    id: 8,
    name: 'Github',
    icon: 'icons/github.svg'
  },
  {
    id: 9,
    name: 'Docker',
    icon: 'icons/docker.svg'
  },
  {
    id: 10,
    name: 'Bash',
    icon: 'icons/bash.svg'
  }
]

const social: socialInterface[] = [
  {
    id: 1,
    name: 'Github',
    icon: 'icons/github.svg',
    link: 'https://github.com/DevAlejandroAF'
  },
  {
    id: 2,
    name: 'LinkedIn',
    icon: 'icons/linkedin.svg',
    link: 'https://linkedin.com/in/alejandroaf95/'
  }
]

const projects: projectInterface[] = [
  {
    id: 1,
    title: 'Dashboard',
    shortDescription: 'Esta aplicación web es una herramienta intuitiva y visualmente atractiva que muestra información relevante sobre las ventas del mes, diseñada para apoyar tomas de futuras decisiones.',
    description: 'Esta aplicación web es una herramienta intuitiva y visualmente atractiva que muestra información relevante sobre las ventas del mes, diseñada para apoyar tomas de futuras decisiones.',
    tags: ['Desarrollo Full-stack', 'Diseño UX/UI'],
    link: '/dashboard',
    image: '/images/dashboard.jpeg'
  }
]

const experiences: experienceInterface[] = [
  {
    id: 1,
    company: 'ETB S.A ESP',
    position: 'Aprendiz Universitario',
    date: 'JUN 2022 - ENE 2023',
    description: `Desarrollo de aplicación estilo Dashboard para la visualización de datos en el área de telefonía móvil prepago de la empresa.
Esta aplicación fue desarrollada en el lenguaje Python, usando Pandas, el framework Flask y Plotly (Dash) para la generación de gráficos. Desplegada mediante GitHub y Railway.
Demas tareas propias del área.`,
    tags: ['HTML & CSS', 'Python', 'Flask', 'Plotly', 'Excel', 'Access'],
    link: 'https://etb.com'
  }
] 
export {
  links,
  technologies,
  social,
  projects,
  experiences,
}
