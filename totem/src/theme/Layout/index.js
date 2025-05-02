import React, { useEffect } from 'react';
import OriginalLayout from '@theme-original/Layout';

//這是覆寫 Docusaurus 的預設 Layout，加上 bootstrap JS 初始化
export default function Layout(props) {
  useEffect(() => {
    // SSR-safe 載入 Bootstrap JS（含 Popper）
    import('bootstrap/dist/js/bootstrap.bundle.min');
  }, []);




  return <OriginalLayout {...props} />;
}
