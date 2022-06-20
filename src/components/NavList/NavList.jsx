import Link from 'next/link';

import IconWrap from '@/components/IconWrap/IconWrap';
import navList from '@/lib/navList';

const NavList = () => {
  return (
    <ul className="ml-8 hidden md:flex md:w-full md:justify-start md:gap-2 md:text-xs">
      {navList.map((item) => (
        <li key={item.name}>
          <Link href={item.href}>
            <a className="flex items-center space-x-2 p-4">
              <span>
                <IconWrap Icon={item.icon} size={20} color="white" />
              </span>
              <span className="hidden lg:block">{item.name}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
