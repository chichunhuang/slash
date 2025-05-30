import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function BootstrapExample() {
  return (
    <Layout title="Bootstrap Example">
      <div className="container mt-5">
        <h1 className="text-primary">這是使用 Bootstrap 樣式的標題</h1>

        <h2>相關頁面清單</h2>

    <ul>
        <li>npm install bootstrap..</li>
        <li>src/css/custom.css</li>
        <li>docusaurus.config.js import custom.css</li>
        <li>Example JSX Page <a to="/template/BootstrapJsxTemplatePage"> BootstrapJsxTemplatePage.js </a>  </li>
        <li>Example JSX Page <a to="/template/BootstrapJsxAdvancedTemplatePage"> BootstrapJsxAdvancedTemplatePage.js </a>  </li>
        <li>Example mdx Page <a to="/docs/BootstrapMdxTemplatePage"> BootstrapMdxTemplatePage.md </a>  </li>
        <li>Example mdx Page <a to="/docs/BootstrapMdxAdvancedTemplatePage"> BootstrapMdxAdvancedTemplatePage.md </a>  </li>
        <li>為確保 Bootstrap JavaScript function 能正常運作 JSX, mdx 需複寫 src/theme/Layout/index.js  </li>
        <li>參考 https://docs.google.com/document/d/1S0UO6JYrNbFKqTsqLdQJgdZnvlvbB-PtKqvZzREr2pk/edit?usp=drive_link</li>        
     </ul>       
        
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
          </div>
          <button type="submit" className="btn btn-success">送出</button>
        </form>
      </div>
    </Layout>
  );
}
