import React, {useEffect, useRef,useState} from 'react'
import "../styles/Home.css"
import {Canvas,extend, useLoader,useFrame} from "@react-three/fiber"

import House from '../Room'
import {OrbitControls,useGLTF, TrackballControls,Stage, useAnimations} from "@react-three/drei"
import * as THREE from 'three'
import SkillsList from '../helpers/SkillsList'
import SkillsComp from '../components/SkillsComp'
import ButtonsComp from '../components/ButtonsComp'
import Aos from 'aos';
import "aos/dist/aos.css"

import Experience from '../pages/Experience'
import BakedTexture from '../assets/bottom.jpg'
import TopBakedTexture from '../assets/top.jpg'
import TreeBakedTexture from '../assets/trees.jpg'
import url from '../assets/spyFamily.mp4'


function World() {
  const ref = useRef()
  useFrame((state,delta) =>  (ref.current.rotation.y += 0.0008))

  const {nodes} = useGLTF('/newWorld2.glb')
  const [baked,topBaked,treeBaked]= useLoader(THREE.TextureLoader,[ BakedTexture,TopBakedTexture,TreeBakedTexture])
  
  extend({ World })
  return(
    <group ref={ref}  position={[0,0,0]} rotation={[0.2,-3,0]}>
      <mesh  name="Gem" geometry={nodes.Gem.geometry} material={nodes.Gem.material} position={[-14.26, -2.94, -16.76]}>
      <meshBasicMaterial map={baked} map-flipY={false}/>
      </mesh>
      <mesh  name="bottom" geometry={nodes.bottom.geometry} material={nodes.bottom.material} position={[8.65, 4.86, 7.38]} >
      <meshBasicMaterial map={baked} map-flipY={false}/>
      </mesh>
      <mesh name="MushroomDoor" geometry={nodes.MushroomDoor.geometry} material={nodes.MushroomDoor.material} position={[-11.85, 7.99, -4.34]}>
      <meshBasicMaterial map={topBaked} map-flipY={false}/>
      </mesh>
      <mesh name="trees" geometry={nodes.trees.geometry} material={nodes.trees.material} position={[-1.19, 5.9, -11.45]} rotation={[Math.PI, -0.04, Math.PI]}>
      <meshBasicMaterial map={treeBaked} map-flipY={false}/>
      </mesh>
      <mesh name="PacMan_Emi" geometry={nodes.PacMan_Emi.geometry} material-color="#FFFF2E"  position={[6.47, -13.55, -17.8]}/>
      <mesh name="pacManGhost_emi" geometry={nodes.pacManGhost_emi.geometry} material-color="#FF69B4" position={[2.05, 5.45, -2.39]} />
      <mesh name="pacManGhost1_Emi" geometry={nodes.pacManGhost1_Emi.geometry} material-color="#DC143C" position={[15.09, 7.67, -2.86]} />
      <mesh name="pacManGhost4_Emi" geometry={nodes.pacManGhost4_Emi.geometry} material-color="#FF6700" position={[7.11, 16.25, 4.56]} />
      <mesh name="GameBoyScreen" geometry={nodes.GameBoyScreen.geometry}  material-color="#FFFF2E" position={[33.75, 1.5, 15.92]}/>
      <mesh name="sword003" geometry={nodes.sword003.geometry} material-color="#39FFFF" position={[1.35, 6.95, 2.72]} />
    </group>
  );
}
// TV panel 
const TV = () => {
  const {nodes} = useGLTF("room-transformed.glb");
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = url;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline=true;
    vid.play();
    return vid;
  });

  return (
    <group >
      <mesh geometry={nodes.tvPanel.geometry}  rotation = {[0,-7.86,0]} position={[1.79, 2.12, -0.14]} >
        <planeGeometry args={[1.84, 1.13]} />
        <meshStandardMaterial  emissive={"white"} side={THREE.DoubleSide}>
          <videoTexture attach="map" args={[video]} />
          <videoTexture attach="emissiveMap" args={[video]} />
        </meshStandardMaterial>
      </mesh>
    </group>
  );
};

//AOS init
function Home() {
  useEffect(() =>{
    Aos.init({duration:1000,once: true })
  },[])
  

const allCategories = ['All',...new Set(SkillsList.map(SkillsList => SkillsList.category))]
  //importing skills list to be used
  const [skillsItem,setSkills] = useState(SkillsList);
  //Set will allow unique value , therefore no new data 
  const [buttons] = useState(allCategories)
  // filter Button
  const filter = (button) => {
    if(button === 'All'){
      setSkills(SkillsList);
      return;
    }
    const filteredData = SkillsList.filter(skillsItem => skillsItem.category === button)
    setSkills(filteredData)
  }

 
  return (
    
    <div className='home'>

      <div className ='about'>
        <div className='nameContainer'>
           <span className='text1'>Hi, Im Peter</span>
           <span className='text2'>Developer</span>
        </div>

        <div data-aos="fade-up" className='textCanvas'>
          
          <Canvas flat dpr={window.devicePixelRatio} camera={{ fov: 30,  position: [0, 20, 10] } } >
            <TrackballControls enabled={false}/>
            <Stage preset="rembrandt" intensity={0.5} environment="city">
            <group>
            <World/>
            </group>
            </Stage>
          </Canvas>
        </div>
      </div>

      <div  className='skillsTitle'>
       
        <div data-aos="fade-left"><h1>SKILLS</h1></div>
            <ButtonsComp button ={buttons} filter={filter}/>
            <div className='list-container'>
            <SkillsComp skillsItem={skillsItem}/>
            </div>
      </div>

      
      <div className='Experience' >
        <h1>EXPERIENCE</h1>
        <Experience/>
      </div>

      <div className='Canvas'>
          <div data-aos="fade-left" className='Canvas_About_Text'>
            <h1>LEARNING, APPLYING And ADAPTING </h1>
            <p>Get to know more about me through the virtual room </p>
          </div>

          <div className='Circle'>
            <div  className='Canvas_Model'>
              <Canvas flat dpr={[1, 2]} camera={{ fov: 50, position: [-30, 20, 40] }} >
                <OrbitControls enableZoom={true} maxDistance ={11} maxPolarAngle = {Math.PI * 0.45} minPolarAngle = {Math.PI * 0.45}/>
                <ambientLight intensity={0.4}/>
                <spotLight intensity={0.8} position={[300, 300, 500]} />
                <group position-y={-2}  dispose={null}>
                  <House/>
                  <TV/>
                </group>
             </Canvas>
            </div>
          </div>
        </div>
     </div>
  )
}

export default Home