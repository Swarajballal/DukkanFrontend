
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";
import { MdBorderAll } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { MdPayments } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { HiOutlineBolt } from "react-icons/hi2";


const routes = [
    {
      href: '/',
      label: 'Home',
      icon: <GoHome className='text-white self-center text-xl'/>,
    },
    {
      href: '/orders',
      label: 'Orders',
      icon: <PiNotepad className='text-white self-center text-xl'/>,
    },
    {
      href: '/products',
      label: 'Products',
      icon: <MdBorderAll className='text-white self-center text-xl'/>,
    },
    {
      href: '/delivery',
      label: 'Delivery',
      icon: <CiDeliveryTruck className='text-white self-center text-xl'/>,
    },
    {
      href: '/marketing',
      label: 'Marketing',
      icon: <CiBullhorn className='text-white self-center text-xl'/>,
    },
    {
      href: '/analytics',
      label: 'Analytics',
      icon: <VscGraph className='text-white self-center text-xl'/>,
    },
    {
      href: '/payments',
      label: 'Payments',
      icon: <MdPayments className='text-white self-center text-xl rotate-180'/>,
    },
    {
      href: '/tools',
      label: 'Tools',
      icon: <CiLocationArrow1 className='text-white self-center text-xl -rotate-90'/>,
    },
    {
      href: '/discounts',
      label: 'Discounts',
      icon: <CiDiscount1 className='text-white self-center text-xl'/>,
    },
    {
        href: '/audience',
        label: 'Audience',
        icon: <MdOutlinePeopleAlt className='text-white self-center text-xl'/>,
      },
      {
        href: '/appearance',
        label: 'Appearance',
        icon: <MdOutlineColorLens className='text-white self-center text-xl'/>,
      },
      {
        href: '/plugins',
        label: 'Plugins',
        icon: <HiOutlineBolt className='text-white self-center text-xl'/>,
      },
  ];
  


const Header = () => {

  return (
    <header className='sm:flex sm:justify-between py-3 border-b'>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
                <div className='flex items-center'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className='h-6 md:hidden w-6'
                             />
                        </SheetTrigger>
                        <SheetContent side='left'
                        className='w-[300px] sm:w-[400px]'>
                            <nav className='flex flex-col gap-4'>
                                {routes.map((route, index) => (
                                    <Link key={index}
                                        to={route.href}
                                        className='block px-2 py-1 text-lg'
                                    >
                                        {route.label}
                                    </Link>   
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                
                </div>
                <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                    {routes.map((route,index) => (
                        <Button asChild variant={'ghost'} key={index}>
                            <Link key={index}
                            to={route.href}
                            className='text-sm font-medium transition-colors'
                            >
                                {route.label}
                            </Link>
                        </Button>       
                    ))}
                </nav>
               
            </div>
    </header>    
  );
};

export default Header;