
import { useState } from "react"
import logo from "../../public/images/Logo/moveLogo.gif"
import LoginDrawer from "../component/LoginDrawer";
import { useNavigate } from "react-router-dom";

const megaMenuData = {
    "Search by Category": {
        Fans: [
            "Ceiling Fans",
            "Table Fans",
            "Wall Fans",
            "Pedestal Fans",
            "Ceiling Mounting Fans",
            "Personal Fans",
            "Domestic Exhaust Fans",
        ],
        Lighting: [
            "Home Art Light",
            "LED Panels",
            "LED COB",
            "LED Downlighter",
            "LED Spotlight",
            "Glamtubes",
            "LED Battens",
            "LED Lamps",
            "Portable Lighting",
            "Smart Lighting",
        ],
        "Switches & Accessories": [
            "Modular Range",
            "Smart Modular Range",
            "GI Boxes",
            "Surface Box",
            "Electrical Accessories",
            "Mobile Accessories",
            "Smart Accessories",
        ],
        "Home Appliances": [
            "Air Conditioners",
            "LED Televisions",
            "Washing Machines",
            "Refrigerators",
            "Water Purifiers",
            "Air Coolers",
            "Appliances",
            "Chimney Hob & Cooktop",
            "Personal Grooming",
            "Air Purifiers",
            "Water Heaters / Geyser",
        ],
        "Home Electricals": [
            "Flexible Cables",
            "Pumps",
            "Switchgears",
            "Circuit Breaker",
            "Energy Saver",
            "Human Safety",
            "Distribution Board",
            "Surge Protection Device",
        ],
        "Smart Home": ["Smart Modular Switches", "Monoblock Smart Panels", "Smart Accessories"],
    },
}

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [selectedPage, setSelectedPage] = useState("New Products")
      const [loginOpen, setLoginOpen] = useState(false);
const navigate = useNavigate()

const handleMyAccount =()=>{
    navigate("/my-account")
}

    return (
        <header className="fixed top-0 pl-[60px] font-Poppins flex flex-col w-[100%] h-[90px] shadow-xl left-0 right-0 z-50 bg-[#fafafa]">
            {/* Main Header */}
            <div className=" flex gap-[10px] items-center w-[100%]  border-gray-200">
            <img className=" w-[140px] h-[50px] object-contain" src={logo} />
                <div className="w-[90%]">


                    <div className="w-[100%] border-b mx-auto pr-[80px] ">
                        <div className="flex items-center w-[100%] justify-between h-[48px]">


                            {/* Search Bar */}
                            <div className="flex  ] mx-2">
                                <div className="relative w-[260px]">
                                    <svg
                                        className="absolute left-4 top-[18px] transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 26 26"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Search Products"
                                        className="pl-12 pr-5 py-[6px] w-full border-[1.4px] border-gray-300  bg-white rounded-[25px] outline-none  text-[13px]"
                                    />
                                </div>
                            </div>

                           
                            <div className="flex items-center space-x-6">
                                <div
                                    className="relative"
                                    // onMouseEnter={() => setActiveDropdown("Search by Category")}
                                    // onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <button className="flex items-center flex-shrink-0 min-w-[130px] space-x-1 text-gray-700 hover:text-[#025da8] transition-colors duration-200 text-[12px] font-[500]">
                                        <span>Search by Category</span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${activeDropdown === "Search by Category" ? "rotate-180" : "rotate-0"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div
                                        className={`absolute top-full left-0 w-screen max-w-6xl bg-white shadow-xl border border-gray-200 mt-1 -ml-96 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${activeDropdown === "Search by Category"
                                            ? "opacity-100 translate-y-0 scale-100 visible"
                                            : "opacity-0 -translate-y-4 scale-95 invisible"
                                            }`}
                                    >
                                        <div className="grid grid-cols-6 gap-8 p-8">
                                            {Object.entries(megaMenuData["Search by Category"]).map(([category, items]) => (
                                                <div key={category} className="space-y-3">
                                                    <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                                                        {category}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {items.map((item, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm text-gray-600 hover:text-[#025da8] transition-colors duration-200 block py-1 hover:bg-gray-50 px-2 rounded"
                                                                >
                                                                    {item}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* <button className="flex items-center  flex-shrink-0  min-w-[100px] space-x-1 text-gray-700 hover:text-[#025da8] transition-colors duration-200 text-[12px] font-[500]">
                                    <span>See Our Brands</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button> */}

                                <button className="flex  flex-shrink-0  items-center space-x-1 text-gray-700 hover:text-[#025da8] transition-colors duration-200 text-[12px] font-[500]">
                                    <span>Support</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <button className="px-3  flex-shrink-0 py-[5px] border-[1.4px] border-[#025da8] text-[#025da8] hover:bg-[#025da8] hover:text-white transition-all duration-200 rounded-full text-sm font-medium">
                                    For Business
                                </button>

                                <button className="text-gray-700 hover:text-[#025da8] transition-colors duration-200 px-[3px] py-[10px]" onClick={handleMyAccount}>
                                    <i className="fa-regular text-[20px] fa-cart-shopping"></i>
                                </button>

                                <button className="text-gray-700 hover:text-[#025da8] transition-colors duration-200 px-[2px] py-[10px]" onClick={() => setLoginOpen(true)}
                    aria-label="Open login">
                        <i className=" text-[20px] fa-regular fa-user"></i>
                                </button>
                            </div>
                        </div>
                    </div>

     <LoginDrawer
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSuccess={(user) => {
          // optional: set global user, toast, etc.
          console.log("Logged in:", user);
        }}
      /> 
                    {/* Secondary Navigation */}
                    <div className="">
                        <div className=" mx-auto px-2 py-[2px]">
                            <div className="flex items-center space-x-5 h-[35px]">
                                {["New Products", "Best Seller", "Register Warranty", "Loyalty" ].map((page) => (
                                    <a
                                        key={page}
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setSelectedPage(page)
                                        }}
                                        className={` font-[500] text-[12px] transition-all duration-200 relative ${selectedPage === page ? "text-[#025da8] font-[500 ̰]" : "text-gray-700 hover:text-[#025da8]"
                                            }`}
                                    >
                                        {page}
                                        {/* {selectedPage === page && (
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#025da8] transform transition-all duration-300 ease-in-out"></div>
                                        )} */}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
