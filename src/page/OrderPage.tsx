import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const OrderPage = () => {
  return (
    <div className="h-screen flex">
        <SideBar />
        <div className="flex flex-col w-5/6">
            <TopBar />
        </div>
    </div>
  );
};

export default OrderPage;