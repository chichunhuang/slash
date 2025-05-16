import NotFound from '@theme-original/NotFound';
import Translate from '@docusaurus/Translate';
import { FaHome, FaSearch } from 'react-icons/fa'; 
import { CgMenuGridO } from "react-icons/cg";
import { SlActionUndo } from "react-icons/sl";

import notFoundImage from '@site/static/img/70_70.jpg'; 

import React, { useEffect, useState } from "react";

export default function NotFoundWrapper(props) {
const [countdown, setCountdown] = useState(15);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prevCountdown) =>
                prevCountdown > 0 ? prevCountdown - 1 : 0
            );
        }, 1000);

        if (countdown === 0) {
            window.location.href = "/docs/docs-map";
        }

        return () => clearInterval(timer);
    }, [countdown]);

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
            Insect-Totem 最近調整網頁結構，部分連結有所異動，而您可能選到過時的連結，造成不便敬請見諒!
          </Translate>
        </p>
        <p>
          <Translate
            id="myCustom.notFound.suggestions"
            description="Custom 404 page suggestions">
            你可以嘗試： 
          </Translate>
        </p>
        <p>
           <FaHome style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionHome"
              description="Link to homepage">
              回到首頁
            </Translate>
            <a href="/">首頁</a>
        </p>
        <p>
          <CgMenuGridO style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionMenu"
              description="Link to menu page">
              或至目錄
            </Translate>
            <a href="/docs/docs-map">目錄</a>
        </p>
        <p>
          <SlActionUndo style={{ marginRight: '0.5rem' }} />
            若未選擇系統將在 {countdown} 秒後自動返回目錄頁...
        </p>
        {/* more customized... */}
      </div>
    </>
  );
}