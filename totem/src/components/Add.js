import React from 'react';

// 完整範例需搭配: docs/template/customized_JSX_component.md 

function Sum(a, b) {
	return a+b;
}


function Square(a) {
	return a*a;
}


function Talk(message){
    
    return (<span>{message}</span>);
}

export {Sum as default, Square, Talk};
// import {default as Sum, Square} from "@site/src/components/Add";


//export {Sum, Square};
// import {Sum, Square} from "@site/src/components/Add";
