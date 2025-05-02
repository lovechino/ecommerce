'use client'

import { Input, Tabs } from "antd";
import ListOrderProduct from "../Product/ListOrderProduct";
import "@/Styles/Payment.css"
import TabPickOnStore from "./TabPickOnStore";
import TabShipping from "./TabShipping";

const listOrderProduct = [
    {
        id: "1",
        name: "Tai nghe Gaming chụp tai không dây Sony INZONE H5-Đen",
        price: 2590000,
        sale_price: 1000000,
        quantity: 2,
        img: '/Image/z5267081368240_2329d6b47fa4381f710d2daddeddd499_d5339ebef0e445a693662a859f966e3d_grande.jpg'
    },
    {
        id: "2",
        name: "Tai nghe Gaming chụp tai không dây Sony INZONE H5-Đen",
        price: 2590000,
        sale_price: 1000000,
        quantity: 2,
        img: '/Image/z5271826414353_68c3a25d6e196378247614f71d51662a_9c4a3ab1c88949a2bcb9736ad97ef5b6_grande.jpg'
    }
]

const PaymentInfo = () => {
    return (
        <>
            <div className="rounded-2xl p-5 border-[0.3px] border-gray-300 bg-white">
                <ListOrderProduct products={listOrderProduct} />
            </div>
            <div className="text-lg my-5 font-semibold uppercase">Thông tin khách hàng</div>
            <div className="rounded-2xl border-[0.3px] border-gray-300 p-5 bg-white">
                <div className="flex justify-between">
                    <div className="text-lg">Quang Diệu</div>
                    <div className="text-[16px] text-gray-500">0939638911</div>
                </div>
                <div className="flex flex-col gap-5 mt-3">
                    <Input
                        placeholder="Email"
                    />
                    <i className="text-gray-400"> (*) Hóa đơn VAT sẽ được gửi qua email này</i>
                </div>
            </div>
            <div className="text-lg my-5 font-semibold uppercase">Thông tin nhận hàng</div>
            <div className="rounded-2xl border-[0.3px] border-gray-300 p-5 bg-white">
                <Tabs 
                    defaultActiveKey="1"
                    items={[
                        {
                            label: 'Nhận tại của hàng',
                            key: '1',
                            children: <TabPickOnStore />,
                        },
                        {
                            label: 'Giao hàng tận nơi',
                            key: '2',
                            children: <TabShipping />,
                        },
                    ]}
                    size="large"
                    className="custom-tabs-delivery w-full"
                />
            </div>
        </>
    )
}

export default PaymentInfo;