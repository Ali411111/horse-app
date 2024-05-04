import React, { useEffect, useState } from "react";
import "./MyFavoriteHourse.css";
import NavbarHome from "../Home/NavbarHome/NavbarHome";
import Footer from "../Home/Footer/Footer";
import TopAdds from "../Home/TopAdds/TopAdds";
import { useNavigate } from "react-router-dom";
export default function MyFavoriteHourse() {
  let navigate = useNavigate();
  const changeToFavorite = () => {
    document.querySelector(".myhorses-btn active").classList.remove("active");
    document.querySelector(".favorite-btn").classList.add("active");
    navigate("/MyFavoriteHourse", { replace: true });
  };
  const changeToMyHorse = () => {
    document.querySelector(".favorite-btn").classList.remove("active");
    document.querySelector(".myhorses-btn").classList.add("active");
    navigate("/MyHorses", { replace: true });
  };

  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));

  const [myfavoriteHorses, setMyfavoriteHorses] = useState([]);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/favourite/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setMyfavoriteHorses(result.results)});
  }, []);

  let arrayImages = myfavoriteHorses
    .map((objs) => objs.images.map((obj) => obj.file))
    .map((srcs) => {
      return srcs.join();
    });

  return (
    <>
      <NavbarHome />
      <div className="myfavoriteHorse">
        <div className="myfavoriteHorse-btns">
          <button className="favorite-btn active" onClick={changeToFavorite}>
            Favorites
          </button>
          <button className="myhorses-btn" onClick={changeToMyHorse}>
            My Horses
          </button>
        </div>
        <div className="myfavoriteHorse-images">
          <span className="myfavoriteHorse-images-span">Favorites</span>
          {arrayImages.length ? (
            arrayImages.map((src) => (
              <div className="Topadds-images">
                <img
                  onClick={() =>
                    navigate("/home/horsedetails", { replace: true })
                  }
                  src={src}
                  className="Topadds-image"
                />
              </div>
            ))
          ) : (
            <div className="Topadds-images">
              <img
                onClick={() =>
                  navigate("/home/horsedetails", { replace: true })
                }
                src="/images/horse.06cffeec0cba217b0c75.png"
                className="Topadds-image"
              />
              <img
                onClick={() =>
                  navigate("/home/horsedetails", { replace: true })
                }
                src="/images/horse.06cffeec0cba217b0c75.png"
                className="Topadds-image"
              />
              <img
                onClick={() =>
                  navigate("/home/horsedetails", { replace: true })
                }
                src="/images/horse.06cffeec0cba217b0c75.png"
                className="Topadds-image"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
