import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
//import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function BootstrapAdvanced() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title="Bootstrap 進階元件">
    
    
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
     
     
      <div className="container mt-5">
        <h2 className="mb-4">Bootstrap 進階元件展示</h2>

        {/* Grid Layout */}
        <div className="row">
          <div className="col-md-6 bg-light p-3">左側區塊</div>
          <div className="col-md-6 bg-secondary text-white p-3">右側區塊</div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">
              Profile
            </button>
          </li>
        </ul>
        <div className="tab-content border p-3" id="myTabContent">
          <div className="tab-pane fade show active" id="home">
            Home 內容
          </div>
          <div className="tab-pane fade" id="profile">
            Profile 內容
          </div>
        </div>

        {/* Collapse / Accordion */}
        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                折疊區塊 #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">這是展開內容。</div>
            </div>
          </div>
        </div>

        {/* Modal Button */}
        <button className="btn btn-primary mt-4" onClick={() => setShowModal(true)}>打開 Modal</button>

        {/* Modal 元件 */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Bootstrap Modal</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <p>這是一個 React 控制的 Modal。</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>關閉</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
