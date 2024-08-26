import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import popularSlice from "./popularSlice";

const store = configureStore({
    reducer: {
        app: appSlice, 
        popularData:popularSlice
    },
});

export default store;