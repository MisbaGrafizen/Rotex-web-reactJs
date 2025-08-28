import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Eye } from "lucide-react";

// Replace with real image imports or public paths
import fanImg1 from "../../../public/images/home/pickyourCategory/image1.jpeg";
import fanImg2 from "../../../public/images/home/pickyourCategory/image2.jpeg";
import fanImg3 from "../../../public/images/home/pickyourCategory/image3.jpeg";
import fanImg4 from "../../../public/images/home/pickyourCategory/image4.jpeg";
import { ApiGet } from "../../helper/axios";

export default function Blogs() {
  const [hoveredCard, setHoveredCard] = useState(null);
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
        const res = await ApiGet("/blogs"); 
        const incoming = Array.isArray(res) ? res : res?.data || [];
        setBlogs(sortByCreatedAtDesc(incoming));
      } catch (e) {
        console.error("Failed to load blogs:", e);
        setBlogs([]); // or keep previous
      }
    }
    fetchBlogs();
  }, []);


  console.log('blogs', blogs)


  const handleBlogDetails = (title) => {
  if (!title) return;

  const formattedTitle = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
  navigate(`/blogDetails/${formattedTitle}`);
};

  return (
    <section className="md11:py-10 font-Poppins ">
      <div className="mx-auto px-4">
        <div className="mb-10">
     <h2 className="md:text-[45px] md77:text-center leading-[40px] md77:leading-[52px] text-[30px] font-[600] text-gray-800 mb-3">
  Everyday Comfort Starts with <b className="font-[600] text-[#062f95]">Rotex Fans</b>
</h2>

        </div>

        <div className="flex overflow-x-auto pb-[19px] md77:px-[20px] w-[100%] gap-8">
          {blogs.map((post) => (
            <div
              key={post._id}
              className="group flex flex-col relative flex-shrink-0 w-[290px] bg-white h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div> */}
              </div>
              <div className="p-4">
                <h3 className="text-[18px] leading-[23px] font-[600] text-gray-900 mb-2 group-hover:text-[#062f95]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2 text-[13px] line-clamp-3">{post.description}</p>
                <div className="flex flex-col absolute bottom-5">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {/* <div className="flex items-center gap-3 text-[10px]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div> */}
                  </div>
                  <button className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-[15px] font-medium"
                  onClick={() => handleBlogDetails(post.title)}>
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
