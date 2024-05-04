import React, { useContext} from "react";
import routes from "./Components/routes";
import { Routes, Route, useRoutes, useLocation } from "react-router-dom";
import { UserContext } from "./Components/Context/UserContext";
import Login from "./Components/LandingPage/Login/Login";
import LandingPage from "./Components/LandingPage/LandingPage";
import SingUpLogin from "./Components/LandingPage/SingUpLogin/SingUpLogin";
import AboutUs from "./Components/LandingPage/AboutUs/AboutUs";
import FAQ from "./Components/LandingPage/FAQ/FAQ";
import ContactUs from "./Components/LandingPage/ContactUs/ContactUs";
export default function App() {
  const router = useRoutes(routes);
  const userContext = useContext(UserContext);
  console.log(userContext.isLogin);
  
  let UserInfo = JSON.parse(localStorage.getItem('userInformation'))



  return (
    <>
      { 

        userContext.isLogin ?
           (router) : (

            <>
            <Routes>
              <Route path="/home/*" element={<LandingPage />}/>
              <Route path="/Setting/*" element={<LandingPage />}/>
              <Route path="/MyFavoriteHourse/*" element={<LandingPage />}/>
              <Route path="/MyHorses/*" element={<LandingPage />}/>
              <Route path="/Messages/*" element={<LandingPage />}/>
              <Route path="/notifications/*" element={<LandingPage />}/>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign up" element={<SingUpLogin />} />
              <Route path="/about us" element={<AboutUs />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/contact us" element={<ContactUs />} />
            </Routes>
            </>

        )
      
      }
    </>
  );
}
