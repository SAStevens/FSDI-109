import "./about.css";
import {useState} from 'react';


function About() {

    const [visible, setVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);

    function getEmail() {
        return visible ? 'testing@getEmail.com' : '';
    }

    function toggleEmail() {
        setVisible(!visible);
    }

    function validateCode(e) {
        const text = e.target.value
        if (text.toLowerCase() === 'bingo') {
            setPhoneVisible(true);
        }
        else {
            setPhoneVisible(false);
        }
    }

    function getNumber() {
        return phoneVisible ? '(222)333-4444' : '';
    }

    return (
    <div className="about">
        <h2>About Me</h2>
        <h4>I'm Scott Stevens</h4>
        <h6>{getEmail()}</h6>
        <button  className='btn btn-sm btn-dark' onClick={toggleEmail}>Click to see my Email</button>

        <hr />

        <p>Type the code to see my phone number</p>
        <input onChange={validateCode} placeholder='code'></input>

        <h6 className='mt-3'>{getNumber()}</h6>

    </div>
    );
}


export default About; 