// import React, { useEffect, useState } from 'react'
// import Header from '../../component/Header'

// import { Award, Zap, Shield, Globe, Users, Leaf, Target, Eye, Heart, Star, Factory, Lightbulb } from "lucide-react"
// import mainImage from '../../../public/images/home/pickyourCategory/image2.jpeg'
// import Footer from '../../component/Footer'
// import { ApiGet } from '../../helper/axios'
// import Faq from '../../component/home/Faq'
// import Blogs from '../../component/home/Blogs'


// export default function AboutUs() {
//   const [aboutUs, setAboutUs] = useState([]);
//   const [brand, setBrand] = useState([]);


//   useEffect(() => {
//     fetchAboutUs();
//     fetchBrand();
//   }, []);

//     async function fetchAboutUs() {
//       const res = await ApiGet("/about-us");
//       console.log('res', res);

//       setAboutUs(res?.data);
//     };

//     async function fetchBrand() {
//       const brand = await ApiGet("/brand");
//       console.log('brand', brand)

//       setBrand(brand?.data);
//     };

//     console.log('bsdgfsdgrand', brand)


//   return (
//     <>
//       <Header />

//       <div className=' w-[80%] pt-[110px] pb-[40px]  font-Poppins mx-auto 2xl:w-[1300px] '>
//         <section className="   flex relative overflow-hidden">


//           <div className=" mx-auto px-6 grid lg:grid-cols-2 gap-12  relative z-10">
//             {/* Left Content */}
//             <div className=" space-y-8">
//               <div>
//                 <h1 className="text-[39px] font-bold  leading-tight">
//                   About{" "}
//                   <span className=" text-[#025da8]">Rotex</span>{" "}
//                   Industries
//                 </h1>

//               </div>
//               {(Array.isArray(aboutUs) ? aboutUs : [aboutUs]).map((item) => (
//                 <p className="text-[14px] text-justify leading-[23px]">
//                   {item.content?.split("\n\n")?.map((paragraph, index) => (
//                     <p key={index} className="mb-4 text-justify font-Poppins ">
//                       {paragraph}
//                     </p>
//                   ))}
//                 </p>
//               ))}
//               <div className="flex space-x-20">
//               {Array.isArray(brand) && brand.map((data,index) => {
//                 <div key={data?._id} className="text-center">
//                   <div className="text-3xl font-bold text-[#025da8]">{data?.value} {data?.subName}</div>
//                   <div className="text-sm  text-[#000000]">{data?.name}</div>
//                 </div>
//                  })}
//                 {/* <div className="text-center">
//                   <div className="text-3xl font-bold text-[#025da8]">50K+</div>
//                   <div className="text-sm  text-[#000000]">Customers</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-[#025da8]">100+</div>
//                   <div className="text-sm text-[#000000]">Products</div>
//                 </div> */}
             
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative pr-[10px]">
//               <div className="absolute rounded-3xl blur-3xl opacity-30 transform "></div>
//               <img
//                 src={mainImage}
//                 alt="Rotex Industries Factory"
//                 className="relative z-10 w-full h-[450px] object-content  shadow-lg rounded-[10px] transform "
//               />
//               <div className="absolute bottom-5 -right-6 bg-white rounded-xl p-3 shadow-md border z-20">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-[#025da8] rounded-md flex items-center justify-center">
//                     <Factory className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <div className="font-[600] text-gray-900">Made in India</div>
//                     <div className="text-[13px] text-gray-500">Premium Quality</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Faq />
// <Blogs />
//       <Footer />
//     </>
//   )
// }


import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import { Award, Zap, Shield, Globe, Users, Leaf, Target, Eye, Heart, Star, Factory, Lightbulb } from "lucide-react"
import mainImage from '../../../public/images/home/pickyourCategory/image2.jpeg'
import Footer from '../../component/Footer'
import { ApiGet } from '../../helper/axios'
import Faq from '../../component/home/Faq'
import Blogs from '../../component/home/Blogs'

export default function AboutUs() {
  const [aboutUs, setAboutUs] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetchAboutUs();
    fetchBrand();
  }, []);

  async function fetchAboutUs() {
    const res = await ApiGet("/about-us");
    setAboutUs(res?.data);
  }

  async function fetchBrand() {
    const res = await ApiGet("/brand");
    setBrand(res?.data);
  }

  return (
    <>
      <Header />

      <div className=' w-[90%] md11:w-[80%] pt-[110px] pb-[40px]  font-Poppins mx-auto 2xl:w-[1300px] '>
        <section className="   flex relative overflow-hidden">
          <div className=" mx-auto md11:px-6 grid lg:grid-cols-2 gap-12  relative z-10">
            {/* Left Content */}
            <div className=" space-y-8">
              <div>
                <h1 className="text-[39px] font-bold  leading-tight">
                  About{" "}
                  <span className=" text-[#025da8]">Rotex</span>{" "}
                  Industries
                </h1>
              </div>

              {(Array.isArray(aboutUs) ? aboutUs : [aboutUs]).map((item, i) => (
                <div key={item?._id || i} className="text-[14px] text-justify leading-[23px]">
                  {item?.content?.split("\n\n")?.map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-justify font-Poppins ">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              <div className="flex space-x-20">
                {/* <div className="text-center">
                <div className="text-3xl font-bold text-[#025da8]">
                      7+
                    </div>
                    <div className="text-sm  text-[#000000]">Years</div>
                  </div> */}
                  
                {Array.isArray(brand) && brand.map((data) => (
                  <div key={data?._id} className="text-center">
                    <div className="text-3xl font-bold text-[#025da8]">
                      {data?.value}
                    </div>
                    <div className="text-sm  text-[#000000]">{data?.subName}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative pr-[10px] w-fit mx-auto">
              <div className="absolute rounded-3xl blur-3xl opacity-30 transform "></div>
              <img
                src={mainImage}
                alt="Rotex Industries Factory"
                className="relative z-10 w-full md77:h-[700px]  md77:object-cover md77:object-top md11:h-[450px] md11:object-content  shadow-lg rounded-[10px] transform "
              />
              <div className="absolute md11:block  hidden top-[400px] -right-6 bg-white rounded-xl p-3 shadow-md border z-20">
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

      <Faq />
      <div className=' md77:px-[15px] md11:px-0'>
      <Blogs />
      </div>

      <Footer />
    </>
  )
}
