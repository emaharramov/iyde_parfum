// https://www.youtube.com/watch?v=uu2kCZPUtUI&embeds_referring_euri=https%3A%2F%2Fiyde.az%2F&embeds_referring_origin=https%3A%2F%2Fiyde.az&source_ve_path=Mjg2NjY

import React, { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { t } from "i18next";

const Stores = () => {
  const [selectedBranch, setSelectedBranch] = useState("Azadliq branch");

  const branches = [
    {
      name: "Azadliq branch",
      address: "Azadliq Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Ganjlik branch",
      address: "Ganjlik Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Sahil branch",
      address: "Sahil Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Narimanov branch",
      address: "Narimanov Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Hazi Aslanov branch",
      address: "Hazi Aslanov Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Akhmedli branch",
      address: "Akhmedli Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
    {
      name: "Nizami branch",
      address: "Nizami Ave. 175",
      phone: "(+99450) 511-20-80",
      hours: "09:00-22:00",
      videoId: "uu2kCZPUtUI?si=aA4wrFCjaLpZpmQp",
    },
  ];

  const selectedStore = branches.find((branch) => branch.name === selectedBranch);

  return (
    <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-fairy uppercase">{t("stores")}</h1>
      <div className="flex flex-col lg:flex-row">
        {/* Branch List */}
        <div className="flex-shrink-0 w-full lg:w-1/3 ">
          {branches.map((branch, index) => (
            <button
              key={index}
              onClick={() => setSelectedBranch(branch.name)}
              className={`block w-full text-left py-4 px-6  border transition duration-200 ${
                selectedBranch === branch.name
                  ? "bg-pink-100 text-pink-600 border-pink-600"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              } font-montserrat text-lg font-medium`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Branch Details */}
        <div className="flex-grow mt-8 lg:mt-0 lg:ml-10">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">{selectedStore.name}</h2>
            <ul className="space-y-2 text-lg font-montserrat">
              <li className="flex items-center">
                <span className="mr-2">
                  <MdOutlineLocationOn className="text-3xl text-red" />
                </span>
                {selectedStore.address}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <MdOutlineLocalPhone className="text-3xl text-red" />
                </span>
                {selectedStore.phone}
              </li>
              <li className="flex items-center">
                <span className="mr-2">
                  <GoClock className="text-3xl text-red" />
                </span>
                {selectedStore.hours}
              </li>
            </ul>
          </div>

          {/* YouTube Video */}
          <div className="mt-6">
            <iframe
              className="w-full h-64 rounded-lg"
              src={`https://www.youtube.com/embed/${selectedStore.videoId}`}
              title={selectedStore.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stores;
