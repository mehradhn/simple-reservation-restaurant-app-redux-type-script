import React from "react";
import {useDispatch} from "react-redux"
import {removeReservation} from "../features/reservationSlice"
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";


interface reservationCardTypes {
  name: string;
  id: number;
}

function ReservationCard({ name, id }: reservationCardTypes) {
  const dispatch = useDispatch()


  return (
    <div
      onClick={() =>{
        dispatch(removeReservation(id));
        dispatch(addCustomer({
          id:uuid(),
          name,
          foods:[]
        }))
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}

export default ReservationCard;
