import React from 'react'
import { useLocation, useNavigate  } from "react-router-dom";

const About = () => {
    const location = useLocation();
    const navigate  = useNavigate ();

    return (
        <div>
            <h1>Hello {location.pathname.replace("/", '')} page</h1>
            {
                location.pathname === '/about/thapa' ? 
                    <p>Hii, Thapa Good to see you again</p> : 
                    <p>Login to see your files</p>
            }

            <button className="btn btn-primary"
            onClick={() => navigate.push('/index')}>
                Home Page
            </button>
           
        </div>
    )
}

export default About