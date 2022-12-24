import React from 'react'

const Summary = () => {
  return (
    <div className="text-md">
        <span className="flex justify-between w-full my-3 text-textGray"><h2>Subtotal</h2> <span className="font-medium text-mainText">$56.00</span></span>
        <span className="flex justify-between w-full my-3 text-textGray"><h2>Frais de port</h2> <span className="font-medium text-mainText">$56.00</span></span>
        <span className="flex justify-between w-full my-3 text-textGray"><h2>Remise</h2> <span className="font-medium text-mainText">$56.00</span></span>
        <hr className='my-3 bg-border'/>
        <span className="flex justify-between w-full my-3 font-bold text-mainText"><h2>Total</h2> <span className=" text-mainText">$56.00</span></span>
    </div>
  )
}

export default Summary