import { useState } from 'react';

const DeliveryForm = () => {
  const [city, setCity] = useState('Bakı');

  return (
    <div className=" w-full lg:w-1/2">
      {/* Section 1: Personal Info */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="flex justify-center items-center w-8 h-8 rounded-full border border-red-500 text-red-500 font-bold">
            1
          </div>
          <h2 className="ml-2 text-xl font-semibold">Personal info</h2>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Section 2: Delivery */}
      <div>
        <div className="flex items-center mb-2">
          <div className="flex justify-center items-center w-8 h-8 rounded-full border border-red-500 text-red-500 font-bold">
            2
          </div>
          <h2 className="ml-2 text-xl font-semibold">Delivery</h2>
        </div>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full mb-4 p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
        >
          <option value="Bakı">Bakı</option>
          <option value="Sumqayıt">Sumqayıt</option>
          <option value="Gəncə">Gəncə</option>
        </select>
        <textarea
          placeholder="Notes"
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default DeliveryForm;
