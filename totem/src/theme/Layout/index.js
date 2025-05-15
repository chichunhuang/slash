import React, { useEffect, useState } from 'react';
import OriginalLayout from '@theme-original/Layout';


//這是覆寫 Docusaurus 的預設 Layout，加上 bootstrap JS 初始化
export default function Layout(props) {
    useEffect(() => {
        // SSR-safe 載入 Bootstrap JS（含 Popper）
        import('bootstrap/dist/js/bootstrap.bundle.min');
    }, []);


    // 用來隱藏 /url/docs/ 右側 menu (Table of contant) 用的客製 js+button
    const [isTocVisible, setIsTocVisible] = useState(true);
    const tocSelector = '.table-of-contents'; // 替換為你找到的 TOC block selector
    const toggleToc = () => {
        setIsTocVisible(!isTocVisible);
    };

    useEffect(() => {
        const tocElement = document.querySelector(tocSelector);
        if (tocElement) {
            tocElement.style.display = isTocVisible ? 'block' : 'none';
        }
    }, [isTocVisible, tocSelector]);

    return (<>
        <OriginalLayout {...props} />
        <button className="toc-toggle-button" onClick={toggleToc}>
            {isTocVisible ? 'TOC Toggle' : 'TOC Toggle'}
        </button>
    </>);
}
