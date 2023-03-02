import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { slice } from "../store/createStore";
import LandingPage from "../pages/LandingPage";

export const Display = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = localStorage.getItem("userLogin");
  if (isUserLoggedIn) {
    const userName = localStorage.getItem("userName");
    if (userName) dispatch(slice.actions.setUserName(userName));
  }
  return (
    <>
    {/* <LandingPage/> */}
      {!isUserLoggedIn ? <Navigate to="/Landing" /> : <Navigate to="/Home" />}
    </>
  );
};
