import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Friendships',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>	  
	  	 <a href="https://chichunhuang.github.io/burning/">Burny's Gallery </a> : 布妮的美術作品區<br/>
	  	 <a href="https://chichunhuang.github.io/rain/">Rain's Math Zone </a> : Rain 的學習紀錄	   
      </>
    ),
  },
  {
    title: 'About Me',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        曾經以為自己會當一個生物學家，後來發現生物學家總是用老方法做事。所以開始開發系統輔佐生物學家進行研究。
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        這是一個網路筆記部落格，主要是使用 React 加 Docusaurus 製作。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
