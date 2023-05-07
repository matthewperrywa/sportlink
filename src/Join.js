import React, { useState } from 'react';

export default function Join(props){
    let cardList = props.cardList;

    function updateAttendance(i, card){
        if(card.joined == false){
            card.attendance++;
            card.joined = true;
            document.getElementById(i + "E").style.background = 'black';
            document.getElementById(i + "E").style.color = 'white';
            document.getElementById(i + "F").innerText = "Leave";
        }
        else{
            card.joined = false;
            card.attendance--;
            document.getElementById(i + "E").style.background = 'white';
            document.getElementById(i + "E").style.color = 'black';
            document.getElementById(i + "F").innerText = "Join";
        }
        document.getElementById(i).innerText = "Who: " + card.skill + "\n" + "Where: " + card.location + "\n" +
        "When: " + card.date + " @ " + card.time + "\n" +
        "What: " + card.description + "\n" + "\n" +
        "Current Attendance: " + card.attendance;
    }

    return (
        <div>
            <div>
                <section>
                </section>
                <section>
                    <div className="container">
                        <br></br>
                        <br></br>
                        <h1>Join a Game</h1>
                        <br></br><br></br>
                        <div className="about">
                        <p>Find what games are best for you. Click a game to join.</p>
                        </div>
                        <br></br><br></br>
                        <br></br>
                        <br></br>
                        {/*
                        <select name="skill" id="skill" text-align="center">
                            <option value="all skill levels">All Skill Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="high school">High School</option>
                            <option value="college">College</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="semi-pro">Semi-Pro</option>
                        </select>
                        <br></br>
                        <br></br>
                        <br></br>
                        */}
                        <div className="cards">
                            {cardList.map((card, i) => (
                                <div key={i} className="card" id={card.id + "E"}>
                                    <h3>{card.title}</h3>
                                    <p id={card.id}>{"Who: " + card.skill}<br></br>
                                        {"Where: " + card.location}<br></br>
                                        {"When: " + card.date + " @ " + card.time}<br></br>
                                        {"What: " + card.description}<br></br><br></br>
                                        {"Current Attendance: " + card.attendance}</p>
                                        <button id={card.id + "F"} className="btn" onClick={() => updateAttendance(card.id, card)}>Join</button>
                                </div>
                             ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}