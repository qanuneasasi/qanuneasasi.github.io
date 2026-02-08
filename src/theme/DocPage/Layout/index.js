import React, {useEffect} from 'react';
import OriginalLayout from '@theme-original/DocPage/Layout';

const RTL_STYLES = `
  /* FORCE sidebar to RIGHT with fixed positioning */
  aside.theme-doc-sidebar-container,
  .theme-doc-sidebar-container {
    position: fixed !important;
    right: 0 !important;
    left: auto !important;
    top: 60px !important;
    bottom: 0 !important;
    width: 300px !important;
    z-index: 100 !important;
    background: var(--ifm-background-color, #fff) !important;
    border-left: 1px solid #eee !important;
    overflow-y: auto !important;
  }

  /* Push main content to leave room for sidebar on right */
  main[class*="docMainContainer"],
  [class*="docMainContainer"] {
    margin-right: 300px !important;
    margin-left: 0 !important;
    max-width: calc(100% - 300px) !important;
  }

  /* Hide the original sidebar placeholder/spacing */
  [class*="docSidebarContainer"]:not(.theme-doc-sidebar-container) {
    display: none !important;
  }

  /* In-page TOC stays on LEFT */
  [class*="docItemContainer"] .row,
  .row.row--no-gutters {
    display: flex !important;
    flex-direction: row !important;
  }

  .col.col--3 {
    order: 1 !important;
  }

  [class*="docItemCol"] {
    order: 2 !important;
  }

  /* RTL text for content */
  article, .markdown {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Sidebar menu RTL */
  .menu, .menu__list, .menu__link {
    direction: rtl !important;
    text-align: right !important;
  }

  .table-of-contents {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Mobile responsive */
  @media (max-width: 996px) {
    aside.theme-doc-sidebar-container,
    .theme-doc-sidebar-container {
      position: relative !important;
      right: auto !important;
      top: auto !important;
      bottom: auto !important;
      width: 100% !important;
    }

    main[class*="docMainContainer"],
    [class*="docMainContainer"] {
      margin-right: 0 !important;
      max-width: 100% !important;
    }
  }
`;

export default function DocPageLayout(props) {
  useEffect(() => {
    console.log('RTL Layout component loaded!');

    const styleId = 'rtl-sidebar-styles';
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = RTL_STYLES;
    document.head.appendChild(style);

    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  return <OriginalLayout {...props} />;
}
