import React, { useEffect, useRef, useState } from "react";
import ecoad from "../../../public/images/home/mainProduct/eco-advance.jpg"
import highSpeed from "../../../public/images/home/mainProduct/ecoHighspeed.jpg"
import eco from "../../../public/images/home/mainProduct/phi.jpg"
import ecowooden from "../../../public/images/home/mainProduct/ecowodden.jpg"
import Triomodern from "../../../public/images/home/mainProduct/trioModerna.jpg"
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        badge: "New",
        off: "25% OFF",
        title: "Epic Pro BLDC+ Ceiling Fan",
        subtitle: "PREMIUM COLLECTION",
        price: 8999,
        mrp: 11999,
        img: ecoad,
        bullets: [
            "Energy Efficient BLDC Motor",
            "Remote Control Operation",
            "5 Star Energy Rating",
            "Premium Finish & Design",
        ],
    },
    {
        id: 2,
        badge: "New",
        off: "30% OFF",
        title: "Stealth Neo BLDC+ Ceiling Fan",
        subtitle: "PREMIUM COLLECTION",
        price: 6999,
        mrp: 9999,
        img: highSpeed,
        bullets: [
            "Silent Operation Technology",
            "Smart Speed Control",
            "Aerodynamic Blade Design",
            "Anti-Dust Coating",
        ],
    },
    {
        id: 3,
        badge: "New",
        off: "20% OFF",
        title: "Albus Underlight Smart BLDC+ Fan",
        subtitle: "SMART COLLECTION",
        price: 12799,
        mrp: 15999,
        img: eco,
        bullets: [
            "Integrated LED Lighting",
            "WiFi & App Control",
            "Voice Assistant Compatible",
            "Mood Lighting Options",
        ],
    },
    {
        id: 4,
        badge: "New",
        off: "35% OFF",
        title: "Elio BLDC+ Ceiling Fan",
        subtitle: "MODERN COLLECTION",
        price: 5199,
        mrp: 7999,
        img: ecowooden,
        bullets: [
            "Contemporary Design",
            "High Air Delivery",
            "Rust Resistant Coating",
            "Easy Installation",
        ],
    },
    {
        id: 5,
        badge: "New",
        off: "28% OFF",
        title: "Crista BLDC+ Ceiling Fan",
        subtitle: "LUXURY COLLECTION",
        price: 9359,
        mrp: 12999,
        img: Triomodern,
        bullets: [
            "Crystal Inspired Design",
            "Premium Motor Performance",
            "Decorative Appeal",
            "Long Lasting Durability",
        ],
    },
];

export default function AllProduct() {
    const px = (n) => n.toLocaleString("en-IN");

const navigate = useNavigate()
 
const onCardClick =()=>{
    navigate("/productdetails")
}
    return (
        <>

            <Header />

            <section className=" pt-[120px] font-Poppins min-h-screen bg-[#f0f0f0] mx-auto">
                <div className=" w-[90%] mx-auto flex flex-col gap-[50px] px-4">
                    <div className=" w-[100%]">


                        <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>


                        <div className="relative">


                            <div className="overflow-hidden">
                                <div

                                    className=" grid md11:grid-cols-5 2xl:grid-cols-5 scroll-smooth gap-[14px] snap-x snap-mandatory pb-4"


                                >


                                    {products.map((p) => (
                                        <a
                                            href="/productdetails"
                                            key={p.id}
                                              onClick={onCardClick}
                                            className="flex-none w-[240px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
                             overflow-hidden  transition-shadow duration-300 snap-start"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={p.img}
                                                    alt={p.title}
                                                    className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
                                                    draggable={false}
                                                />
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
                                                        {p.off}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
                                                <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
                                                    {p.title}
                                                </h3>

                                                <ul className="text-sm text-gray-600 mb-2">
                                                    {p.bullets.slice(0, 4).map((b, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-[#025da8] mr-2">—</span>
                                                            <span className="line-clamp-1 text-[12px]">{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex items-center absolute bottom-[13px] justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
                                                        <span className="text-[13px] text-gray-400 line-through">₹{px(p.mrp)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%]">


                        <h2 className="text-3xl font-[600] text-gray-800 mb-5">Smart Fan Highlights</h2>


                        <div className="relative">


                            <div className="overflow-hidden">
                                <div

                                    className=" grid md11:grid-cols-5 2xl:grid-cols-5 scroll-smooth gap-[14px] snap-x snap-mandatory pb-4"


                                >


                                    {products.map((p) => (
                                        <a
                                            href="#"
                                            key={p.id}
                                            //   onClick={onCardClick}
                                            className="flex-none w-[240px] relative h-[380px] bg-white rounded-xl shadow-lg border border-gray-100
                             overflow-hidden  transition-shadow duration-300 snap-start"
                                        >
                                            <div className="relative">
                                                <img
                                                    src={p.img}
                                                    alt={p.title}
                                                    className="w-full h-[190px] p-[10px] object-cover select-none pointer-events-none"
                                                    draggable={false}
                                                />
                                                <div className="absolute top-4 right-4">
                                                    <span className="bg-[#025da8] text-white text-[12px] font-[500] px-2 py-1 rounded-full">
                                                        {p.off}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="px-5 bg-[#fafafa] h-full pt-[10px]">
                                                <h3 className="text-[15px] font-[600] leading-[20px] text-[#232323] mb-2 line-clamp-2">
                                                    {p.title}
                                                </h3>

                                                <ul className="text-sm text-gray-600 mb-2">
                                                    {p.bullets.slice(0, 4).map((b, i) => (
                                                        <li key={i} className="flex items-start">
                                                            <span className="text-[#025da8] mr-2">—</span>
                                                            <span className="line-clamp-1 text-[12px]">{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="flex items-center absolute bottom-[13px] justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-[18px] font-[600] text-gray-800">₹{px(p.price)}</span>
                                                        <span className="text-[13px] text-gray-400 line-through">₹{px(p.mrp)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
