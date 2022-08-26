import {
  IconDeviceTv,
  IconHome,
  IconMovie,
  IconPlus,
  IconSearch,
  IconStar,
} from '@tabler/icons';

const navList = [
  {
    name: 'INICIO',
    icon: IconHome,
    href: '/',
  },
  {
    name: 'BÚSQUEDA',
    icon: IconSearch,
    href: '/search',
  },
  {
    name: 'MI LISTA',
    icon: IconPlus,
    href: '/list',
  },
  {
    name: 'ORIGINALES',
    icon: IconStar,
    href: '/movies',
  },
  {
    name: 'PELÍCULAS',
    icon: IconMovie,
    href: '/movies',
  },
  {
    name: 'SERIES',
    icon: IconDeviceTv,
    href: '/series',
  },
];

export default navList;
