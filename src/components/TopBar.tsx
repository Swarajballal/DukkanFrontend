import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { AiFillNotification } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { ModeToggle } from "./mode-toggle";


const TopBar = () => {
  return (
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

  );
};

export default TopBar;