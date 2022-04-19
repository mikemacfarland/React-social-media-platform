import {useState,useEffect} from 'react'

// must be a react function (use uppercase first letter)
const Users = ()=>{
    
    const [userData,setUserData] = useState([])

    const getUserData = ()=>{fetch('https://randomuser.me/api/?results=5')
                        .then(res => res.json())
                        .then(data => setUserData(data.results))
                        .catch(err => console.log(err))
    }

    // use this getUserData function on render.  ((),[])
    useEffect(()=>{
        getUserData()
    },[])

    return(userData)
}

// THIS HOOK CAN ONLY BE USED IN A FUNCTIONAL COMPONENT TO RETURN DATA

export default Users