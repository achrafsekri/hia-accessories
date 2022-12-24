import React from "react";

const Announcement = () => {
  return (
    <div className="w-full text-sm font-medium text-center text-white md:text-base bg-primary">
      <div className="container max-w-6xl px-4 py-2 mx-auto">
        Livraison <span className="mx-1 font-bold">GRATUITE</span> offerte à
        partir de <span className="mx-1 font-bold">30 euros</span> d'achat
      </div>
    </div>
  );
};

export default Announcement;
