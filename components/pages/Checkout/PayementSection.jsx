import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Shipping from "./Shipping";
import Payement from "./Payement";
import Confirmation from "./Confirmation";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { DummyCheckoutData } from "../../../helpers/DummyCheckoutData";
import { useCartState } from "../../../context/CartContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');


const PayementSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [checkoutData, setCheckoutData] = useState(null);
  const cart = useCartState()
  const payementStepper = [
    {
      id: 0,
      component: (
        <Shipping
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          setCheckoutData={setCheckoutData}
        />
      ),
      label: "Shipping info",
    },
    {
      id: 1,
      component: (
        <Payement
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          checkoutData={checkoutData}
        />
      ),
      label: "Payement",
    },
    {
      id: 2,
      component: (
        <Confirmation
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          order={DummyCheckoutData.order}
        />
      ),
      label: "Confirmation",
    },
  ];
  return (
    <Elements stripe={stripePromise}>
      <div className="justify-center hidden py-10 overflow-x-hidden overflow-y-scroll bg-white lg:w-1/2 lg:flex">
        <div id="container" className=" lg:w-3/5">
          <h1 className="text-lg font-bold">Payement</h1>
          <Tab.Group
            manual
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <Tab.List className="flex justify-between w-full h-14">
              {payementStepper.map((step) => (
                <Tab
                  key={step.id}
                  disabled={step.id > selectedIndex}
                  className={({ selected }) =>
                    classNames(
                      "w-full h-full text-md font-medium text-center text-gray-500 focus:outline-none",
                      selected
                        ? "border-b-2 border-indigo-600 text-indigo-600"
                        : "text-blue-100 hover:text-indigo-600"
                    )
                  }
                >
                  {step.label}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {payementStepper.map((step) => (
                <Tab.Panel key={step.id}>{step.component}</Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Elements>
  );
};

export default PayementSection;
