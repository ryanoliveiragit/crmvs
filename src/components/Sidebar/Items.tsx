import { ReactNode, useState } from 'react';
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {AiOutlineInbox} from 'react-icons/ai'
import {FiBookmark} from 'react-icons/fi'
import {RxShare1} from 'react-icons/rx'
import {AiOutlineDownload} from 'react-icons/ai'
import {BsPrinter} from 'react-icons/bs'
import {BsGear} from 'react-icons/bs'


interface NavItemProps{
    icon?: ReactNode;
    href?: string;
    label?: string;
    id: number;
}

export const NAV_ITEMS: NavItemProps[] = [
    {
      id: 10,
      icon: <HiOutlinePencilAlt />,
    },
    {
      id: 20,
      label: 'sobre',
      icon: <AiOutlineInbox />,
    },
    {
      id: 30,
      label: 'teste',
      icon: <FiBookmark />,
    },
    {
      id: 40,
      label: 'testess',
      icon: <RxShare1 />,
    },
    {
      id: 50,
      label: 'testesss',
      icon: <AiOutlineDownload />,
    },
    {
      id: 60,
      label: 'testesss',
      icon: <BsPrinter />,
    },
    {
      id: 70,
      label: 'testessss',
      icon: <BsGear />,
    },
  ];