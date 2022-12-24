import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container px-4 py-4 mx-auto mt-10 space-y-6 max-w-7xl">
      <div className="flex justify-between w-full lg:items-center">
        <div className="space-y-2">
          <h2 className="font-semibold">AIDE & INFORMATIONS</h2>
          <ul className="flex flex-col gap-1 md:gap-3 lg:flex-row">
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">Contact</Link>
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">Suivre ma commande</Link>
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">FAQs</Link>
            <Link href="/Conditions-generales" className="font-medium no-underline text-mainText hover:text-secondary">Conditions générales</Link>
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">Livraison et retours</Link>
            
          </ul>
        </div>
        
        <div id="social-media">
          <h2 className="font-semibold">Suivez nous</h2>
          <ul className="flex flex-col gap-1 lg:gap-3 lg:flex-row">
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">Facebook</Link>
            <Link href="/" className="font-medium no-underline text-mainText hover:text-secondary">Instagram</Link>
          </ul>
        </div>
      </div>
      <p className="w-full text-center">
        © Copyright 2022 <span className="font-medium">Hia</span>. Tous les droits sont réservés.
      </p>
    </div>
  );
};

export default Footer;
