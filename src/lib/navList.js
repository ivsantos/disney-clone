import { IconHome } from '@tabler/icons';
import { IconSearch } from '@tabler/icons';
import { IconPlus } from '@tabler/icons';
import { IconStar } from '@tabler/icons';
import { IconMovie } from '@tabler/icons';
import { IconDeviceTv } from '@tabler/icons';

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
