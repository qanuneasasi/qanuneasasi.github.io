// Client module to apply RTL styles on blog pages
const BLOG_RTL_CSS = `
  /* FORCE RTL on blog pages - main content */
  body.blog-rtl-active main,
  body.blog-rtl-active main *,
  body.blog-rtl-active article,
  body.blog-rtl-active article *,
  body.blog-rtl-active .markdown,
  body.blog-rtl-active .markdown * {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Specifically target blog post content */
  body.blog-rtl-active [class*="blogPost"] p,
  body.blog-rtl-active [class*="blogPost"] li,
  body.blog-rtl-active [class*="blogPost"] h1,
  body.blog-rtl-active [class*="blogPost"] h2,
  body.blog-rtl-active [class*="blogPost"] h3,
  body.blog-rtl-active [class*="blogPost"] h4,
  body.blog-rtl-active [class*="blogPost"] h5,
  body.blog-rtl-active [class*="blogPost"] h6,
  body.blog-rtl-active [class*="blogPost"] span,
  body.blog-rtl-active [class*="blogPost"] div {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Blog list page content */
  body.blog-rtl-active [class*="blogListPage"] p,
  body.blog-rtl-active [class*="blogListPage"] li,
  body.blog-rtl-active [class*="blogListPage"] span,
  body.blog-rtl-active [class*="blogListPage"] div {
    direction: rtl !important;
    text-align: right !important;
  }

  /* Preserve code blocks as LTR */
  body.blog-rtl-active pre,
  body.blog-rtl-active code,
  body.blog-rtl-active .prism-code,
  body.blog-rtl-active pre *,
  body.blog-rtl-active code * {
    direction: ltr !important;
    text-align: left !important;
  }

  /* Keep navbar unchanged */
  body.blog-rtl-active .navbar,
  body.blog-rtl-active .navbar * {
    direction: inherit !important;
    text-align: inherit !important;
  }

  /* Keep footer unchanged */
  body.blog-rtl-active .footer,
  body.blog-rtl-active .footer * {
    direction: inherit !important;
    text-align: inherit !important;
  }
`;

function applyBlogRTL() {
  const isBlogPage = window.location.pathname.includes('/blog');

  // Add/remove class on body
  if (isBlogPage) {
    document.body.classList.add('blog-rtl-active');
  } else {
    document.body.classList.remove('blog-rtl-active');
  }
}

function injectStyles() {
  const styleId = 'blog-rtl-client-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = BLOG_RTL_CSS;
    document.head.appendChild(style);
  }
}

// Run on module load
if (typeof window !== 'undefined') {
  // Inject styles immediately
  injectStyles();

  // Apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBlogRTL);
  } else {
    applyBlogRTL();
  }

  // Apply on route changes (for SPA navigation)
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(this, arguments);
    setTimeout(applyBlogRTL, 50);
  };

  window.addEventListener('popstate', () => {
    setTimeout(applyBlogRTL, 50);
  });

  // Also observe for dynamic content changes
  const observer = new MutationObserver(() => {
    applyBlogRTL();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
}

export default function onRouteUpdate({location}) {
  applyBlogRTL();
}
