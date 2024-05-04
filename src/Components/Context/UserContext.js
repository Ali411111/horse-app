import { createContext,useState } from "react";
export const UserContext = createContext()

const UserContextProvider = ({children})=>{
    const [userToken , setUserToken] = useState()
   const [user , setUser] = useState([])
   const [isLogin,setIsLogin] = useState(false)
   const [horseId , setHorseId] = useState('')
   const [horseDisciplineId,setHorseDisciplineId] = useState([])
  
    return (
        <UserContext.Provider value={{userToken,setUserToken,user,setUser,isLogin,setIsLogin,horseId,setHorseId,horseDisciplineId,setHorseDisciplineId}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
