
// 1. service/sidebar/GenerateSidebarFromPagesService.js
// 2. 修改你的 CustomSidebar.jsx 以使用自動產生的資料
// 3. 在 package.json 中加入 script： 每次run  start 或 build 時，就會自動更新側邊欄。
// "scripts": {
//     "gen:sidebar": "node service/sidebar/GenerateSidebarFromPagesService.js",
//  }



// 這個元件用呈現 GenerateSidebarFromPagesService.js
// 爬 src/pages 資料夾內的 '.js', '.jsx', '.tsx', '.mdx', 並建立 route path
// 以產生側邊欄
// docs 資料夾則由跟目錄下的 sidebar.js 由 docusaurus 自動產生
import React from 'react';
import { pageLinks } from './generatedPageLinks';
import styles from './CustomSidebar.module.css';

export default function CustomSidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          {pageLinks.map((link, index) => (
            <li key={index}>
              <a href={link.route}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
