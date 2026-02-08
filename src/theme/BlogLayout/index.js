import React, {useEffect} from 'react';
import OriginalBlogLayout from '@theme-original/BlogLayout';

export default function BlogLayout(props) {
  useEffect(() => {
    // Apply RTL directly to DOM elements
    const applyRTL = () => {
      // Target the main content area
      const main = document.querySelector('main');
      if (main) {
        main.style.direction = 'rtl';
        main.style.textAlign = 'right';
      }

      // Target all articles
      document.querySelectorAll('article').forEach(el => {
        el.style.direction = 'rtl';
        el.style.textAlign = 'right';
      });

      // Target markdown content
      document.querySelectorAll('.markdown, [class*="markdown"]').forEach(el => {
        el.style.direction = 'rtl';
        el.style.textAlign = 'right';
      });

      // Target all paragraphs, headings, list items in main content
      const selectors = 'main p, main h1, main h2, main h3, main h4, main h5, main h6, main li, main blockquote, article p, article h1, article h2, article h3, article h4, article h5, article h6, article li, article blockquote';
      document.querySelectorAll(selectors).forEach(el => {
        el.style.direction = 'rtl';
        el.style.textAlign = 'right';
      });

      // Target blog post content containers
      document.querySelectorAll('[class*="blogPost"], [class*="blogListPage"]').forEach(el => {
        el.style.direction = 'rtl';
        el.style.textAlign = 'right';
      });

      // Keep code blocks LTR
      document.querySelectorAll('pre, code, .prism-code').forEach(el => {
        el.style.direction = 'ltr';
        el.style.textAlign = 'left';
      });
    };

    // Apply immediately
    applyRTL();

    // Also apply after a short delay (for dynamic content)
    const timeout = setTimeout(applyRTL, 100);
    const timeout2 = setTimeout(applyRTL, 500);

    // Observe for DOM changes
    const observer = new MutationObserver(applyRTL);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
      observer.disconnect();
    };
  }, []);

  return <OriginalBlogLayout {...props} />;
}
