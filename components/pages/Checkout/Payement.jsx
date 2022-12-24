import React from "react";
import { DummyCheckoutData } from "../../../helpers/DummyCheckoutData";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
const Payement = ({ selectedIndex, setSelectedIndex }) => {
  const [loading, setLoading] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = (e) => {
    e.preventDefault();
    setSelectedIndex(2);
  };
  return (
    <form
      className="py-6 space-y-5 overflow-x-hidden h-fit "
      action="#"
      method="POST"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="card-holder-name"
        >
          Nom du titulaire *
        </label>
        <input
          id="card-holder-name"
          name="card-holder-name"
          type="text"
          autoComplete="card-holder-name"
          placeholder="Entrer votre nom"
          required
          value={DummyCheckoutData.cardHolderName}
          className="w-full h-10 px-4 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="card-info"
        >
          Carte *
        </label>
        <CardElement
          className="w-full px-4 py-3 text-sm font-medium border rounded-lg focus:ring-blue focus:border-blue text-mainText bg-paperGray border-border"
          id="card-element"
          options={{ hidePostalCode: true }}
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-md text-mainText"
          htmlFor="billing-address"
        >
          Adresse de facturation *
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
      {/* //policies and terms checkbox */}
      <div className="flex gap-2">
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="w-4 h-4 border-gray-300 rounded text-blue focus:ring-blue"
            required
          />
          <label
            htmlFor="terms"
            className="block ml-2 text-sm text-mainText"
          ></label>
        </div>
        <p className="text-xs text-gray-500">
          En cliquant sur "Payer", vous acceptez nos{" "}
          <a href="#" className="text-blue">
            Conditions d'utilisation
          </a>{" "}
          et{" "}
          <a href="#" className="text-blue">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
      <div className="space-y-2">
        <button
          type="submit"
          disabled={!stripe}
          className="w-full h-10 px-4 text-sm font-semibold text-white border rounded-lg disabled:bg-gray-300 focus:ring-blue focus:border-blue bg-blue border-border"
        >
          {!loading && `Payer ${DummyCheckoutData.totalPrice} €`}
          {loading && (
            <span className="ml-2 animate-spin">
              <svg
                role="status"
                class="inline mr-3 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Paiement en cours ...
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Payement;
