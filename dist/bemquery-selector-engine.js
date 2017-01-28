/*! bemquery-selector-engine v0.2.5 | (c) 2016-2017 BEMQuery team | MIT license (see LICENSE) */class SelectorEngine{find(a,b=document){let c=!1;b!==document&&(!b.id&&(c=!0,b.id=`BEMQueryTMP_${Date.now()}`),a=`#${b.id} ${a}`);const d=Array.from(b.querySelectorAll(a));return c&&b.removeAttribute('id'),d}}export default SelectorEngine;
//# sourceMappingURL=bemquery-selector-engine.js.map
