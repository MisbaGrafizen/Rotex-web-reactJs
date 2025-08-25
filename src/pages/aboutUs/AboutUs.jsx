import React from 'react'
import Header from '../../component/Header'

export default function AboutUs() {
  return (
   <>
   <Header />

<div className=' w-[80%] 2xl:w-[1300px] '>
      <section className="  h-[400px] flex items-center bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, white 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">Rotex</span>{" "}
                Industries
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mb-8"></div>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              At Rotex Industries, we are driven by one mission – to deliver cutting-edge, energy-efficient, and stylish
              ceiling fans that redefine comfort. With a strong foundation in innovation and engineering excellence, we
              specialize in BLDC technology that offers maximum performance with minimal power consumption.
            </p>
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">15+</div>
                <div className="text-sm text-blue-200">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">50K+</div>
                <div className="text-sm text-blue-200">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-blue-200">Products</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-3xl blur-3xl opacity-30 transform rotate-6"></div>
            <img
              src="/modern-ceiling-fan-factory.png"
              alt="Rotex Industries Factory"
              className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl z-20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Made in India</div>
                  <div className="text-sm text-gray-500">Premium Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </div>
   </>
  )
}
