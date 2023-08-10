import React from 'react'
import image from '../assets/images/f8b0f70b-e7a1-4437-af9e-dc8b529ec044.jpeg'


export default function Product() {
  return (
    <>
      <div className="flex justify-evenly items-center min-h-screen bg-gray-100">
        <div className="w-full flex">
          <div className="w-1/2 pr-8 ml-20">
            <img src={image} alt="Product" className="w-full rounded-lg" />
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl font-semibold mb-4">שם המוצר</h2>

            <p className="text-gray-700 text-lg mb-6">
             תיאור המוצר
            </p>
            <h2>מחיר</h2>
            <hr />

            <div>
                <p>משלוח חינם</p>
              
            </div>

            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              הוספה לסל 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
