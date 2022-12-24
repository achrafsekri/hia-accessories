import React from "react";
import { DummyCheckoutData } from "../../../helpers/DummyCheckoutData";


const Shipping = ({ selectedIndex, setSelectedIndex }) => {
  console.log(selectedIndex);
  const onsubmit = (e) => {
    e.preventDefault();
    setSelectedIndex( 1);
  };
  return (
    <form
      className="py-6 space-y-5 overflow-x-hidden h-fit "
      action="#"
      method="POST"
      onSubmit={onsubmit}
    >
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="lName"
        >
          Prenom *
        </label>
        <input
          id="lName"
          name="lName"
          type="text"
          autoComplete="lName"
          placeholder="Entre votre prenom"
          required
          value={DummyCheckoutData.lastName}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="fName"
        >
          Nom *
        </label>
        <input
          id="fName"
          name="fName"
          type="text"
          autoComplete="fName"
          placeholder="Entre votre nom"
          required
          value={DummyCheckoutData.firstName}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="email"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="example@email.com"
          required
          value={DummyCheckoutData.email}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="phoneNumber"
        >
          Numéro de téléphone *
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          placeholder="06 00 00 00 00"
          type="tel"
          autoComplete="tel"
          required
          value={DummyCheckoutData.phone}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="address1"
        >
          Adresse 1 *
        </label>
        <input
          id="address1"
          name="address1"
          type="text"
          placeholder="Adresse 1"
          required
          value={DummyCheckoutData.address}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="address2"
        >
          Adresse 2
        </label>
        <input
          id="address2"
          name="address2"
          type="text"
          placeholder="Adresse 2"
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex w-full gap-4">
        <div className="flex flex-col w-1/2">
          <label
            className="mb-2 font-semibold text-md text-mainText"
            htmlFor="city"
          >
            Ville *
          </label>
          <input
            id="city"
            name="city"
            type="text"
            placeholder="Ville"
            required
            value={DummyCheckoutData.city}
            className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            className="mb-2 font-semibold text-md text-mainText"
            htmlFor="zip"
          >
            Code postal *
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            placeholder="Code postal"
            required
            value={DummyCheckoutData.zip}
            className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="country"
        >
          Pays *
        </label>
        <select
          id="country"
          name="country"
          autoComplete="country"
          required
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        >
          <option default>Selecter votre pays </option>
          <option>France</option>
          <option>Belgique</option>
          <option>Allemagne</option>
          <option>Italie</option>
          <option>Autriche</option>
        </select>
      </div>
      <div className="flex gap-4 mt-8">
        <button className="flex items-center justify-center h-10 text-sm font-medium text-white rounded-lg w-28 bg-blue hover:bg-blueHover focus:ring-blue focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-mainBlue">
          Continuer
        </button>
      </div>
    </form>
  );
};

export default Shipping;
