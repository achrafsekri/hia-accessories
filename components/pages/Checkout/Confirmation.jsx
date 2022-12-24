import React from "react";
import Image from "next/image";
const Confirmation = ({ order }) => {
  return (
    <div className="py-6 space-y-5 overflow-x-hidden  h-fi">
      <div className="mb-4">
        <div className="text-lg font-bold">Merci pour votre commande !</div>
        <div>
          Votre numéro de commande est :{" "}
          <span className="font-medium">{order.number}</span>
        </div>
        <div>
          Votre numéro de livraison est :{" "}
          <span className="font-medium">{order.ShippingId}</span>
        </div>
        
        
      </div>
      <div className="mb-4">
        <div className="mb-2 font-bold">Adresse de livraison</div>
        <p>{order.shippingAddress}</p>
      </div>
      <div className="mb-4">
        <div className="mb-2 font-bold">Méthode de paiement</div>
        <div>{order.paymentMethod}</div>
      </div>
      <div className="mb-4">
        <div className="mb-2 font-bold">Articles commandés</div>
        <div>
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <div className="relative w-12 h-12 overflow-hidden bg-gray-300 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="ml-4">
                <div>{item.name}</div>
                <div className="text-sm text-gray-600">
                  {item.quantity} x {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 font-bold">Total</div>
        <div>{order.total}</div>
        <div className="flex items-center mt-4">
          <a href="#" className="w-full py-3 text-sm font-semibold text-center text-white border rounded-lg disabled:bg-gray-300 focus:ring-blue focus:border-blue bg-blue border-border">
            Suivre votre commande
          </a>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
