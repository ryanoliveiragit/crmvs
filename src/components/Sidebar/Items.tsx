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
}

export const NAV_ITEMS: NavItemProps[] = [
    {
      icon: <HiOutlinePencilAlt />,
    },
    {
      label: 'sobre',
      icon: <AiOutlineInbox />,
    },
    {
      label: 'sobre',
      icon: <FiBookmark />,
    },
    {
      label: 'sobre',
      icon: <RxShare1 />,
    },
    {
      label: 'sobre',
      icon: <AiOutlineDownload />,
    },
    {
      label: 'sobre',
      icon: <BsPrinter />,
    },
    {
      label: 'sobre',
      icon: <BsGear />,
    },
  ];