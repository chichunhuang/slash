---
title: Docusaurus 數學方程繪製
description: KaTex Math Equations
keywords: [Docusaurus,Equation,KaTex] 
---

 KatTex 是 Docusaurus 將 [KaTex](https://katex.org/) 與 remark-math 整併的數學方程繪製套件。
 

## KatTexd 數學方程繪製套件
* [Docusaurus 參考說明](https://docusaurus.io/docs/next/markdown-features/math-equations)
* [KaTex 參考說明文件](https://katex.org/docs/api)
* 註: 使用版本
    * "@docusaurus/core": "^3.7.0",
    * "rehype-katex": "^7.0.1",
    * "remark-math": "^6.0.0"
* 註: 套件要求
    * 此2插件僅可作為 [ES 模組](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)使用
    * Docusaurus 官方建議採用 [ES 模組設定檔](https://flaviocopes.com/es-modules/)
* <span style={{color: '#FF1100'}}> KatTex 脫逸字元: 因為 KaTex 是以 __\$__ 作為區塊的定界符號。所以，其他 mdx/jsx 出現 \\\$ 也須進行脫逸。</span>

    
## 套件安裝

* remark-math 
* rehype-katex

_註: 下方範例需搭配  Docusaurus v3_

```
    npm install --save remark-math@6 rehype-katex@7
```

## 套件設定/ES 模組設定檔建議設定方式

* 重點說明：
    * remarkPlugins: Remark 外掛程式，用於解析 Markdown 中的數學語法並將其轉換為 AST 節點。
    * rehypePlugins: rehype-katex 是一個 Rehype 外掛程式，它會取得 remark-math 產生的數學 AST 節點，並使用 KaTeX 將其渲染為 HTML 和 CSS。

__docusaurus.config.js 設定套件__

```
const remarkMath = require('remark-math');
const rehypeKatex = require('rehype-katex');

export default {
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
       ({
        docs: {
        
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
       },
      }),
    ],
  ],
}    

```


## KaTeX CSS stylesheets 設定

__docusaurus.config.js: CDN 來源載入 CSS__

* integrity: 屬性是用於子資源完整性 (Subresource Integrity - SRI) 的相關安全功能。當瀏覽器從 CDN 或其他外部來源載入資源 (例如 CSS 樣式表、JavaScript 檔案) 時，SRI 可以幫助確保這些檔案在傳輸過程中沒有被第三方竄改。

```
export default {
  //...
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css', // 或是您本地 KaTeX CSS 的路徑
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
```

__docusaurus.config.js: Self-hosting 管理 CSS__
* 非官方建議方式

```

export default {
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
};

```

## KaTex 語法說明

* 數學方程市區塊須以 \$\$ 包覆
* [KaTex 官方參考說明文件](https://katex.org/docs/api)

<pre>

    \$\$
    E = mc^2
    \$\$
</pre>

## 數學方程繪製範例

### 行內方程式

這是一個行內方程式： $E = mc^2$。 當 $a \ne 0$ 時，二次方程式 $ax^2 + bx + c = 0$ 的解為：

$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$

### 區塊方程式

區塊方程式會單獨顯示並置中：

$$
E = mc^2
$$

另一個區塊方程式範例：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

另一個區塊方程式範例：

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

### 希臘字母與符號

您可以使用各種 LaTeX 指令來顯示希臘字母和數學符號：

$\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu$
$\nu, \xi, \omicron, \pi, \rho, \sigma, \tau, \upsilon, \phi, \chi, \psi, \omega$

$\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$

$\pm, \times, \div, \cdot, \cap, \cup, \geq, \leq, \neq, \approx, \equiv$

### 分數與根號

$$
\frac{2}{3} \qquad \sqrt{x^2+y^2} \qquad \sqrt[3]{8}
$$

### 矩陣

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\qquad
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$