import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css'; // NotFound.module.css 專用樣式定義

/**
Translate 元件: 用來來包裹需要翻譯的文字。id 是一個唯一的識別符，description 是給翻譯人員的註解。
 */
import Translate from '@docusaurus/Translate';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Translate
            id="theme.NotFound.title"
            description="The title of the 404 page">
            Page Not Found
          </Translate>
        </h1>
        <p className={styles.text}>
          <Translate
            id="theme.NotFound.p1"
            description="The first paragraph of the 404 page">
            We could not find what you were looking for.
          </Translate>
        </p>
        <p className={styles.text}>
          <Translate
            id="theme.NotFound.p2"
            description="The second paragraph of the 404 page">
            Please double-check the URL or try using the search bar below.
          </Translate>
        </p>
        {/* 你可以在這裡加入你的搜尋欄位或其他有用的連結 */}
      </div>
    </Layout>
  );
}