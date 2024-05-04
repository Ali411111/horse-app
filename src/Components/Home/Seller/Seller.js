import React, { useState, useRef, useContext } from "react";
import "./Seller.css";
import NavbarHome from "../NavbarHome/NavbarHome";
import Footer from "../Footer/Footer";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import Radio from "@mui/material/Radio";

export default function Seller() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setGenderOfHorse(event.target.value);
  };

  const controlProps = (item) => ({
    checked: genderOfHorse === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const userContext = useContext(UserContext);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });
  let UserInfo = JSON.parse(localStorage.getItem("userInformation"));

  const [nameOfHorse, setNameOfHorse] = useState("");
  const [cityOfUser, setCityOfUser] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [userState, setUserState] = useState("");
  const [yearOfBrithHorse, setYearOfBrithHorse] = useState("");
  const [heightOfHorse, seHeightOfHorse] = useState("");
  const [priceOfHorse, setPriceOfHorse] = useState("");
  const [describeHorse, setDescribeHorse] = useState("");
  const [keywords, setKeywords] = useState("");
  const [genderOfHorse, setGenderOfHorse] = useState("");

  const [imageOfHorse, setImageOfHorse] = useState([]);
  const [imageId, setImageId] = useState([]);
  const [imageSrc, setImageSrc] = useState("");

  const [Breed, setBreed] = useState([]);
  const [allBreeds, setAllBreeds] = useState([]);

  const [allDiscipline, setAllDiscipline] = useState([]);
  const [Discipline, setDiscipline] = useState([]);
  const [disciplineId, setDisciplineId] = useState("");

  const [Color, setColor] = useState([]);
  const [allColors, setAllColors] = useState([]);

  const [Temperament, setTemperament] = useState([]);
  const [allTemperament, setAllTemperament] = useState([]);

  useEffect(() => {
    if (imageOfHorse.length) {
      console.log(imageOfHorse);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", UserInfo[0].token);

      var formdata = new FormData();
      formdata.append("file", imageOfHorse[0], imageOfHorse[0].name);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/api/v1/horse-images/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setImageId(result.id);
          setImageSrc(result.file);
        });
    }
  }, [imageOfHorse]);

  if (imageSrc.length) {
    document.querySelector(".imageHorse").classList.add("active");
  }

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/disciplines/", requestOptions)
      .then((response) => response.json())
      .then((result) => setAllDiscipline(result));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/breeds/", requestOptions)
      .then((response) => response.json())
      .then((result) => setAllBreeds(result));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/colors/", requestOptions)
      .then((response) => response.json())
      .then((result) => setAllColors(result));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", UserInfo[0].token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/temperaments/", requestOptions)
      .then((response) => response.json())
      .then((result) => setAllTemperament(result));
  }, []);

  const saveHorseHandler = (event) => {
    event.preventDefault();

    let selectedBreed = allBreeds.findIndex((obj) => obj.breed === Breed.breed);

    let selectedDiscipline = allDiscipline.findIndex(
      (obj) => obj.discipline === Discipline.discipline
    );

    let selectedColor = allColors.findIndex((obj) => obj.color === Color.color);

    let selectedTemprement = allTemperament.findIndex(
      (obj) => obj.temperament === Temperament.temperament
    );

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", UserInfo[0].token);

    var raw = JSON.stringify({
      images_id: [imageId],
      title: nameOfHorse,
      state: userState,
      city: cityOfUser,
      zipcode: zipCode,
      user_location: "POINT(29.267009122340333 71.07118838209283)",
      price: priceOfHorse,
      description: describeHorse,
      year_of_birth: yearOfBrithHorse,
      breed_id: allBreeds[selectedBreed].id,
      gender: genderOfHorse,
      color_id: allColors[selectedColor].id,
      height: heightOfHorse,
      temperament_id: allTemperament[selectedTemprement].id,
      discipline_id: allDiscipline[selectedDiscipline].id,
      keywords_id: [],
      location_id: 1,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/v1/horse/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        let horseDisciplineIds = JSON.parse(
          localStorage.getItem("Horseid&dic")
        );
        if (horseDisciplineIds) {
          localStorage.setItem(
            "Horseid&dic",
            JSON.stringify([
              ...horseDisciplineIds,
              {
                id: result.id,
                disciplineID: allDiscipline[selectedDiscipline].id,
              },
            ])
          );
        } else {
          localStorage.setItem(
            "Horseid&dic",
            JSON.stringify([
              {
                id: result.id,
                disciplineID: allDiscipline[selectedDiscipline].id,
              },
            ])
          );
        }
      });

    setNameOfHorse("");
    setCityOfUser("");
    setZipCode("");
    setUserState("");
    setGenderOfHorse("");
    setYearOfBrithHorse("");
    seHeightOfHorse("");
    setPriceOfHorse("");
    setDescribeHorse("");
    setKeywords("");
  };

  return (
    <>
      <div className="seller-body">
        <NavbarHome />
        <form action="#" className="buyer-form">
          <h1 className="buyer-form-title">Seller</h1>
          <h4 className="seller-form-subtitle">Add a hourse</h4>
          <div className="chosee-file">
            <h3>Upload image/video</h3>
            <p>
              First image/video-is the title picture, Drag to change the order
            </p>
            <Button component="label" style={{ background: "unset" }}>
              <span className="add-horse-img">+</span>
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => setImageOfHorse([event.target.files[0]])}
              />
            </Button>
            <p>Upload up to 5 images/3 videos (max of 90 seconds)</p>
            <img className="imageHorse" src={imageSrc} />
          </div>
          <div className="nameofhourse-container">
            <span>Name of Horse</span>
            <input
              type="text"
              value={nameOfHorse}
              onChange={(event) => setNameOfHorse(event.target.value)}
            />
          </div>
          <div className="Location-container">
            <span>Location</span>
            <select name="" id=""></select>
          </div>
          <div className="city-container">
            <span>City</span>
            <input
              type="text"
              value={cityOfUser}
              onChange={(event) => setCityOfUser(event.target.value)}
            />
          </div>
          <div className="zip-container">
            <span>Zip</span>
            <input
              type="text"
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
            />
          </div>
          <div className="state-container">
            <span>State</span>
            <input
              type="text"
              value={userState}
              onChange={(event) => setUserState(event.target.value)}
            />
          </div>
          <div className="breed-container">
            <span>Breed</span>
            <select
              name=""
              id=""
              onChange={(event) => setBreed({ breed: event.target.value })}
            >
              <option value=""></option>
              <option value="Andalusian">Andalusian</option>
              <option value="APHA paint">APHA paint</option>
              <option value="Appaloosa">Appaloosa</option>
              <option value="AQHA Quarter Horse">AQHA Quarter Horse</option>
              <option value="Arabian">Arabian</option>
              <option value="Clydesdale">Clydesdale</option>
              <option value="Connemara">Connemara</option>
              <option value="Cross">Cross</option>
              <option value="Draft">Draft</option>
              <option value="Dutch Warmblood KWPN">Dutch Warmblood KWPN</option>
              <option value="Fjord">Fjord</option>
              <option value="Fresian">Fresian</option>
              <option value="Grade Horse">Grade Horse</option>
              <option value="Gypsy">Gypsy</option>
              <option value="Haflinger">Haflinger</option>
              <option value="Hannoverian">Hannoverian</option>
              <option value="Holsteiner">Holsteiner</option>
              <option value="Icelandic">Icelandic</option>
              <option value="Lusitano">Lusitano</option>
              <option value="Miniature">Miniature</option>
              <option value="Missouri Fox Trotter">Missouri Fox Trotter</option>
              <option value="Morgan">Morgan</option>
              <option value="Mustang">Mustang</option>
              <option value="Oldenburg">Oldenburg</option>
              <option value="Other">Other</option>
              <option value="Paso Fino">Paso Fino</option>
              <option value="Pony">Pony</option>
              <option value="Pony Of Americas">Pony Of Americas</option>
              <option value="Rocky Mountain">Rocky Mountain</option>
              <option value="Saddlebred">Saddlebred</option>
              <option value="Shetland Pony">Shetland Pony</option>
              <option value="Sport Horse">Sport Horse</option>
              <option value="Standardbred">Standardbred</option>
              <option value="Tennessee Walker">Tennessee Walker</option>
              <option value="Thoroughbred">Thoroughbred</option>
              <option value="Warmblood">Warmblood</option>
              <option value="Welsh">Welsh</option>
            </select>
          </div>
          <div className="yearofbrith-container">
            <span>Year of birth</span>
            <input
              type="text"
              value={yearOfBrithHorse}
              onChange={(event) => setYearOfBrithHorse(event.target.value)}
            />
          </div>
          <div className="height-container">
            <span>Height</span>
            <input
              type="text"
              value={heightOfHorse}
              onChange={(event) => seHeightOfHorse(event.target.value)}
            />
          </div>
          <div className="price-container">
            <span className="price-title">Price</span>
            <div className="price-input-container">
              <input
                type="text"
                value={priceOfHorse}
                onChange={(event) => setPriceOfHorse(event.target.value)}
              />
              <span className="dollar">$</span>
            </div>
          </div>

          <div className="Discipline-container">
            <span>Discipline</span>
            <select
              name=""
              id="discipline-container"
              onChange={(event) =>
                setDiscipline({ discipline: event.target.value })
              }
            >
              <option value=""></option>
              <option value="All around">All around</option>
              <option value="All Around Show">All Around Show</option>
              <option value="Barrels - poles - Gymkhana">
                Barrels - poles - Gymkhana"
              </option>
              <option value="Beginner -kid safe">Beginner -kid safe</option>
              <option value="Broodmare">Broodmare</option>
              <option value="Companion">Companion</option>
              <option value="Cow horse">Cow horse</option>
              <option value="Cross-Country">Cross-Country</option>
              <option value="Dressage">Dressage</option>
              <option value="Drill Team">Drill Team</option>
              <option value="Endurance/Racing">Endurance/Racing</option>
              <option value="English">English</option>
              <option value="Eventing">Eventing</option>
              <option value="Halter">Halter</option>
              <option value="Hunter/Jumper/Equitation">
                Hunter/Jumper/Equitation
              </option>
              <option value="Lesson">Lesson</option>
              <option value="Mounted Archery">Mounted Archery</option>
              <option value="Mounted Police">Mounted Police</option>
              <option value="Polo">Polo</option>
              <option value="Project">Project</option>
              <option value="Ranch Riding">Ranch Riding</option>
              <option value="Ranch Work">Ranch Work</option>
              <option value="Reining">Reining</option>
              <option value="Rescue/Rehome">Rescue/Rehome</option>
              <option value="Rodeo">Rodeo</option>
              <option value="Roping">Roping</option>
              <option value="Therapy">Therapy</option>
              <option value="Traill">Traill</option>
              <option value="Vaulting">Vaulting</option>
              <option value="Western">Western</option>
              <option value="Western Pleasure">Western Pleasure</option>
            </select>
          </div>
          <div className="gender-container">
            <span>Gender</span>
            <div className="gender-inputs">
              <div className="gelding-input">
                <Radio {...controlProps("Gelding")} color="default" />
                <span>Gelding</span>
              </div>
              <div className="mare-input">
                <Radio {...controlProps("Mare")} color="default" />
                <span>Mare</span>
              </div>
              <div className="stallion-input">
                <Radio {...controlProps("Stallion")} color="default" />
                <span>Stallion</span>
              </div>
            </div>
          </div>
          <div className="color-container">
            <span>Color</span>
            <select
              name=""
              id=""
              onChange={(event) => setColor({ color: event.target.value })}
            >
              <option value=""></option>
              <option value="Bay">Bay</option>
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
              <option value="Buckskin">Buckskin</option>
              <option value="Champagne">Champagne</option>
              <option value="Chestnut">Chestnut</option>
              <option value="Cremello">Cremello</option>
              <option value="Dappled Bay">Dappled Bay</option>
              <option value="Dappled Gray">Dappled Gray</option>
              <option value="Dun">Dun</option>
              <option value="Fleabitten Gray">Fleabitten Gray</option>
              <option value="Grey">Grey</option>
              <option value="Grullo">Grullo</option>
              <option value="Leopard">Leopard</option>
              <option value="Liver Chestnut">Liver Chestnut</option>
              <option value="Palomino">Palomino</option>
              <option value="Piebald">Piebald</option>
              <option value="Pinto">Pinto</option>
              <option value="Roan">Roan</option>
              <option value="Silver">Silver</option>
              <option value="Skewbald">Skewbald</option>
              <option value="Sorrel">Sorrel</option>
              <option value="White">White</option>
            </select>
          </div>
          <div className="Temperament-container">
            <span>Temperament</span>
            <select
              name=""
              id=""
              onChange={(event) =>
                setTemperament({ temperament: event.target.value })
              }
            >
              <option value=""></option>
              <option value="1">1 (Most Mellow)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (Hot)</option>
            </select>
          </div>
          <div className="discribehourse-container">
            <span>Describe your Horse</span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={describeHorse}
              onChange={(event) => setDescribeHorse(event.target.value)}
            ></textarea>
          </div>
          <div className="Input-keywords-container">
            <span>input keyword</span>
            <div className="Input-keyword">
              <input
                type="text"
                value={keywords}
                onChange={(event) => setKeywords(event.target.value)}
              />
              <button>+</button>
            </div>
          </div>
          <div className="addanother-btn-container">
            <buttom className="addanother-btn">Add another</buttom>
            <span>Available for premium users (up to 10 horses)</span>
          </div>
          <div className="create-btn-container">
            <buttom className="create-btn" onClick={saveHorseHandler}>
              Create
            </buttom>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
