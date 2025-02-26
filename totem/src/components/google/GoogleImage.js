import React from 'react';

//ref https://stackoverflow.com/questions/52749153/react-pass-parameters-by-names-when-calling-a-function
//use dict parameters
function GoogleImage(fileId, fileName, options = {}  ){
    
  //Set default values
  let frameWidth = options.width ;
  let frameHeight = options.height;
  let hidden = options.hidden?true:false;
  let degree = options.degree?options.degree:0;
    
  let googleFileId = "https://drive.google.com/file/d/" + fileId + "/preview";
  let staticFileName = "/gd/waiting/"+fileName+"";
    
 return <span>
    <iframe src={googleFileId} width={frameWidth} height={frameHeight} allow="autoplay" scrolling="false" style={{ transform: 'rotate('+degree +'deg)' }} ></iframe><br/>
    <img  src={staticFileName} hidden={hidden}
    style={{ transform: 'rotate('+degree +'deg)' }} 
    />
  </span>
    }

export {GoogleImage};

// *.md 
//import {GoogleImage} from "@site/src/components/google/GoogleImage";
//
//<span>
// {GoogleImage('1dwZEh-UW0Eh_JhT3vlKrl9oxPdWT3tzB', '100-100.jpg', {hidden:true, hidden:false})}
//</span>




// 完整範例需搭配: docs/template/customized_JSX_component.md 
// 下面是 JS Component 部分
//function Talk(children, color){
// return     <span
//        style={{
//          backgroundColor: color,
//          borderRadius: '20px',
//          color: '#fff',
//          padding: '10px',
//          cursor: 'pointer',
//        }}
//        onClick={() => {
//          alert(`You clicked the color ${color} with label ${children}`);
//        }}>
//        
//    {children}
//  </span>
//}
//
//export {Talk};


// 下面是 MD 部分
// At *.md file
// import {Talk} from "@site/src/components/SayHelloComponent";
// 
// 
// 注意: md 範例中的 <span> 不能省
// 
//<span>
//{Talk('Hello World')}
//</span>



