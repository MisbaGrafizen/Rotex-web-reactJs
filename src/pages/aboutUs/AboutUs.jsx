import React from 'react'
import Header from '../../component/Header'

import { Award, Zap, Shield, Globe, Users, Leaf, Target, Eye, Heart, Star, Factory, Lightbulb } from "lucide-react"
import mainImage from '../../../public/images/home/pickyourCategory/image2.jpeg'
import Footer from '../../component/Footer'


export default function AboutUs() {
  return (
    <>
      <Header />

      <div className=' w-[80%] pt-[110px]  font-Poppins mx-auto 2xl:w-[1300px] '>
        <section className="  h-[500px] flex relative overflow-hidden">


          <div className=" mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className=" space-y-8">
              <div>
                <h1 className="text-[39px] font-bold  leading-tight">
                  About{" "}
                  <span className=" text-[#025da8]">Rotex</span>{" "}
                  Industries
                </h1>

              </div>
              <p className="text-[14px] text-justify leading-[23px]">
                At Rotex Industries, we are driven by one mission – to deliver cutting-edge, energy-efficient, and stylish
                ceiling fans that redefine comfort. With a strong foundation in innovation and engineering excellence, we
                specialize in BLDC technology that offers maximum performance with minimal power consumption.

                                At Rotex Industries, we are driven by one mission – to deliver cutting-edge, energy-efficient, and stylish
                ceiling fans that redefine comfort. With a strong foundation in innovation and engineering excellence, we
                specialize in BLDC technology that offers maximum performance with minimal power consumption.
              </p>
              <div className="flex space-x-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#025da8]">15+</div>
                  <div className="text-sm  text-[#000000]">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#025da8]">50K+</div>
                  <div className="text-sm  text-[#000000]">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#025da8]">100+</div>
                  <div className="text-sm text-[#000000]">Products</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative pr-[10px]">
              <div className="absolute rounded-3xl blur-3xl opacity-30 transform "></div>
              <img
                src={mainImage}
                alt="Rotex Industries Factory"
                className="relative z-10 w-full h-96 object-content  shadow-lg rounded-[10px] transform "
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 shadow-md border z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#025da8] rounded-md flex items-center justify-center">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-[600] text-gray-900">Made in India</div>
                    <div className="text-[13px] text-gray-500">Premium Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
