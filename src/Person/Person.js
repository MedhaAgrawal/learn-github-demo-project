import React, { useState } from 'react';
import './Person.css';
import Radium from 'radium';
//import styled from 'styled-components';

const Person = (props) => {
    //useState Hooks
    const [personHobby, setPersonHobby] = useState({
        hobbies: ["Painting", "Singing"]
    });

    const [changedHobby, setChangedHobby] = useState("");

    const updateHobbyHandler = (newHobby) => {
        if (changedHobby !== '') {
            setPersonHobby({
                hobbies: [newHobby, "Singing"]
            });
        }
    };

    const changeHobbyHandler = (event) => {
        setChangedHobby(event.target.value);
    };

    const personStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    /*const StylePersonDiv = styled.div`
        border: 1px solid #eee;
        width: 40%;
        margin: 16px auto;
        padding: 16px;
        box-shadow: 0 2px 3px #ccc;
        text-align: center;
    
        .PersonName:hover {
            color: red;
        }

        @media (min-width: 500px) {
            width: 450px;
        }
    `;*/

    return (
        <div className="Person" style={personStyle}>
        {/* <StylePersonDiv> */}
            <p className="PersonName" onClick={props.onclick}>Hi {props.name}</p>
            <p>I'm guessing your age to be {props.age} yrs...</p>
            <p className={props.classes}>My Hobby is {personHobby.hobbies[0]}</p>
            <input text="text" onChange={props.changed} value={props.name}></input><br /><br />
            <input onChange={(event) => changeHobbyHandler(event)} text="text" placeholder={personHobby.hobbies[0]}></input><br /><br />
            <button onClick={() => updateHobbyHandler(changedHobby)}>Change hobby</button>
        {/* </StylePersonDiv> */}
        </div>
    );
};

export default Radium(Person);
//export default Person;