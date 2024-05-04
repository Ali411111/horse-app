import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
export default function TrendingAdds() {
  let navigate = useNavigate();
  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));

  const userContext = useContext(UserContext);
  const [trendingAddsHorses, setTrendingAddsHorses] = useState([]);

  useEffect(() => {
    getAllTrendingAdds();
  }, []);

  const getAllTrendingAdds = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/trending-horses/", requestOptions)
      .then((response) => response.json())
      .then((result) => setTrendingAddsHorses(result.results));
  };

  const goToHorseDetailsHandler = (abc) => {
    let indexOfSelectedHorse = arrayImages.findIndex(
      (obj) => obj.src === abc.src
    );

    userContext.setHorseId(trendingAddsHorses[indexOfSelectedHorse].id);

    navigate("/home/horsedetails", { replace: true });
  };

  let arrayImages = trendingAddsHorses
    .map((objs) => objs.images.map((obj) => obj.file))
    .map((srcs) => {
      return {
        src: srcs[0],
      };
    });

  console.log(arrayImages);

  return (
    <div className="Topadds">
      <div className="TopAdds-title">
        <span className="TopAdds-title-span">Trending Adds</span>
      </div>
      <div className="Topadds-images">
        {arrayImages.length ? (
          arrayImages.map((abc) => (
            <img
              onClick={() => goToHorseDetailsHandler(abc)}
              src={abc.src}
              className="Topadds-image"
            />
          ))
        ) : (
          <>
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
            <img
              onClick={() => navigate("/home/horsedetails", { replace: true })}
              src="/images/horse.06cffeec0cba217b0c75.png"
              className="Topadds-image"
            />
          </>
        )}
      </div>
    </div>
  );
}
