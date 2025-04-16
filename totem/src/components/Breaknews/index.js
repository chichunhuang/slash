/**
 * Copyright (c) insect-totem.net
 *
 * This source code is licensed 
 */
 
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import totemStyles from "@site/src/pages/totem.module.css";

function Breaknews({h2, items}){
 return (<div className={clsx( totemStyles.rightPanel)} >
     <h2>{h2}</h2>
     <ul>
         {
             items.map((msg) =>
                 <li className={clsx(totemStyles.objectItem)} key={msg.key}> <Link to={msg.url}>{msg.content}</Link> </li>
             )}
     </ul>
 </div>
    );
}

export default Breaknews;