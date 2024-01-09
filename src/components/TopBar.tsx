import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Menu } from 'lucide-react';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { AiFillNotification } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { ModeToggle } from "./mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
import { Button } from '@/components/ui/button';


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

const TopBar = () => {
  return (
    <>
    <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full md:hidden bl'>
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
                                    <span key={index}
                                        className='block px-2 py-1 text-lg flex gap-2'
                                    >
                                        {route.icon}
                                        {route.label}

                                    </span>   
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                
                </div>
                <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                    {routes.map((route,index) => (
                        <Button asChild variant={'ghost'} key={index}>
                            <span key={index}
                            className='text-sm font-medium transition-colors flex gap-2'
                            >
                                {route.icon}
                                {route.label}
                            </span>
                        </Button>       
                    ))}
                </nav>
               
            </div>
    <form className="dark:bg-gray-900 text-gray-700 dark:text-white">
      <div className="relative grid md:grid-cols-12 grid-cols-3 gap-4 p-4">
        <div className="col-span-4 flex">
          <span className="font-semibold pl-6 mt-1.5">Payments</span>
          <span className="md:pl-6 pl-2 flex md:items-center items-end text-xs gap-1 text-slate-600 dark:text-slate-300">
            <HiOutlineQuestionMarkCircle className="text-base hover:cursor-pointer" />
            How it works
          </span>
        </div>

        <div className="col-span-4 relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground dark:text-muted-background" />
          <Input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="pl-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-gray-100 dark:bg-gray-800"
          />
        </div>

        <div className="col-span-4 flex justify-end mr-5 gap-3">
          <div className="bg-gray-200 dark:bg-gray-700 p-2 w-fit rounded-full">
            <AiFillNotification className="h-5 w-5 hover:cursor-pointer text-gray-700 dark:text-white"/>
          </div>

          <div className="bg-gray-200 dark:bg-gray-700 w-fit p-2 rounded-full">
            <TiArrowSortedDown className="h-6 w-6 hover:cursor-pointer text-gray-700 dark:text-white" />
          </div>

          <ModeToggle />
        </div>
      </div>
    </form>
    </>
  );
};

export default TopBar;