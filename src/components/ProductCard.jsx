import React from 'react'
import image from '../assets/images/f8b0f70b-e7a1-4437-af9e-dc8b529ec044.jpeg'

export default function ProductCard() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md bg-white p-8 shadow-md rounded-md">
      
        <img
          src={image}
          alt="Product"
          className="w-full rounded-lg mb-4"
        />

       
        <h2 className="text-xl font-semibold mb-2">Product Name</h2>

    
        <p className="text-gray-700 mb-4">
          This is a detailed description of the product. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>

      
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add to Bag
        </button>
      </div>
    </div>
    </>
  );
}
