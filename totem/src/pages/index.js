import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Breaknews from '@site/src/components/Breaknews';

import totemStyles from './totem.module.css';
import logo from "@site/static/img/insect_totem_800_374.jpg";

import totemConfig2 from '@site/src/components/TotemConfig';
import totemConfig from '@site/src/components/totem.config';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const totem = totemConfig.homePage;

  return (
        <div  className={clsx( totemStyles.totemContainer)}>
          <div className={clsx(totemStyles.leftPanel)} >
              <div class="imageCaption">
                  <img src={logo} /><br />
                  <span className={clsx(totemStyles.h1InsecTotem)}>{siteConfig.title}</span> &nbsp;<br/>
                  <span >{siteConfig.tagline} / &nbsp;<Link to="/docs/docs-map"> 請由此參觀 &gt;&gt;&gt;  </Link></span>
              </div>
          </div>
        <Breaknews h2={totem.latestTitle} items={totem.latestItems}/>
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
