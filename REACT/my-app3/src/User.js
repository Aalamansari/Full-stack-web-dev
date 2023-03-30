import React,{useEffect,useState} from "react";

function User(){
    const [userData,setUserdata] = useState({})

    useEffect=>{
        fetch('user.json').then(data=>{
            return data.json()
        }).then(data=>{
            setUserdata(data[username])
        },[username])
    }
}

export default User