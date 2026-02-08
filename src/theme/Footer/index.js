import React, {useEffect} from 'react';
import OriginalFooter from '@theme-original/Footer';

export default function Footer(props) {
  useEffect(() => {
    // Apply RTL directly to footer elements
    const applyFooterRTL = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.direction = 'rtl';
        footer.style.textAlign = 'right';

        // Apply to all children
        footer.querySelectorAll('*').forEach(el => {
          el.style.direction = 'rtl';
          el.style.textAlign = 'right';
        });

        // Keep copyright centered
        const copyright = footer.querySelector('.footer__copyright');
        if (copyright) {
          copyright.style.textAlign = 'center';
        }
      }
    };

    // Apply immediately and after a short delay
    applyFooterRTL();
    const timeout = setTimeout(applyFooterRTL, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{direction: 'rtl', textAlign: 'right'}}>
      <OriginalFooter {...props} />
    </div>
  );
}
