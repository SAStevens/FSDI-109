import "./about.css";
import {useState} from 'react';


function About() {

    const [visible, setVisible] = useState(false);
    const [phoneVisible, setPhoneVisible] = useState(false);

    function getEmail() {
        return visible ? 'testing@Email.com' : '';
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
        <br></br>
        <h5>
            <p>
                I'm Wade Kincade and this is my story... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor leo vulputate nunc tempor ornare.     Nullam id est et massa sagittis bibendum. Aenean mollis egestas sapien. Donec pretium aliquet consequat.    Vivamus tincidunt facilisis nulla, ut vulputate justo consectetur eget. Nunc sodales aliquam enim, eu aliquam  nunc pharetra in. Nulla ac ultrices lorem. In tristique sem sem. 
            </p>
            <p>
                Aut dolores animi ea libero asperiores eum perferendis omnis est odio quia et consequatur dolorem? Cum aliquam  rerum sed galisum esse id quaerat rerum. Sit dignissimos eligendi et fuga mollitia ut eligendi Quis non ipsum    ducimus. 
            </p>
            <p>
                Qui laborum amet ut magnam delectus aut repellat quisquam ut perspiciatis odio rem maxime veritatis aut     laudantium incidunt quo voluptatem autem. Aut consequatur voluptates sit delectus adipisci et tempora cumque    est tempore corrupti in distinctio alias sit unde totam. Est excepturi suscipit et amet dolores sit provident  quod qui alias consectetur 33 internos sint sed quae sunt a aliquid ipsum. 
            </p>

       </h5>

        <h6>{getEmail()}</h6>
        <button  className='btn btn-sm btn-secondary' onClick={toggleEmail}>Click here to see my Email</button>

        <hr/>

        <div className="phoneNumber">Type the code "bingo" to see my phone number</div>

        <input onChange={validateCode} placeholder='code'></input>

        <h6 className='mt-3'>{getNumber()}</h6>

    </div>
    );
}


export default About; 