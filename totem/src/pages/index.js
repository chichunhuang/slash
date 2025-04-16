import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import totemStyles from './totem.module.css';
import logo from "@site/static/img/insect_totem_800_374.jpg";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
        <div  className={clsx( totemStyles.totemContainer)}>
          <div className={clsx(totemStyles.leftPanel)} >
              <div class="imageCaption">
                  <img src={logo} /><br />
                  <span className={clsx(totemStyles.h1InsecTotem)}>{siteConfig.title}</span> &nbsp;
                  <span className="hero__subtitle">{siteConfig.tagline} / &nbsp;<Link to="/docs/docs-map"> 請由此參觀 &gt;&gt;&gt;  </Link></span>
              </div>
          </div>

    <div className={clsx( totemStyles.rightPanel)} >
    <h2>最新異動</h2>
      <ul className={clsx( totemStyles.objectList)}>
        <li className={clsx( totemStyles.objectItem)}><Link to="/docs/docs-map">Java SHA 雜湊 - 以 Java SHA 進行資料雜湊</Link></li>
        <li className={clsx( totemStyles.objectItem)}>PosgreSQL copy from CSV - 自 CSV 檔匯入資料</li>
        <li className={clsx( totemStyles.objectItem)}>Log4j EmailAppender Configuration - 當log4j looger紀錄指定等級的訊息時，發信通知特定人員</li>
        <li className={clsx( totemStyles.objectItem)}>Notion Sprint - Notion Sprint and Task 工作管理</li>
      </ul>
    </div>
    </div>
    
    
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Insect Totem">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
