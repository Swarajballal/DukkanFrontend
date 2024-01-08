import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { AiFillNotification } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";


const TopBar = () => {
  return (
    <form>
        <div className="relative grid grid-cols-12 gap-4 p-4">
            <div className="col-span-4 flex">
               <span className="font-semibold pl-6 mt-1.5">Payments</span>
               <span className="pl-6 flex items-center text-xs gap-1 text-slate-600">
                 <HiOutlineQuestionMarkCircle className="text-base hover:cursor-pointer" />
                 How it works
               </span>
            </div>

            <div className="col-span-4 relative">
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search features, tutorials, etc."
                    className="pl-8"
                />
            </div>

            <div className="col-span-4 flex justify-end mr-10 gap-3">
               <div className="bg-gray-200 p-2 w-fit rounded-full">
                    <AiFillNotification className="h-5 w-5 hover:cursor-pointer text-gray-700"/>
               </div>

               <div className="bg-gray-200 w-fit p-2 rounded-full">
                    <TiArrowSortedDown className="h-6 w-6 hover:cursor-pointer text-gray-700" />
               </div>
            </div>
            
        </div>
    </form>
  );
};

export default TopBar;