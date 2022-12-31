import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";
function App() {
  const [reservationNameInput, setReservationNameInput] = useState<string>("");
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customers.value);
  console.log(customers)

  const dispatch = useDispatch();
  // console.log(reservations);
  const addReservationHandler = () => {
    if (reservationNameInput.trim().length === 0) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  };
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard id={index} name={name} key={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(event) => setReservationNameInput(event.target.value)}
            />
            <button onClick={addReservationHandler}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return <CustomerCard id={customer.id} name={customer.name} foods={customer.foods}  />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
