import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Eye } from "lucide-react";

// Replace with real image imports or public paths
import fanImg1 from "../../../public/images/home/pickyourCategory/image1.jpeg";
import fanImg2 from "../../../public/images/home/pickyourCategory/image2.jpeg";
import fanImg3 from "../../../public/images/home/pickyourCategory/image3.jpeg";
import fanImg4 from "../../../public/images/home/pickyourCategory/image4.jpeg";

export default function Blogs() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Rotex Fans: Redefining Airflow Technology in Modern Homes",
      excerpt: "Explore how Rotex Fans blend design with cutting-edge airflow technology to transform your comfort experience.",
      author: "Rotex Engineering Team",
      date: "Aug 20, 2025",
      readTime: "6 min read",
      category: "Technology",
      image: fanImg1,
      views: "3.4k",
    },
    {
      id: 2,
      title: "Choosing the Right Fan for Every Room — Rotex Guide",
      excerpt: "Not all fans are created equal. Learn how to choose the perfect Rotex fan for bedrooms, kitchens, offices, and more.",
      author: "Interior Experts",
      date: "Aug 16, 2025",
      readTime: "5 min read",
      category: "Home Improvement",
      image: fanImg2,
      views: "2.1k",
    },
    {
      id: 3,
      title: "Why Rotex BLDC Fans Are a Game-Changer in Energy Savings",
      excerpt: "Discover how Rotex's advanced BLDC motor fans help reduce power bills without compromising on performance.",
      author: "Rotex Innovations",
      date: "Aug 10, 2025",
      readTime: "4 min read",
      category: "Sustainability",
      image: fanImg3,
      views: "4.6k",
    },
    {
      id: 4,
      title: "Behind the Brand: The Journey of Rotex Fans in India",
      excerpt: "From humble beginnings to a household name, explore Rotex's legacy of trust, performance, and durability.",
      author: "Rotex Heritage",
      date: "Aug 5, 2025",
      readTime: "7 min read",
      category: "Company Insights",
      image: fanImg4,
      views: "3.9k",
    },
     {
      id: 5,
      title: "Choosing the Right Fan for Every Room — Rotex Guide",
      excerpt: "Not all fans are created equal. Learn how to choose the perfect Rotex fan for bedrooms, kitchens, offices, and more.",
      author: "Interior Experts",
      date: "Aug 16, 2025",
      readTime: "5 min read",
      category: "Home Improvement",
      image: fanImg2,
      views: "2.1k",
    },
    {
      id: 6,
      title: "Why Rotex BLDC Fans Are a Game-Changer in Energy Savings",
      excerpt: "Discover how Rotex's advanced BLDC motor fans help reduce power bills without compromising on performance.",
      author: "Rotex Innovations",
      date: "Aug 10, 2025",
      readTime: "4 min read",
      category: "Sustainability",
      image: fanImg3,
      views: "4.6k",
    },
    {
      id: 7,
      title: "Behind the Brand: The Journey of Rotex Fans in India",
      excerpt: "From humble beginnings to a household name, explore Rotex's legacy of trust, performance, and durability.",
      author: "Rotex Heritage",
      date: "Aug 5, 2025",
      readTime: "7 min read",
      category: "Company Insights",
      image: fanImg4,
      views: "3.9k",
    }
  ];

  return (
    <section className="py-10 font-Poppins ">
      <div className="mx-auto px-4">
        <div className="text-center mb-10">
     <h2 className="md:text-[45px] text-[30px] font-[600] text-gray-800 mb-3">
  Everyday Comfort Starts with <b className="font-[600] text-[#062f95]">Rotex Fans</b>
</h2>

        </div>

        <div className="flex overflow-x-auto pb-[19px] px-[20px] w-[100%] gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col relative flex-shrink-0 w-[290px] bg-white h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[18px] leading-[23px] font-[600] text-gray-900 mb-2 group-hover:text-[#062f95]">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2 text-[13px] line-clamp-3">{post.excerpt}</p>
                <div className="flex flex-col absolute bottom-5">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3 text-[10px]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                  <button className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-[15px] font-medium">
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
