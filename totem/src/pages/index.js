import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Breaknews from '@site/src/components/Breaknews';

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
        <Breaknews h2={"最新異動"} items={[
            {
                key:1,
                url:'/docs/docs-map',
                content: 'java SHA 雜湊'
            },
            {
                key:2,
                url:'/docs/docs-map2',
                content: 'Notion Sprint'
            },
            
        ]}/>
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
