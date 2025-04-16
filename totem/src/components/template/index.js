/**
 * Copyright (c) insect-totem.net
 *
 * This source code is licensed 
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import totemStyles from "@site/src/pages/totem.module.css";
import styles from "./styles.module.css";

function Breaknews(props){
 return (<div className={clsx( totemStyles.rightPanel)} >
    <h2>最新異動 : {props.h2}</h2>
      註: 使用方 應該會出現 &lt;Breaknews h2='最新異動'/&gt; h2 變數與之匹配 
      <ul className={clsx( totemStyles.objectList)}>
        <li className={clsx( totemStyles.objectItem)}><Link to="/docs/docs-map">ccccJava SHA 雜湊 - 以 Java SHA 進行資料雜湊</Link></li>
        <li className={clsx( totemStyles.objectItem)}>PosgreSQL copy from CSV - 自 CSV 檔匯入資料</li>
        <li className={clsx( totemStyles.objectItem)}>Log4j EmailAppender Configuration - 當log4j looger紀錄指定等級的訊息時，發信通知特定人員</li>
        <li className={clsx( totemStyles.objectItem)}>Notion Sprint - Notion Sprint and Task 工作管理</li>
      </ul>
    </div>
    );
}

export default Breaknews;