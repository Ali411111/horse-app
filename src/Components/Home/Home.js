import React,{useEffect} from 'react'
// import './Home.css'
import NavbarHome from './NavbarHome/NavbarHome'
import TopBody from './TopBody/TopBody'
import RecentlyAdd from './RecentlyAdd/RecentlyAdd'
import TopAdds from './TopAdds/TopAdds'
import Footer from './Footer/Footer'
import TrendingAdds from './TrendingAdds/TrendingAdds'
export default function Home() {
  
     var myHeaders = new Headers();
     myHeaders.append("Authorization", "Token f94d0e3ae879aed2e6fff9a8f301e876d85b7a2a");
     
     var requestOptions = {
       method: 'GET',
       headers: myHeaders,
       redirect: 'follow'
     };

     useEffect(()=>{
          fetch("http://127.0.0.1:8000/api/v1/horses/", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result.results))
         },[]) 
          
     return (
   <>
        <NavbarHome/>
   <div className='home'>
        <TopBody/>
        <RecentlyAdd/>
        <TopAdds/>
        <TrendingAdds/>
        <Footer/>
    </div>
   </>
  )
}
