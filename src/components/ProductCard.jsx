import React from 'react'
import image from '../assets/images/f8b0f70b-e7a1-4437-af9e-dc8b529ec044.jpeg'

export default function ProductCard() {
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}
