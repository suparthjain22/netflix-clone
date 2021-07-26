import React, { useEffect, useState } from 'react';
import { use } from 'react-router-dom';
import "./Nav.css";
import db from './firebase';
import {useSelector} from "react-redux";
import {selectUser} from "./features/counter/userSlice";
import { useHistory } from 'react-router';
function Nav() {
    const [subscription,setSubscription] = useState(null);
    const user = useSelector(selectUser);
    useEffect(()=>{
        db.collection("customers")
        .doc(user.uid)
        .collection("subscriptions")
        .get()
        .then((querySnapshot) =>{
            querySnapshot.forEach(async (subscription) =>{
                setSubscription({
                    role:subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                });
            });
        });
    },[user.uid]);

    const [show,handleShow] = useState(false);
    const history = useHistory();
    const transitionNavBar = () =>{
        if(window.scrollY>100){
            handleShow(true);
        } else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar)
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
            <img onClick={subscription ? ()=>history.push("/") : ()=>history.push("/profile")} className="nav_logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                 alt=""/>
            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                 alt="" onClick={()=>history.push("/profile")}/>
            </div>
            
        </div>
    )
}

export default Nav
