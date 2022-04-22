import { createStore } from "redux";

import RootReducer from "./redux/Reducer/RootReducer";

const store = createStore(RootReducer);

export default store;
