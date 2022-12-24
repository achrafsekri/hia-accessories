import React from "react";

const Input = ({label,type,name,register}) => {
  return (
    <div className=''>
      <label htmlFor="name" className="">{label}</label>
      <input type={type} name={name} className="text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" />
    </div>
  );
};

export default Input;
