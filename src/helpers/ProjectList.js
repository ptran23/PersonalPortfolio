import proof1 from '../assets/proof1.png'
import proof2 from '../assets/ComingSoon.jpg'

import {SiMongodb}  from "react-icons/si";
import {SiCss3}  from "react-icons/si";
import {SiHtml5}  from "react-icons/si";
import {FaNodeJs}  from "react-icons/fa";
import {SiHandlebarsdotjs} from "react-icons/si";
import{FaReact} from "react-icons/fa"
import{SiWebgl} from "react-icons/si";

export const ProjectList = [
    {
        id:1,
        name:"Food App",
        image: proof1,
        skills: "HandleBars,NodeJS,MongoDb,HTML,CSS",
        mongoSVG:<SiMongodb/> ,
        cssSVG:<SiCss3/> ,
        htmlSVG:<SiHtml5/> ,
        nodeSVG:<FaNodeJs/> ,
        handlebars:<SiHandlebarsdotjs />,
        detail: " The purpose of this project is to recreate a food Application and hosting Server-Side Web applications using a cloud based solution (Heroku)." ,
        feature: "\n Using Rest API to submit data to database once form is validated. " +
        "\n Users would then be re-directed to the dashboard page while also receiving an email for registering via Twilio." +
        "\n All passwords will be hashed using bcryptJS as well as ensuring the entire website renders well on different devices. ",
        code:"https://github.com/ptran23/FoodApp"
        
    },
    {   id:2,
        name:"Full Stack App",
        image: proof2,
        mongoSVG:<SiMongodb/> ,
        cssSVG:<SiCss3/> ,
        nodeSVG:<FaNodeJs/> ,
        reactSVG: <FaReact/>,
        webglSVG:<SiWebgl/>,
        skills: "React, MongoDB, Express, NodeJS, R3F",
        detail: "A full stack booking service project coming soon!",
        feature: " Data inputted by the clients will be validated both front and back-end. " +
        "Booking and payment systems will also be implemented to allow potential clients to self-book and pay inadvance . " + 
        "A seperate unique login system will be created for the Business owner to adjust the days of when service is available.",
    },

]