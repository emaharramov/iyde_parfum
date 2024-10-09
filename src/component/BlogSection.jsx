import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "SUMMER'S LAST CHANCE",
      img: "./../public/img/qurban.jpg",
      description: "10%, 20%, 30%, 40% discounts",
      
    },
    {
      title: "Sacrifice campaign 2+1 or 20% DISCOUNT!",
      img: "./../public/img/usaqlar.jpg",
      description: "2+1 or 20% discount",
    },
    {
      title: "Iyde Perfumery has a 25% promotion",
      img: "./../public/img/sonfurset.png",
      description: "25% discount on International Day",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-4xl font-bold mb-8">BLOG</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-hidden">
              <img
                className="w-full rounded-lg mb-4 object-cover hover:scale-105 transition duration-300"
                src={blog.img}
                alt={blog.title}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-gray-500 underline hover:text-gray-700">
          All blogs
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
