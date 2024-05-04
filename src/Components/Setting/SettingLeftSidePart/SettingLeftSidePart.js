import React,{useContext, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiUpgrade } from "react-icons/gi";
import { MdUnsubscribe } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LockIcon from "@mui/icons-material/Lock";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import DeleteAccountModal from '../../DeleteAccountModal/DeleteAccountModal';
import LogOutModal from '../../LogOutModal/LogOutModal';
import UnsubscribeModal from '../../UnsubscribeModal/UnsubscribeModal';
import { UserContext } from '../../Context/UserContext';
export default function SettingLeftSidePart() {
  const userContext = useContext(UserContext)
    const IOSSwitch = styled((props) => (
        <Switch
          focusVisibleClassName=".Mui-focusVisible"
          disableRipple
          {...props}
        />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: 2,
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#313033" : "#313033",
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#33cf4d",
            border: "6px solid #fff",
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color:
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 22,
          height: 22,
        },
        "& .MuiSwitch-track": {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 500,
          }),
        },
      }));

      let navigate = useNavigate()
    const [isShowLogOutModal , setIsShowLogOutModal] = useState(false)
    const [isShowUnsubscribeModal , setIsShowUnsubscribeModal] = useState(false)
    const [isShowDeleteAccountModal , setIsShowDeleteAccountModal] = useState(false)

    let UserInfo = JSON.parse(localStorage.getItem('userInformation'))

    const acceptLogOutModal = () =>{
      var myHeaders = new Headers();
myHeaders.append("Authorization",UserInfo[0].token);

// var formdata = new FormData();
// formdata.append("username",UserInfo[0].email );
// formdata.append("password",UserInfo[0].password);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  // body: formdata,
  redirect: 'follow'
};

fetch("http://127.0.0.1:8000/api/v1/users/logout/", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  
      setIsShowLogOutModal(false)
      userContext.setIsLogin(false)
      navigate('/',{replace:true})
    }
    const cancelLogOutModal = () =>{
      setIsShowLogOutModal(false)
    }


    const acceptDeleteModal = () =>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization",UserInfo[0].token);
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://127.0.0.1:8000/api/v1/users/delete-user/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
  
      setIsShowDeleteAccountModal(false)
      navigate('/',{replace:true})
    }
    const cancelDeleteModal = () =>{
      setIsShowDeleteAccountModal(false)
    }



    const acceptUnsubscribeModal = () =>{
      var myHeaders = new Headers();
      myHeaders.append("Authorization",UserInfo[0].token);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("http://127.0.0.1:8000/api/v1/payment/unsubscribeSubscription/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        
      
      setIsShowUnsubscribeModal(false)
    }
    const cancelUnsubscribeModal = () =>{
      setIsShowUnsubscribeModal(false)
    }
    return (
    <>
          <div className="setting-leftside">
              <span className="setting-leftside-title">Setting</span>
              <NavLink to='/Setting/upgrade' className="setting-upgrade">
                <GiUpgrade className="setting-icon" />
                <span className="upgrade-title">Upgrade</span>
              </NavLink>
              <NavLink onClick={()=>setIsShowUnsubscribeModal(true)} className="setting-Unsubscribe">
                <MdUnsubscribe className="setting-icon" />
                <span className="Unsubscribe-title">Unsubscribe</span>
              </NavLink>
              <NavLink to='/Setting/profile' className="setting-Profile">
                <FaUser className="setting-icon" />
                <span className="Profile-title">Profile</span>
              </NavLink>
              <div className="notificatin-items">
                <div>
                  <NavLink  className="setting-Notifications">
                    <IoNotificationsOutline className="setting-icon" />
                    <span className="Notifications-title">Notifications</span>
                  </NavLink>
                </div>
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    ></Stack>
                  </FormGroup>
                </div>
              </div>
              <NavLink to='/Setting/privacy' className="setting-PrivacyPolicy">
                <VerifiedUserIcon className="setting-icon" />
                <span className="PrivacyPolicy-title">Privacy Policy</span>
              </NavLink>
              <NavLink to='/Setting/terms' className="setting-TermsandConditions">
                <AssignmentIcon className="setting-icon" />
                <span className="TermsandConditions-title">
                  Terms and Conditions
                </span>
              </NavLink>
              <NavLink to='/Setting/changepassword' className="setting-ChangePassword">
                <LockIcon className="setting-icon" />
                <span className="ChangePassword-title">Change Password</span>
              </NavLink>
              <NavLink to='/Setting/feedback' className="setting-Feedback">
                <ReviewsIcon className="setting-icon" />
                <span className="Feedback-title">Feedback</span>
              </NavLink>
              <NavLink onClick={()=>setIsShowDeleteAccountModal(true)} className="setting-Deleteaccount">
                <PersonRemoveIcon className="setting-icon" />
                <span className="Deleteaccount-title">Delete account</span>
              </NavLink>
              <NavLink onClick={()=>setIsShowLogOutModal(true)} className="setting-Logout">
                <LogoutIcon className="setting-icon" />
                <span className="Logout-title">Logout</span>
              </NavLink>
            </div> 
            {isShowLogOutModal && <LogOutModal  onSubmit={acceptLogOutModal} onClose={cancelLogOutModal}/>}
      {isShowDeleteAccountModal && <DeleteAccountModal onSubmit={acceptDeleteModal} onClose={cancelDeleteModal} />}
      {isShowUnsubscribeModal && <UnsubscribeModal onSubmit={acceptUnsubscribeModal} onClose={cancelUnsubscribeModal} />}
    </>
  )
}
