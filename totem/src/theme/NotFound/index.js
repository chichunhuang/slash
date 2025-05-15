import React from 'react';
import NotFound from '@theme-original/NotFound';
import Translate from '@docusaurus/Translate';
import { FaHome, FaSearch } from 'react-icons/fa'; 
import { CgMenuGridO } from "react-icons/cg";

import notFoundImage from '@site/static/img/70_70.jpg'; 

export default function NotFoundWrapper(props) {
  return (
    <>
      {/* <NotFound {...props} /> */}

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <img src={notFoundImage} alt="Page Not Found Illustration" style={{ maxWidth: '300px', marginBottom: '1rem' }} />
        <h1>
          <Translate
            id="myCustom.notFound.title"
            description="Custom 404 page title">
            Oops! 找不到這個頁面了
          </Translate>
        </h1>
        <p>
          <Translate
            id="myCustom.notFound.description"
            description="Custom 404 page description">
            Insect-Totem 最近調整網頁位置，部分連結有所異動，造成不便敬請見諒!
          </Translate>
        </p>
        <p>
          <Translate
            id="myCustom.notFound.suggestions"
            description="Custom 404 page suggestions">
            你可以嘗試：
          </Translate>
        </p>
        <ul  class="list-group">
          <li class="list-group-item">
            <FaHome style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionHome"
              description="Link to homepage">
              回到首頁
            </Translate>
            <a href="/">首頁</a>
          </li>
          <li class="list-group-item">
            <CgMenuGridO style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionMenu"
              description="Link to menu page">
              或至目錄
            </Translate>
            <a href="/docs/docs-map">目錄</a>
          </li>
        </ul>
        {/* 你可以加入更多自訂內容 */}
      </div>
    </>
  );
}