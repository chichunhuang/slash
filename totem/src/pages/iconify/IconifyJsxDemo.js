import React from 'react';
import { Icon } from "@iconify/react";
import { Gi3dGlasses } from "react-icons/gi";

export default function IconifyJsxDemo() {
    const style = { color: "green", fontSize: "1.5em" }
    
  return (
    <div className="container">
    <h1>Insect Totem: Iconify Exercise</h1>
    
    <h2>Packages:@iconify/react</h2> 
    <Icon icon="mdi:github" height="55" />
    <Icon icon="flag:tw-4x3" height="55" />    
    <Icon icon="logos:figma" height="55" />
    <Icon icon="mdi-light:home" height="55" />  
    <hr/>
    
    <h1>Insect Totem: React Icons Exercise</h1>
    <h2>Packages:react-icons</h2> 
    <Gi3dGlasses size={30} color="#FB2576" />  
    <Gi3dGlasses style={{ color: 'blue', fontSize: '500px' }} />  
    <Gi3dGlasses style={style} />  

    </div>
  );
}