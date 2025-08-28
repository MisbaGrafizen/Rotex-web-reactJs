import React, { useEffect, useState } from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer';
import { ApiGet } from '../../helper/axios';
import { useNavigate } from 'react-router-dom';

export default function BlogMainPage() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();


  const sortByCreatedAtDesc = (arr) =>
    [...arr].sort((a, b) => {
      const at = a?.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bt = b?.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bt - at; // newest first
    });

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await ApiGet("/blogs"); // ideally return createdAt from API
        const incoming = Array.isArray(res) ? res : res?.data || [];
        setBlogs(sortByCreatedAtDesc(incoming));
      } catch (e) {
        console.error("Failed to load blogs:", e);
        setBlogs([]); // or keep previous
      }
    }
    fetchBlogs();
  }, []);

  const formatDate = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    const day = d.toLocaleString('en-GB', { day: '2-digit' });     // 12
    const mon = d.toLocaleString('en-GB', { month: 'short' });     // May
    const yr = d.getFullYear();                                   // 2025
    return `${day} ${mon}, ${yr}`;                                 // 12 May, 2025
  };

  const formatTime = (iso) => {
    if (!iso) return "-";
    const d = new Date(iso);
    // en-US gives AM/PM; lowercased to match your style
    return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
  };


  const handleBlogDetails = (title) => {
  if (!title) return;

  const formattedTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
  navigate(`/blogDetails/${formattedTitle}`);
};

  return (
    <>
      <Header />
      <section className=' select-none flex  mb-[40px] flex-col gap-[30px] 2xl:w-[1300px]  relative font-Poppins justify-between w-[90%] mx-auto md11:w-[78%] pt-[110px]  '>
        <div className='md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%] overflow-x-auto gap-[10px]'>

        </div>
        <div className=' flex w-[100%] gap-[20px] justify-between'>


          <div className=' flex-col gap-[20px] w-[100%] flex md11:w-[74%]'>



            {/* {categoryBlogs?.map((blog, index) => (
                            <div key={blog.id} className=' flex flex-col gap-[10px] '>
                                <img
                                    onClick={() => openLightbox(index)}
                                    className='cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                                    src={blog.image}
                                    alt="Blogs"
                                />
                                <div className=' px-[10px] text-[14px] items-center  flex text-[#025da8] gap-[10px]'>
                                    <i class="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
                                    {formatDateTime(blog.createdAt)}
                                </div>
                                <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
                                    <div className=' flex w-[100%] gap-[10px] flex-col '>
                                        <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#025da8] '>

                                            <p className=' gap-[10px] mt-[2px] flex'>
                                                <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
                                            </p>
                                        </div>
                                        <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
                                           <div
  className="prose prose-sm md:prose-base prose-headings:font-semibold prose-p:mb-4"
  dangerouslySetInnerHTML={{ __html: blog.description }}
></div>

                                        </div>
                                    </div>
                                    <button className='flex gap-[10px] cursor-pointer pr-[10px] text-[#025da8] w-[150px] items-center'
                                      onClick={() => navigate(`/blogs/main/${blog._id}`)}>
                                        <p className='hover:underline'>Read More</p>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </button>
                                </div>
                                <span className=' flex w-[100%] border-t-[1.3px] border-[#025da8] mt-[20px] border-dashed '>

                                </span>
                            </div>
                        ))} */}

            {/* 0ld Blogsss */}
            {blogs.map((blog, index) => (
              <div key={blog.id} className=' flex flex-col gap-[10px] '>
                <img
                  onClick={() => openLightbox(index)}
                  className='cursor-pointer flex w-[100%] h-[280px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                  src={blog.image}
                  alt="Blogs"
                />
                <div className=' px-[10px] text-[14px] items-center  flex text-[#025da8] gap-[10px]'>
                  <i className="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
                  {formatDate(blog?.createdAt)} &nbsp;-&nbsp; {formatTime(blog?.createdAt)}
                </div>
                <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
                  <div className=' flex w-[100%] gap-[10px] flex-col '>
                    <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#025da8] '>

                      <p className=' gap-[10px] mt-[2px] flex'>
                        <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
                      </p>
                    </div>
                    <h1 className=' px-[10px] font-[500] text-[19px]'>
                      {blog.tittle}
                    </h1>
                    <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
                      <p>
                        {blog.description}
                      </p>
                    </div>
                  </div>
                  <button className='flex gap-[10px] cursor-pointer pl-[12px] md77:pl-[0px] pr-[10px] text-[#025da8] w-[150px] items-center' onClick={() => handleBlogDetails(blog.title)}>
                    <p className='hover:underline'>Read More</p>
                    <i className="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
                <span className=' flex w-[100%] border-t-[1.3px] border-[#025da8] mt-[20px] border-dashed '>

                </span>
              </div>
            ))}
          </div>

          <div className="h-fit max-w-[300px]  right-[10%] border border-[#025da8] md11:flex hidden bg-white shadow p-4 rounded-[10px]">
            <div className="w-full">
              {/* 🔍 Search */}
              <div className="flex justify-between border p-2 rounded-[8px]">
                <input
                  type="text"
                  className="w-full text-sm outline-none"
                  placeholder="Search"
                />
                <button className="pl-2" type="submit">
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
                      fill="#025da8"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* 👥 Influencer Guests */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-black pb-2">Featured Dealers</h5>
                <p className="text-gray-600 text-sm">Coming Soon . . .</p>
              </div>

              {/* 📝 Popular Blogs */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold text-black pb-2">Rotex Blogs</h5>
                <ul className="space-y-2 text-sm text-[#5c5b5b]">
                  {[
                    { title: "Why Rotex Fans Are Best for Indian Homes", link: "/blogs/rotex-fans-benefits" },
                    { title: "Top 5 Rotex Ceiling Fans for 2025", link: "/blogs/top-ceiling-fans-rotex" },
                    { title: "BDC Motor vs Normal Fan Motor – What's Better?", link: "/blogs/bdc-vs-normal-fan" },
                    { title: "Energy Savings with Rotex BDC Technology", link: "/blogs/rotex-energy-saving" },
                    { title: "How to Choose the Right Fan for Each Room", link: "/blogs/fan-buying-guide" },
                    { title: "The Evolution of Smart Fans – Rotex Edition", link: "/blogs/rotex-smart-fans" },
                    { title: "Wall vs Pedestal Fans: What Suits You Best?", link: "/blogs/fan-types-comparison" },
                    { title: "Maintaining Your Rotex Fan – Tips & Tricks", link: "/blogs/rotex-fan-maintenance" },
                    { title: "What Makes Rotex BDC Fans So Silent?", link: "/blogs/rotex-silent-tech" },
                    { title: "Rotex Airflow Technology Explained", link: "/blogs/rotex-airflow-design" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fa-solid fa-circle text-[6px] text-[#025da8] mr-2 mt-[6px]"></i>
                      <a href={item.link} className="hover:underline">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>


      </section>


      <Footer /></>
  )
}
