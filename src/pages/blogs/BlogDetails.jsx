import React, { useEffect, useState } from "react";
import Header from '../../component/Header'
import Footer from '../../component/Footer';
import { useLocation, useParams } from "react-router-dom";
import { ApiGet } from "../../helper/axios";
import DOMPurify from "dompurify";

export default function BlogDetails() {

  const location = useLocation();
  const blogId = location.state?.blogId;
   const { title } = useParams();



  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('title', title)

    useEffect(() => {
    if (!title) {
      setError("Blog title not found in URL");
      setLoading(false);
      return;
    }

    fetchBlogDetails(title);
  }, [title]);

  const fetchBlogDetails = async (title) => {
    try {
    const cleanTitle = title.replace(/-/g, " ");
    const res = await ApiGet(`/admin/blog-detail-by-title?title=${encodeURIComponent(cleanTitle)}`);
    console.log('res', res)
    setBlogData(res);     
    } catch (err) {
      console.error("Error fetching blog details:", err);
      setError("Failed to load blog.");
    } finally {
      setLoading(false);
    }
  };

  

  console.log('blogData', blogData)

  return (
    <>
      <div className=" font-Poppins  md11:w-[76%] w-[90%]  overflow-hidden relative mx-auto  md77:pt-[100px] pt-[90px] md11:pt-[130px] flex flex-col md150:w-[1200px]">
        {blogData ? (
            <div className=" flex flex-col mt-[20px]  gap-[10px]">
              <Header text="Blog Details" />

              {/* Hero Banner */}
              <div className="relative md77:h-[500px] w-[100%]">
                {blogData?.image ? (
                  <img
                    src={blogData.image}
                    alt="Ceiling Fan Banner"
                    className="h-full w-full  object-contain md:object-fill rounded-[10px]"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-[10px]">
                    No image available
                  </div>
                )}
              </div>


              {/* Main Content */}
              <div className="mx-auto  px-4 py-8">
                {/* Article Header */}
                <div className="mb-3">
                  {/* <div className="mb-4 flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span  className="font-Monda">By Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span className=" font-Monda">January 12, 2025</span>
                </div>
              </div> */}
                  {/* 
                  <h1 className="mb-1 text-[30px] font-[600]  font-Poppins text-gray-900">
                    Revolutionary Ceiling Fan Technology: Circulates Air Like Magic
                  </h1> */}


                </div>

                {/* Article Content */}
         {Array.isArray(blogData.sections) && blogData.sections.length > 0 ? (
        blogData.sections.map((item, index) => (
    <div key={index} className="prose max-w-none text-gray-800"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(item.text),
      }}
    />
  ))
) : (
  <p>No additional content available.</p>
)}


                {/* Tags */}
              </div>
            </div>
          ) : loading ? (
  <p className="text-center py-10">Loading...</p>
) : error ? (
  <p className="text-center text-red-500 py-10">{error}</p>
) : (
  <p className="text-center text-gray-500 py-10">No blog details available.</p>
)}
      </div>
      <Footer />
      {/* <BottomBar /> */}
    </>
  );
}
