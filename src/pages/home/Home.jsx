import React from 'react'
import Header from '../../component/Header'
import Herosection from '../../component/home/Herosection'
import Discover from '../../component/home/Discover'
import FetureProduct from '../../component/home/FetureProduct'
import MainProduct from '../../component/home/MainProduct'

export default function Home() {
  return (
    <>
      <Header />
      <div className=" font-Poppins gap-[70px] flex pt-[80px] md:pt-[90px]  flex-col bg-[#f0f0f0] w-[100%] h-[100%]">
        <Herosection />
        <Discover />

        <FetureProduct />
        <MainProduct />

      </div>
    </>
  )
}
