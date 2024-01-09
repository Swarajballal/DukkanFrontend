import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { GoArrowSwitch } from "react-icons/go";
import { GrDownload } from "react-icons/gr";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LiaInfoCircleSolid } from "react-icons/lia";

const data = [
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
    {
      orderId: '#281209',
      orderDate: '7 July, 2023',
      orderAmount: '1,278.23',
      transactionFees: '₹22'
    },
];

const pageNo = [10,11,12,13,14,15,16,17,18];


const Transactions = () => {
  return (
    <div className="flex flex-col mx-auto w-[95%] mt-6 bg-white">
      <div className="flex items-center gap-2 bg-zinc-100 pb-6 dark:bg-gray-800">
            <span className="md:text-2xl text-lg font-semibold text-gray-700 dark:text-white">Transactions</span>
            <span className="text-gray-800 border-black font-bold dark:text-white">|</span>
            <span className="md:text-2xl text-lg font-semibold text-gray-700 dark:text-white">This Month</span>
      </div>

      <div className="relative grid grid-cols-12 gap-4 p-4 bg-white dark:bg-gray-900">
           
            <div className="col-span-3 relative">
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Search by order ID..."
                    className="pl-7 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:bg-gray-800"
                />
            </div>

            <div className="col-span-9 flex justify-end gap-3">
                <div className="flex font-sans gap-1 w-fit px-4 text-base items-center bg-zinc-50 dark:bg-gray-800 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:cursor-pointer hover:bg-zinc-100 hover:dark:bg-gray-600">
                    Sort
                    <GoArrowSwitch className="h-4 w-6 rotate-90" />
                </div>

                <div className="flex font-thin font-sans w-fit px-2 text-sm items-center bg-zinc-50 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:cursor-pointer hover:bg-zinc-100 dark:bg-gray-800 hover:dark:bg-gray-600">
                    <GrDownload className="h-5 w-5 text-gray-700 dark:text-white" />
                </div>
            </div>


           <div className="col-span-12 relative">
            <Table>
                    <TableCaption className="py-1">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                            <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                            {pageNo.map((item, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink href="#">
                                 {item}
                                </PaginationLink>
                            </PaginationItem>
                            ))}
                            <PaginationItem>
                            <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                        </Pagination>

                    </TableCaption>
                    <TableHeader>
                        <TableRow className="bg-zinc-100 dark:bg-gray-800">
                        <TableHead className="w-1/4 dark:text-white">Order ID</TableHead>
                        <TableHead className="w-1/4 dark:text-white">Order date 
                            <MdOutlineArrowDropDown className="h-6 w-5 inline-block dark:text-white" />
                        </TableHead>
                        <TableHead className="w-1/4 text-right dark:text-white">Order amount</TableHead>
                        <TableHead className="text-right dark:text-white">Transaction fees
                        <LiaInfoCircleSolid className="h-3.5 w-3.5 inline-block ml-1 dark:text-white"/>
                        </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium text-[#146EB4]">{item.orderId}</TableCell>
                            <TableCell className="dark:text-white">{item.orderDate}</TableCell>
                            <TableCell className="text-right dark:text-white">{item.orderAmount}</TableCell>
                            <TableCell className="text-right dark:text-white">{item.transactionFees}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
           </div>
            
        </div>

        
    </div>
  );
};

export default Transactions;