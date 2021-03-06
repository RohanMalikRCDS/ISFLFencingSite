import React, { useEffect } from 'react';
import { Header } from "../header/Header";
import { setTypes } from "../season/typesSlice";
import {useDispatch} from "react-redux";

export const Home = () => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     fetch("https://api.isflfencing.com/seasons.php")
    //         .then(response => response.json())
    //         .then(data => dispatch(setTypes(data)))
    // })

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100vw", height: "100vh", backgroundColor: "#2d2d2d", color: "#f1f7ed"}}>
            <Header/>
            <h1>Home</h1>
            <br/>
            <hr style={{width: "50vw", color: "#f1f7ed"}}/>
            <h2>Welcome to ISFL Fencing!</h2>
            <hr style={{width: "50vw", color: "#f1f7ed"}}/>
            <br/>
            <p style={{margin: "2rem"}}>ISFL Fencing is an online database for reporting fencing league results. Once results are received, ISFL Fencing generates detailed statistics for teams and individual fencers. It is a replacement for the earlier BoutShout software that stopped operating a couple years ago.</p>
            <p style={{margin: "2rem"}}>ISFL Fencing is currently in beta testing, and is available only for the Independent Schools Fencing League.</p>
            <p style={{margin: "2rem"}}>Inquiries / Questions: snadol@students.hackleyschool.org and/or rohan_malik@ryecountryday.org.</p>
        </div>
    )
}