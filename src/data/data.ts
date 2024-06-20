
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

const links: linkInterface[] = [
  {
    id: 1,
    name: 'Home',
    link: '#home'
  },
  {
    id: 2,
    name: 'About',
    link: '#about'
  },
  {
    id: 3,
    name: 'Projects',
    link: '#projects'
  },
  {
    id: 4,
    name: 'Contact',
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

export {
  links,
  technologies,
}
