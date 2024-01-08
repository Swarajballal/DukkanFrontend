import { FaChevronDown } from "react-icons/fa";
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
import { CiWallet } from "react-icons/ci";


const SideBar = () => {
  return (
    <div className='w-1/6 h-screen bg-[#1E2640]'>
        <div className='flex flex-col grow w-full'>
            <div className='flex p-5 gap-4'>
                <img src="logo.png" alt="logo" className='w-12 rounded'/>
                <div className='flex-col flex'>
                    <span className='self-stretch text-white text-base'>Nishyan</span>
                    <a href="#">
                        <span className='underline text-slate-300'>Visit store</span>
                    </a>
                </div>
                <FaChevronDown className='text-white self-center text-xl ml-10'/>
            </div>

            <ul className="ml-3 flex flex-col mr-2">
                <li className="hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <GoHome className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Home</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <PiNotepad className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Orders</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <MdBorderAll className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Products</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <CiDeliveryTruck className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Delivery</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <CiBullhorn className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Marketing</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <VscGraph className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Analytics</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <MdPayments className='text-white self-center text-xl rotate-180'/>
                        <span className='text-white text-sm self-center'>Payments</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <CiLocationArrow1 className='text-white self-center text-xl -rotate-90'/>
                        <span className='text-white text-sm self-center'>Tools</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <CiDiscount1 className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Discounts</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <MdOutlinePeopleAlt className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Audience</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <MdOutlineColorLens  className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Appearance</span>
                    </a>
                </li>

                <li className="-mt-4 hover:underline decoration-slate-400 hover:bg-slate-700 rounded">
                    <a href="#" className='flex p-5 gap-4'>
                        <HiOutlineBolt className='text-white self-center text-xl'/>
                        <span className='text-white text-sm self-center'>Plugins</span>
                    </a>
                </li>
            </ul>

            <div className='flex p-2 mb-2 gap-4 bottom-1 fixed bg-slate-700 ml-3 w-[15%]'>
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] bg-slate-600 p-1">
                    <CiWallet className='text-white self-center text-4xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'/>
                </div>
                <div className="flex flex-col">
                    <span className='text-sm self-center text-slate-300'>Available credits</span>
                    <span className="text-white text-sm self-center font-bold">222.10</span>
                </div>
            </div>

        </div>
    </div>
  );
};

export default SideBar;