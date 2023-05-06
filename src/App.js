import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import About from "./About"
import Host from "./Host"
import Join from "./Join"
import NavBar from "./NavBar"

export default function App(){
    let cardList = [
        {
            title: 'Beginner Tennis Tournament',
            skill: 'Beginner',
            location: 'Lewis Creek Park',
            time: "9:00 AM",
            date: "May 15",
            description: 'Outdoor tennis tournament. $10 fee. Winner take home $50.',
            attendance: 27,
            id: 1,
            joined: false
        },
        {
            title: 'Expert Tennis Tournament',
            skill: 'Beginner',
            location: 'Lewis Creek Park',
            time: "11:00 AM",
            date: "May 15",
            description: 'Outdoor tennis tournament. $100 fee. Winner take home $500.',
            attendance: 12,
            id: 2,
            joined: false
        },
        {
            title: 'Weekly Soccer',
            skill: 'Intermediate',
            location: 'Random Park',
            time: "3:00 PM",
            date: "Saturdays",
            description: 'Join us for soccer each Saturday. No fee or equipment necessary.',
            attendance: 8,
            id: 3,
            joined: false
        },
        {
            title: 'Beginner Tennis Tournament 2',
            skill: 'Beginner',
            location: 'Lewis Creek Park',
            time: "9:00 AM",
            date: "May 15",
            description: 'Outdoor tennis tournament. $10 fee. Winner take home $50.',
            attendance: 27,
            id: 4,
            joined: false
        },
        {
            title: 'Expert Tennis Tournament 2',
            skill: 'Beginner',
            location: 'Lewis Creek Park',
            time: "11:00 AM",
            date: "May 15",
            description: 'Outdoor tennis tournament. $100 fee. Winner take home $500.',
            attendance: 12,
            id: 5,
            joined: false
        },
        {
            title: 'Weekly Soccer 2',
            skill: 'Intermediate',
            location: 'Random Park',
            time: "3:00 PM",
            date: "Saturdays",
            description: 'Join us for soccer each Saturday. No fee or equipment necessary.',
            attendance: 8,
            id: 6,
            joined: false
        }
    ];
    return(
        <div>
            <Join cardList={cardList}/>
        </div>
    )
}