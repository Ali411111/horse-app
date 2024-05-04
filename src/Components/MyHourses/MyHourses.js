import React from "react";
import "./MyHourses.css";
import NavbarHome from "../Home/NavbarHome/NavbarHome";
import Footer from "../Home/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
export default function MyHourses() {
  let navigate = useNavigate();
  const changeToFavorite = () => {
    document.querySelector(".myhorses-btn").classList.remove("active");
    document.querySelector(".favorite-btn").classList.add("active");
    navigate("/MyFavoriteHourse", { replace: true });
  };
  const changeToMyHourse = () => {
    document.querySelector(".favorite-btn").classList.remove("active");
    document.querySelector(".myhourses-btn").classList.add("active");
    navigate("/MyHorses", { replace: true });
  };

  return (
    <>
      <NavbarHome />
      <div className="myhorses">
        <div className="myfavoriteHorse-btns">
          <button className="favorite-btn" onClick={changeToFavorite}>
            Favorites
          </button>
          <button className="myhorses-btn active" onClick={changeToMyHourse}>
            My Horses
          </button>
        </div>
        <span className="myhorses-title">My Horses</span>
        <div className="myhorses-images">
          <div className="myhorse-card-container">
            <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" />
            <button className="myhorse-like-btn">
              <GoHeartFill className="myhorse-like-icon" />
              <span>456</span>
            </button>
            <div className="myhorse-texts-btns">
              <span>Roheryn</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                luctus duis commodo adipiscing quam vulputate. orem ipsum dolor
                sit amet, consectetur.
                <a className="myhorses-reedmore" href="#">
                  Read more
                </a>
              </p>
              <button className="myhorse-removeadds">Remove Ads</button>
              <button className="myhorse-edit">Edit</button>
              <button className="myhorse-details">Details</button>
            </div>
          </div>
          <div className="myhorse-card-container">
            <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" />
            <button className="myhorse-like-btn">
              <GoHeartFill className="myhorse-like-icon" />
              <span>456</span>
            </button>
            <div className="myhorse-texts-btns">
              <span>Roheryn</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                luctus duis commodo adipiscing quam vulputate. orem ipsum dolor
                sit amet, consectetur.
                <a className="myhorses-reedmore" href="#">
                  Read more
                </a>
              </p>
              <button className="myhorse-removeadds">Remove Ads</button>
              <button className="myhorse-edit">Edit</button>
              <button className="myhorse-details">Details</button>
            </div>
          </div>
          <div className="myhorse-card-container">
            <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" />
            <button className="myhorse-like-btn">
              <GoHeartFill className="myhorse-like-icon" />
              <span>456</span>
            </button>
            <div className="myhorse-texts-btns">
              <span>Roheryn</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                luctus duis commodo adipiscing quam vulputate. orem ipsum dolor
                sit amet, consectetur.
                <a className="myhorses-reedmore" href="#">
                  Read more
                </a>
              </p>
              <button className="myhorse-removeadds">Remove Ads</button>
              <button className="myhorse-edit">Edit</button>
              <button className="myhorse-details">Details</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
