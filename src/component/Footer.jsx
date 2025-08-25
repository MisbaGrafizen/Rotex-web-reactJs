import React from 'react'

import { useNavigate } from 'react-router-dom';
import logo from '../../public/images/Logo/white-logo.png';

export default function Footer() {
  return (
    <>


      <footer className="bg-[#071a2d] font-Poppins  text-white pt-[30px] md:pb-[20px]  pb-[110px] px-6 md:px-12">
        <div className="md:max-w-[92%] mx-auto flex flex-col">
          <div className=" flex md:flex-row flex-col   gap-[20px] w-[100%] justify-between">
            <div className=" flex flex-col ">
              {/* Logo Section */}
              <div className="mb-">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-[70px]  object-contain w-[150px] mb-"
                />
                <p className="text-[16px]  mt-[10px] font-medium">
                  Stay Cool with Rotex Fans – Where Innovation Meets Comfort.
                </p>
              </div>

              {/* Contact Form Section */}
              <div className=" mb-12">
                <p className="text-gray-300 text-[10px] mb-6">
                  Subscribe to our newsletter and be the first to know about product launches, offers, and fan technology updates.
                </p>
                <div className="space-y-2">
                  <div className="grid md:grid-cols-2 gap-">


                  </div>
                  <div className="flex gap-2 items-center">

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email ID*"
                        className="bg-transparent border text-[12px] outline-none w-[210px] border-[#3a3f59] rounded-[6px] px-4 py-2"
                      />
                    </div>
                    <button className="text-[#025da8]  font-[500] bg-[#fff] w-[90px] text-[14px] h-[34px] rounded-[4px] ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>




            {/* Links Section */}
            <div className="md:grid  w-[100%] md:w-[800px] md:ml-[70px]  flex md:grid-cols-3 md:mb-[40px] gap-[10px] md:gap-[30px] ">

              {/* Discover us */}
              <div className="">
                <h3 className="text-lg font-semibold mb-4">Discover us</h3>
                <ul className="  flex flex-col gap-[7px]">
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/orders"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      My orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="/all-products"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      All Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Blogs
                    </a>
                  </li>

                </ul>
              </div>

              <div className=" ">
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className=" flex flex-col gap-[7px]">
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Warranty & Services
                    </a>

                  </li>

                  <li>
                    <a
                      href="/faqs"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/influencers-registration"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Become a Dealer
                    </a>
                  </li>

                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className=" flex flex-col gap-[7px]">

                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Product Catalogues
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Downloads
                    </a>
                  </li>

                  <li>
                    <a
                      href="/"
                      className="text-gray-300 hover:text-white text-[14px] font-[300]"
                    >
                      Installation Guides
                    </a>
                  </li>


                </ul>
              </div>
            </div>
            <div className="  flex mb-[30px] gap-[40px]">


            </div>

          </div>
          <div className="mb-[10px]">
            <p className="text-[12px] text-gray-300 font-[300]">
              <span className="text-white  mr-[10px] text-[15px] font-medium">
                Important Notice :
              </span>
              Please beware of fraudulent messages and offers claiming to represent Rotex Fans.
              All official communication is only sent from domains ending with <strong>@rotexfans.com</strong>.
              Rotex Fans is not liable for any unauthorized promotions or misleading communication.
            </p>
          </div>
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
            <div className="flex flex-wrap justify-between w-[100%] gap-4 md:mb-0">
              <span className="text-sm md:text-start text-center text-gray-300">
                © 2025 All Rights Reserved by  Rotex Fans || Designed and
                Developed with ❤️ by Grafizen International LLC
              </span>
              <div className="  md:flex hidden  gap-[20px]">
                <a href="#" className="text-sm text-gray-300 hover:text-white" >
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white" >
                  Terms & Conditions
                </a>
                <a href="#" className="text-sm text-gray-300 hover:text-white">
                  Site Map
                </a>
              </div>
            </div>

          </div>
        </div>


      </footer>

      <style jsx>{`
        .custom-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </>
  )
}
