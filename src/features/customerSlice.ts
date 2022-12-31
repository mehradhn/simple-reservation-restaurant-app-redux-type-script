import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  foods: string[];
}

interface AddFoodToCustomerPayLoad {
  food: string;
  id: string;
}

const initialState: customerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayLoad>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.foods.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
