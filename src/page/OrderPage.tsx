import OrderSummary from "@/components/OrderSummary";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const OrderPage = () => {
  return (
    <div className="h-sreen flex">
        <SideBar />
        <div className="flex flex-col md:w-5/6 w-full">
            <TopBar />
            <OrderSummary />
        </div>
    </div>
  );
};

export default OrderPage;