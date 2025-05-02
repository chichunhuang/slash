---
title: BootstrapMdxTemplatePage title
description: BootstrapMdxTemplatePage desc
keywords: [BootstrapMdxTemplatePage]
---
//import 'bootstrap/dist/js/bootstrap.bundle.min';




    <ul>
        <li>npm install bootstrap..</li>
        <li>src/css/custom.css</li>
        <li>docusaurus.config.js import custom.css</li>
        <li>Example JSX Page <Link to="/template/BootstrapJsxTemplatePage"> BootstrapJsxTemplatePage.js </Link>  </li>
        <li>Example JSX Page <Link to="/template/BootstrapJsxAdvancedTemplatePage"> BootstrapJsxAdvancedTemplatePage.js </Link>  </li>
        <li>Example mdx Page <Link to="/docs/BootstrapMdxTemplatePage"> BootstrapMdxTemplatePage.md </Link>  </li>
        <li>Example mdx Page <Link to="/docs/BootstrapMdxAdvancedTemplatePage"> BootstrapMdxAdvancedTemplatePage.md </Link>  </li>
        <li>為確保 Bootstrap JavaScript function 能正常運作 JSX, mdx 需複寫 src/theme/Layout/index.js  </li>
        <li>參考 https://docs.google.com/document/d/1S0UO6JYrNbFKqTsqLdQJgdZnvlvbB-PtKqvZzREr2pk/edit?usp=drive_link</li>        
     </ul> 
        
        
# <span className="text-info">MDX 頁面 - Bootstrap 進階元件</span>

## Grid Layout

<div className="row">
  <div className="col-md-6 bg-warning p-3">左側</div>
  <div className="col-md-6 bg-info text-white p-3">右側</div>
</div>

---

## Tabs（需要手動初始化）

⚠️ Bootstrap 的 Tabs 需要 JavaScript 行為，你需要自己透過 JS 初始化 `data-bs-toggle`。這在 MDX 中不一定穩定，建議用 React 實作 Tabs。

---

## Collapse 展開區塊

<button className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample">
  點我展開
</button>

<div className="collapse mt-2" id="collapseExample">
  <div className="card card-body">
    展開的內容區塊。
  </div>
</div>