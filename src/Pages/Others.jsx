import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineCall } from "react-icons/md";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
const Others = () => {
  const { par } = useParams();
  console.log(par);

  const [activeSection, setActiveSection] = useState("how_to_order");
  useEffect(() => {
    if (par) {
      setActiveSection(par); // par varsa activeSection'ı güncelle
    }
  }, [par]);
  const sections = {
    how_to_order: {
      title: "How to order",
      content: `<div className="container mx-auto py-8 px-4">
 
  <h1 className="text-3xl font-bold mb-6">How to place an order?</h1>

 
  <p className="mb-8 text-lg text-gray-700">
    You can place an order in the following ways:
  </p>

 
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4">Order online</h2>
    <div className="pl-4 border-l-4 border-black">
      <p className="text-gray-700">
        Order online - for this you must first 
        <a href="#" className="text-red-500 underline ml-1">register on our website</a>, 
        after adding the selected aromas to the basket, you can complete your order. 
        When placing an order on the site, please fill out all the fields - this information is not needed 
        for the sake of interest, but for the correct preparation and prompt delivery of your order. 
        When placing an order, you can choose the most convenient payment method for you 
        (<a href="#" className="text-red-500 underline">more about payment methods can be found here</a>).
      </p>
    </div>
  </div>

 
  <div className="mb-10">
    <h2 className="text-2xl font-bold mb-4">Call on number</h2>
    <div className="pl-4 border-l-4 border-black">
      <p className="text-gray-700">
        Call on number - you can find our contact details and phone numbers 
        <a href="#" className="text-red-500 underline ml-1">here</a>.
      </p>
    </div>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-4">Contact via social networks</h2>
    <div className="pl-4 border-l-4 border-black">
      <p className="text-gray-700">
        You can also place an order through our social media platforms. Reach out to us on Facebook, Instagram, or WhatsApp.
      </p>
    </div>
  </div>
</div>
`,
    },
    delivery: {
      title: "Delivery",
      content: `<div className="container mx-auto py-8 px-4">
  <h1 className="text-3xl font-bold mb-6">DELIVERY</h1>

  <h2 className="text-xl font-semibold mb-4">Terms and conditions of delivery:</h2>

  <ul className="space-y-8">
  
    <li>
      <div className="flex items-start">
        <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
        <div>
          <h3 className="text-lg font-bold">Delivery in Baku</h3>
          <p className="text-gray-700">
            Delivery service is carried out promptly by our courier at any address. The order amount for intracity delivery must be at least 30 AZN.
          </p>
        </div>
      </div>
    </li>

   
    <li>
      <div className="flex items-start">
        <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
        <div>
          <h3 className="text-lg font-bold">Delivery to Sumgayit</h3>
          <p className="text-gray-700">
            Delivery to Sumgayit is carried out at the specified address during the day. The amount of the order must be at least 30 AZN. The working hours of the delivery service are from 10:00 to 20:00.
          </p>
        </div>
      </div>
    </li>

  
    <li>
      <div className="flex items-start">
        <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
        <div>
          <h3 className="text-lg font-bold">Delivery to the regions of Azerbaijan</h3>
          <p className="text-gray-700">
            Delivery to the regions of Azerbaijan is carried out within 1-2 days, and the full cost of the order should be paid in advance (you can find
            <a href="#" className="text-red-500 underline ml-1">here</a> the information about payment conditions). The amount of the order must be at least 50 AZN.
          </p>
        </div>
      </div>
    </li>
  </ul>
</div>
`,
    },
    payment: {
      title: "Payment",
      content: `<div className="container mx-auto py-8 px-4">
 
  <h1 className="text-3xl font-bold mb-6">PAYMENT</h1>


  <h2 className="text-xl font-semibold mb-4">Online payment</h2>

  
  <ul className="space-y-4 mb-8">
    <li className="flex items-start">
      <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
      <p className="text-gray-700">Payment is accepted by any credit and debit cards;</p>
    </li>
    <li className="flex items-start">
      <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
      <p className="text-gray-700">A bank card must be suitable for payment on the Internet (this is determined by the bank);</p>
    </li>
    <li className="flex items-start">
      <span className="text-pink-500 text-2xl font-bold mr-2">•</span>
      <p className="text-gray-700">When paying online with a credit card, the payment process is carried out on the electronic payment system website.</p>
    </li>
  </ul>


  <div className="text-gray-700 space-y-6">
    <p>
      The information you provide on the site (card data, registration data and others) cannot be observed by our staff. Confidential information is transmitted from the client to the payment system and to the bank’s server. Choosing online payment on our website, you choose the fastest and most secure way to pay.
    </p>
    <p>
      We don't get information about your cards and cash with online payment, payment is done through the bank and payment systems. After selecting the online payment form and verifying the order, you will automatically be redirected to the bank's secure page and to the bank's system.
    </p>
  </div>
</div>
`,
    },
    loyalty_program: {
      title: "Loyalty program",
      content: ` <div><h1 className="text-3xl font-bold mb-6">Loyalty program</h1><p>Join our loyalty program to earn points on purchases and enjoy exclusive discounts.</p></div>`,
    },
    faq: {
      title: "FAQ",
      content: "Frequently asked questions about our services and products can be found here.",
    },
    privacy_policy: {
      title: "Privacy Policy",
      content: "Read about how we collect, use, and protect your personal data in our privacy policy.",
    },
  };

  return (
    <div className="w-[97%]  md:w-[96%] lg:w-[90%] xl:w-[84%] py-3 lg:py-4 mx-auto my-10">
      <h2 className=" text-base font-semibold md:text-2xl font-fairy p-4">Support</h2>
      <div className="flex ">
        <div className="w-1/4 border-r p-4">
          <ul className="space-y-4">
            {Object.keys(sections).map((sectionKey) => (
              <li
                key={sectionKey}
                onClick={() => setActiveSection(sectionKey)}
                className={`cursor-pointer ${
                  activeSection === sectionKey ? "font-bold text-black" : "text-gray-500"
                } hover:text-black`}
              >
                {sections[sectionKey].title}
              </li>
            ))}
          </ul>
        </div>

        {/* Sağdaki İçerik */}
        <div className="w-3/4 p-4">
          <h2 className="text-2xl font-bold">{sections[activeSection].title}</h2>
          <div className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: sections[activeSection].content }}></div>
        </div>
      </div>
    </div>
  );
};

export default Others;
