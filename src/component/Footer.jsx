// import { PiFacebookLogo, PiMusicNoteSimpleThin, PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { GrApple } from "react-icons/gr";
// import { AiFillCaretRight } from "react-icons/ai";
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10">
//       <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto font-montserrat px-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
//           {/* Perfumes Section */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Perfumes</h3>
//             <ul>
//               <li>Perfumes for men</li>
//               <li>Perfumes for women</li>
//               <li>Unisex perfumes</li>
//               <li>Perfumes for kids</li>
//             </ul>
//           </div>

//           {/* Special Collection Section */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Special collection</h3>
//             <ul>
//               <li>Khan Perfume</li>
//               <li>Yeddi Gözəl</li>
//               <li>Xəmsə</li>
//               <li>Qarabağ</li>
//               <li>Sport</li>
//               <li>Baku</li>
//               <li>Baldini</li>
//               <li>Day&Night</li>
//               <li>Kids</li>
//               <li>Twins</li>
//               <li>Love</li>
//               <li>Billionaire</li>
//             </ul>
//           </div>

//           {/* İYDƏ Perfumery Section */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">İYDƏ PERFUMERY</h3>
//             <ul>
//               <li>Blog</li>
//               <li>About company</li>
//               <li>Gift cards</li>
//               <li>Stores</li>
//               <li>Gift packages</li>
//               <li>Create your perfume</li>
//             </ul>
//           </div>

//           {/* Support Section */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Support</h3>
//             <ul>
//               <li>How to order</li>
//               <li>Delivery</li>
//               <li>Payment</li>
//               <li>Loyalty program</li>
//               <li>FAQ</li>
//               <li className="font-semibold">Terms and conditions</li>
//               <li>Privacy Policy</li>
//               <li>Contact us</li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
//             <ul>
//               <li>+994 50 820 55 55</li>
//               <li>+994 50 820 55 55</li>
//               <li>info@iyde.az</li>
//               <li>09:00 – 23:00</li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center mt-10">
//           <div className="flex space-x-4">
//             <a href="#">
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-youtube"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-tiktok"></i>
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="bg-black text-white py-6 w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%]  lg:py-4 mx-auto">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
//           <div className="flex flex-col items-center lg:items-start">
//             <h3 className="text-lg font-semibold mb-2 font-montserrat">Subscribe us</h3>
//             <div className="flex items-center border border-gray-500 rounded-full px-3 py-1">
//               <input type="email" className="bg-black text-white outline-none flex-grow p-2" placeholder="E-mail" />
//               <button className="bg-white text-black rounded-full px-4 py-1">
//                 <AiFillCaretRight />
//               </button>
//             </div>
//           </div>

//           <div className="flex  gap-2 items-center">
//             <PiFacebookLogo className=" text-[50px]  text-white hover:text-red duration-150" />
//             <PiInstagramLogoThin className=" text-[50px]   text-white hover:text-red duration-150" />
//             <PiYoutubeLogoThin className=" text-[50px]  text-white hover:text-red duration-150" />
//             <PiMusicNoteSimpleThin className=" text-[50px]  text-white hover:text-red duration-150" />
//           </div>

//           <div className="flex space-x-4 font-montserrat">
//             <a href="#" className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//               <GrApple className="text-2xl md:text-3xl text-black" />
//               App Store
//             </a>
//             <a href="#" className="bg-white text-black px-4 py-2 rounded-full flex items-center">
//               <IoLogoGooglePlaystore className="text-2xl md:text-3xl text-blue-600" />
//               Play Store
//             </a>
//           </div>
//         </div>
//         <div className="text-center mt-6 lg:mt-4 text-sm font-montserrat">
//           <p>
//             © İYDE Perfumery 2024 All rights reserved | Site created by
//             <b href="#">One Studio</b>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { PiFacebookLogo, PiMusicNoteSimpleThin, PiInstagramLogoThin, PiYoutubeLogoThin } from "react-icons/pi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import { AiFillCaretRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-10">
      <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto font-montserrat px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Perfumes Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("perfumes")}</h3>
            <ul>
              <li>{t("perfumes_for_men")}</li>
              <li>{t("perfumes_for_women")}</li>
              <li>{t("unisex_perfumes")}</li>
              <li>{t("perfumes_for_kids")}</li>
            </ul>
          </div>

          {/* Special Collection Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("special_collection")}</h3>
            <ul>
              <li>{t("khan_perfume")}</li>
              <li>{t("yeddi_gozel")}</li>
              <li>{t("xemse")}</li>
              <li>{t("qarabag")}</li>
              <li>{t("sport")}</li>
              <li>{t("baku")}</li>
              <li>{t("baldini")}</li>
              <li>{t("day_and_night")}</li>
              <li>{t("kids")}</li>
              <li>{t("twins")}</li>
              <li>{t("love")}</li>
              <li>{t("billionaire")}</li>
            </ul>
          </div>

          {/* İYDƏ Perfumery Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("iyde_perfumery")}</h3>
            <ul>
              <li>{t("blog")}</li>
              <li>{t("about_company")}</li>
              <li>{t("gift_cards")}</li>
              <li>{t("stores")}</li>
              <li>{t("gift_packages")}</li>
              <li>{t("create_your_perfume")}</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("support")}</h3>
            <ul>
              <li>{t("how_to_order")}</li>
              <li>{t("delivery")}</li>
              <li>{t("payment")}</li>
              <li>{t("loyalty_program")}</li>
              <li>{t("faq")}</li>
              <li className="font-semibold">{t("terms_and_conditions")}</li>
              <li>{t("privacy_policy")}</li>
              <li>{t("contact_us")}</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t("get_in_touch")}</h3>
            <ul>
              <li>{t("phone_number_1")}</li>
              <li>{t("phone_number_2")}</li>
              <li>{t("email")}</li>
              <li>{t("working_hours")}</li>
            </ul>
          </div>
        </div>

       
      </div>

      <div className="bg-black text-white py-6 w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%]  lg:py-4 mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-2 font-montserrat">{t("subscribe_us")}</h3>
            <div className="flex items-center border border-gray-500 rounded-full px-3 py-1">
              <input
                type="email"
                className="bg-black text-white outline-none flex-grow p-2"
                placeholder={t("email_placeholder")}
              />
              <button className="bg-white text-black rounded-full px-4 py-1">
                <AiFillCaretRight />
              </button>
            </div>
          </div>

          <div className="flex  gap-2 items-center">
            <PiFacebookLogo className=" text-[50px]  text-white hover:text-red duration-150" />
            <PiInstagramLogoThin className=" text-[50px]   text-white hover:text-red duration-150" />
            <PiYoutubeLogoThin className=" text-[50px]  text-white hover:text-red duration-150" />
            <PiMusicNoteSimpleThin className=" text-[50px]  text-white hover:text-red duration-150" />
          </div>

          <div className="flex space-x-4 font-montserrat">
            <a href="#" className="bg-white text-black px-4 py-2 rounded-full flex items-center">
              <GrApple className="text-2xl md:text-3xl text-black" />
              {t("app_store")}
            </a>
            <a href="#" className="bg-white text-black px-4 py-2 rounded-full flex items-center">
              <IoLogoGooglePlaystore className="text-2xl md:text-3xl text-blue-600" />
              {t("play_store")}
            </a>
          </div>
        </div>
        <div className="text-center mt-6 lg:mt-4 text-sm font-montserrat">
          <p>
            {t("all_rights_reserved")} | {t("site_created_by")} <b>{t("one_studio")}</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
