import "./App.css";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      {/* passing the store to entire application using provider */}
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
