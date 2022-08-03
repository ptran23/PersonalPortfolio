
import {SiHtml5}  from "react-icons/si";
import {FaReact}  from "react-icons/fa";
import {SiCss3}  from "react-icons/si";
import {SiJavascript}  from "react-icons/si";
import {SiJava}  from "react-icons/si";
import {SiMysql}  from "react-icons/si";
import {SiMongodb}  from "react-icons/si";
import {FaNodeJs}  from "react-icons/fa";

const skillsList=  [
    {
        id :1,    
        name:"ReactJS",
        category:"Front-End",
        image: <FaReact/>,
    },
    {   
        id:2,
        name:"CSS",
        category:"Front-End",
        image: <SiCss3/>,
    },
    {
        id :3,    
        name:"HTML",
        category:"Front-End",
        image: <SiHtml5/>,
    },
    {   
        id:5,
        name:"Javascript",
        category:"Languages",
        image: <SiJavascript/>,
    },

    {   
        id:8,
        name:"Java",
        category:"Languages",
        image: <SiJava/>,
    },
    {   
        id:9,
        name:"SQL",
        category:"Back-End",
        image: <SiMysql/>,
    },
    {   
        id:10,
        name:"MongoDB",
        category:"Back-End",
        image: <SiMongodb/>,
    },

    {   
        id:12,
        name:"NodeJS",
        category:"Back-End",
        image: <FaNodeJs/>,
    },

];
export default skillsList