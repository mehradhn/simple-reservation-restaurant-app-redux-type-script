import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  foods: string[];
}

function CustomerCard({ id, name, foods }: CustomerCardType) {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food, index) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (customerFoodInput.trim().length === 0) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
