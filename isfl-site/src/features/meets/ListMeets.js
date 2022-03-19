import React, { useEffect } from 'react'
import { useNavigate } from "react-router";
import { Header } from "../header/Header";

export const ListMeets = () => {
    const meets = [{id: "0000000000", date: "02-26-2022", homeTeam: "RCDS", awayTeam: "Hackley", homeScore: "0", awayScore: "9"}]

    const navigate = useNavigate()

    useEffect(() => {
        // fetch meet data from API
    })

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Header />
            <h1>Meets</h1>
            <hr style={{width: "98%"}}/>
            <table style={{width: "60%"}}>
                <tr style={{fontSize: "1.7rem"}}>
                    <th>Date</th>
                    <th>Home Team</th>
                    <th>Away Team</th>
                    <th>Score</th>
                </tr>
                {meets.map(meet => (
                    <tr style={{fontSize: "1.5rem"}} onClick={() => navigate("/meetDetail", {state: {id: meet.id}})}>
                        <td>{meet.date}</td>
                        <td>{meet.homeTeam}</td>
                        <td>{meet.awayTeam}</td>
                        <td>{meet.homeScore + "–" + meet.awayScore}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}