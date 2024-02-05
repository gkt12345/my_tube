import React from "react";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default App;
