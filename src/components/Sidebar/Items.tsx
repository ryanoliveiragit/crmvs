import { ReactNode } from 'react';
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {AiOutlineInbox} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {RxShare1} from 'react-icons/rx'
import {AiOutlineDownload} from 'react-icons/ai'
import {BsPrinter} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'


interface NavItemProps{
    icon: ReactNode;
    href: string;
    label: string;
}

export const NAV_ITEMS: NavItemProps[] = [
    {
      label: 'sobre',
      icon: <HiOutlinePencilAlt />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <AiOutlineInbox />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <FiBookmark />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <RxShare1 />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <AiOutlineDownload />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <BsPrinter />,
      href: "/sobre",
    },
    {
      label: 'sobre',
      icon: <BsGear />,
      href: "/sobre",
    },
  ];