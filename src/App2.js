import React, { useEffect, useState } from "react";
import Join from "./Join"

export default function App2(){

    let cardList = [
        {
            title: 'Steve Harvey’s Basketball Tournament',
            skill: 'Semi-Pro',
            location: '7839 Cedar Heights Drive',
            time: "9:00 AM",
            date: "May 15",
            description: 'Indoor basketball tournament. $100 fee. Winner take home $500.',
            attendance: 58,
            id: 1,
            joined: false
        },
        {
            title: 'Greenwood Park Pickup Game',
            skill: 'Beginner',
            location: '567 Elm Street',
            time: "11:00 AM",
            date: "May 19",
            description: 'Outdoor court at the park. Please bring a reversible jersey and all players have a +1 option.',
            attendance: 12,
            id: 2,
            joined: false
        },
        {
            title: 'Weekly Basketball at Walter White’s House',
            skill: 'Intermediate',
            location: '308 Negra Arroya Lane',
            time: "3:00 PM",
            date: "Saturdays",
            description: 'Join us for basketball each Saturday. No fee or equipment necessary.',
            attendance: 8,
            id: 3,
            joined: false
        },
{
            title: 'UWB League',
            skill: 'College',
            location: '18115 Campus Way NE',
            time: "6:00 PM",
            date: "Wednesdays",
            description: 'Recreational basketball at UW Bothell.',
            attendance: 18,
            id: 4,
            joined: false
        },
        {
            title: 'Bothell High School League',
            skill: 'High School',
            location: '9130 NE 180th St',
            time: "4:00 PM",
            date: "Tuesdays",
            description: 'Competitive league.',
            attendance: 20,
            id: 5,
            joined: false
        },
        {
            title: 'Weekly Soccer 2',
            skill: 'Intermediate',
            location: 'Riverside Park',
            time: "1:30 PM",
            date: "May 21",
            description: 'Pickup basketball. Outdoors..',
            attendance: 7,
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