import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";


function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="/user/:userId" element={<UserPage/>} />
    </Routes>
  );
}

export default App;
