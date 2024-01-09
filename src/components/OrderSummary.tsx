import { IoIosArrowDown } from "react-icons/io";
import Transactions from "./Transactions";

const OrderSummary = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-auto w-full pb-5">
        <div className="flex mx-auto w-[95%] mt-5 justify-between">
        <div className="font-semibold text-xl w-fit p-2 text-gray-700 dark:text-white">
            Overview
        </div>
    
        <div className="flex font-sans gap-2 w-fit px-4 text-sm items-center bg-zinc-50 dark:bg-gray-900 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-200 hover:dark:bg-gray-600">
            Last Month
            <IoIosArrowDown className="h-4 w-6 text-gray-700 dark:text-white" />
        </div>
        </div>
    
        <div className="flex mx-auto w-[95%] mt-5 justify-between">
        <div className="bg-zinc-50 dark:bg-gray-900 flex flex-col w-[49%] p-5">
            <span className="text-gray-700 dark:text-white mb-3">Online orders</span>
            <span className="md:text-3xl text-base font-semibold text-gray-700 dark:text-white">1,234</span>
        </div>
    
        <div className="bg-zinc-50 dark:bg-gray-900 flex flex-col w-[49%] p-5">
            <span className="text-gray-700 dark:text-white mb-3">Amount received</span>
            <span className="md:text-3xl text-base font-semibold text-gray-700 dark:text-white text-wrap">₹23,92,312.19</span>
        </div>
        </div>
    
        <Transactions />
  </div>
  
  );
};

export default OrderSummary;