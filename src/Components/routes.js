import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./LandingPage/AboutUs/AboutUs";
import FAQ from "./LandingPage/FAQ/FAQ";
import ContactUs from "./LandingPage/ContactUs/ContactUs";
import SingUpLogin from "./LandingPage/SingUpLogin/SingUpLogin";
import Login from "./LandingPage/Login/Login";
import Home from './../Components/Home/Home'
import Buyer from "./Home/Buyer/Buyer";
import Seller from "./Home/Seller/Seller";
import Messages from './Messages/Messages'
import MyFavoriteHourse from './MyFavoriteHourse/MyFavoriteHourse'
import MyHourses from './MyHourses/MyHourses'
import Setting from './Setting/Setting'
import SettingUpgrade from "./Setting/SettingUpgrade/SettingUpgrade";
import SettingProfile from './Setting/SettingProfile/SettingProfile'
import SettingPrivacy from './Setting/SettingPrivacy/SettingPrivacy'
import SettingTerms from './Setting/SettingTerms/SettingTerms'
import SettingFeedback from './Setting/SettingFeedback/SettingFeedback'
import SettingChangePassword from './Setting/SettingChangePassword/SettingChangePassword'
import Notifications from './Notifications/Notifications'
import HorseDetails from "./Home/HorseDetails/HorseDetails";
import MatchHorse from "./Home/MatchHorse/MatchHorse";
let routes = [
    {path:'/',element:<LandingPage/>},
    // {path:'/about us',element:<AboutUs/>},
    // {path:'/FAQ',element:<FAQ/>},
    // {path:'/contact us',element:<ContactUs/>},
    // {path:'/sign up',element:<SingUpLogin/>},
    // {path:'/login',element:<Login/>},
    {path:'/home',element:<Home/>},
    {path:'/home/buyer',element:<Buyer/>},
    {path:'/home/seller',element:<Seller/>},
    {path:'/Messages',element:<Messages/>},
    {path:'/notifications',element:<Notifications/>},
    {path:'/MyFavoriteHourse',element:<MyFavoriteHourse/>},
    {path:'/MyHorses',element:<MyHourses/>},
    {path:'/Setting',element:<Setting/>},
    {path:'/Setting/upgrade',element:<SettingUpgrade/>},
    {path:'/Setting/profile',element:<SettingProfile/>},
    {path:'/Setting/privacy',element:<SettingPrivacy/>},
    {path:'/Setting/terms',element:<SettingTerms/>},
    {path:'/Setting/feedback',element:<SettingFeedback/>},
    {path:'/Setting/changepassword',element:<SettingChangePassword/>},
    {path:'/home/horsedetails',element:<HorseDetails/>},
    {path:'/home/matchhorse',element:<MatchHorse/>},
    
]

export default routes