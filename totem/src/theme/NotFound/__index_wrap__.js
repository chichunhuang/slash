import React from 'react';
import NotFound from '@theme-original/NotFound';
import Translate from '@docusaurus/Translate';
import { FaHome, FaSearch } from 'react-icons/fa'; // 引入 Icon
import { Gi3dGlasses } from "react-icons/gi";
import notFoundImage from '@site/static/img/70_70.jpg'; // 引入圖片

export default function NotFoundWrapper(props) {
  return (
    <>
      {/* 你可以選擇在這裡保留或不保留原始的 NotFound 元件 */}
      {/* <NotFound {...props} /> */}

      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <img src={notFoundImage} alt="Page Not Found Illustration" style={{ maxWidth: '300px', marginBottom: '1rem' }} /><Gi3dGlasses/>
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
            你可能輸入了錯誤的網址，或是這個頁面已經不存在。
          </Translate>
        </p>
        <p>
          <Translate
            id="myCustom.notFound.suggestions"
            description="Custom 404 page suggestions">
            你可以嘗試：
          </Translate>
        </p>
        <ul>
          <li>
            <FaHome style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionHome"
              description="Link to homepage">
              回到首頁
            </Translate>
            <a href="/">首頁</a>
          </li>
          <li>
            <FaSearch style={{ marginRight: '0.5rem' }} />
            <Translate
              id="myCustom.notFound.suggestionSearch"
              description="Link to search page">
              使用站內搜尋
            </Translate>
            {/* 如果你的網站有搜尋功能，可以加上連結 */}
            {/* <Link to="/search">站內搜尋</Link> */}
          </li>
        </ul>
        {/* 你可以加入更多自訂內容 */}
      </div>
    </>
  );
}