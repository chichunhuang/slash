import {default as Sum, Square} from "@site/src/components/Add";

import {Talk} from "@site/src/components/SayHelloComponent";


<h1>
需搭配 src/components/Add.js 
</h1>
<h1>
需搭配 src/components/SayHelloComponent.js
</h1>

<h1>
import pure js function : 
{Sum(1, 10)}, {Square(2)}
</h1>


<!-- 下面的 JSX component 必須被一個 React Component 包覆, 不然會被當成單純的文字 -->

<h1>
JSX component : 
     {Talk('Hello World !!', 'red')}
</h1>