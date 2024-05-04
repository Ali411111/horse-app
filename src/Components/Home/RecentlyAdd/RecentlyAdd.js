import React, { useContext, useRef, useState } from "react";
import "./RecentlyAdd.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
export default function RecentlyAdd() {
  let navigate = useNavigate();
  const [recentlyAddHorses, setRecentlyAddHorses] = useState([]);
  const userContext = useContext(UserContext);
  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));



  useEffect(() => {
    getAllRecentlyAdds();
  }, []);

  const getAllRecentlyAdds = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/recently-added-horses/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRecentlyAddHorses(result.results);
      });
  };

  let arrayImages = recentlyAddHorses
    .map((objs) => objs.images.map((obj) => obj.file))
    .map((srcs) => {
      return {
        src: srcs[0],
      };
    });

  const goToHorseDetailsHandler = (abc) => {
    let indexOfSelectedHorse = arrayImages.findIndex(
      (obj) => obj.src === abc.src
    );

    userContext.setHorseId(recentlyAddHorses[indexOfSelectedHorse].id);
    navigate("/home/horsedetails", { replace: true });
  };

  return (
    <div className="recentlyadd">
      <div className="recentlyadd-title">
        <span>Recently added</span>
      </div>
      <div className="recentlyadd-images">
        {arrayImages.length ? (
          arrayImages.map((abc) => (
            <img
              onClick={() => goToHorseDetailsHandler(abc)}
              src={abc.src}
              className="recentlyadd-image"
            />
          ))
        ) : (
          <>
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="recentlyadd-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="recentlyadd-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="recentlyadd-image"
            />
          </>
        )}
      </div>
    </div>
  );
}
