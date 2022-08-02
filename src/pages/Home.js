import React, {useEffect, useRef,useState} from 'react'
import "../styles/Home.css"
import {Canvas,extend, useLoader,useFrame} from "@react-three/fiber"
import House from '../Room'
import {OrbitControls,useGLTF, TrackballControls,Stage} from "@react-three/drei"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import * as THREE from 'three'
import SkillsList from '../helpers/SkillsList'
import SkillsComp from '../components/SkillsComp'
import ButtonsComp from '../components/ButtonsComp'
import Aos from 'aos';
import "aos/dist/aos.css"

import Experience from '../pages/Experience'
import BakedTexture from '../assets/baked.jpg'



function GeometryName() {
  const ref = useRef()
  useFrame((state,delta) =>  (ref.current.rotation.y += 0.0008))

  const {nodes} = useGLTF('/WORLD2.glb')
  const [baked]= useLoader(THREE.TextureLoader,[ BakedTexture])
  extend({ TextGeometry })
  return(
    <group ref={ref}  position={[0,0,0]} rotation={[0.6,-3,0]}>
      <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[1.49, 1.39, 0.25]} rotation={[1.41, -0.09, -1.59]}>
        <meshBasicMaterial map={baked} map-flipY={false}/>
      </mesh>
      <mesh geometry={nodes.Circle017.geometry}   material-color="#87CEEB" position={[-2.01, 5.3, 1.31]} rotation={[1.77, -0.01, 3.11]} />
      <mesh geometry={nodes.Circle.geometry}  material-color="#FFFF2E" position={[14.74, 5.56, -0.47]} rotation={[1.93, 0.2, -2.65]} />
      <mesh geometry={nodes.Icosphere.geometry}   material-color="#FFA500" position={[-8.42, 0.87, -5.02]} rotation={[2.57, 1.06, 0.15]} />
      <mesh geometry={nodes.Sphere008.geometry} material-color="#FF0000" position={[16.05, 0.61, -1.5]} />
      <mesh geometry={nodes.Sphere009.geometry} material-color="#00FFFF" position={[15.91, 0.58, -1.5]} rotation={[0, 0.88, 0]} />
      <mesh geometry={nodes.Sphere010.geometry} material-color="#FFA500" position={[15.91, 0.68, -0.87]} rotation={[0, 1.05, 0]} />
      <mesh geometry={nodes.Sphere011.geometry} material-color="#FFC000" position={[16.76, 0.49, -1.5]} rotation={[0.05, 0.05, -0.1]} />
    </group>
  );

}

function Home() {
  useEffect(() =>{
    Aos.init({duration:1000 })
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
          <Canvas flat dpr={[1, 2]} camera={{ fov: 25,  position: [0, 20, 10] } }>
            <TrackballControls enabled={false} />
            <Stage preset="rembrandt" intensity={0} environment="city">
            <GeometryName />
            </Stage>
          </Canvas>
        </div>
      </div>

      <div  className='skillsTitle'>
        <div data-aos="fade-left"className='skill_h1'><h1>SKILLS</h1></div>
        <ButtonsComp button ={buttons} filter={filter}/>
        <SkillsComp skillsItem={skillsItem}/>
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
                </group>
             </Canvas>
            </div>
          </div>
        </div>
     </div>
  )
}

export default Home