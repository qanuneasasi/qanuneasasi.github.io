import React from 'react';
import clsx from 'clsx';

interface CommentaryProps {
  title?: string;
  children: React.ReactNode;
  type?: 'reasoning' | 'comparative' | 'discussion' | 'historical';
}

const typeLabels = {
  reasoning: { fa: 'استدلال', en: 'Reasoning', icon: '💡' },
  comparative: { fa: 'تحلیل تطبیقی', en: 'Comparative Analysis', icon: '🌍' },
  discussion: { fa: 'نکات مورد بحث', en: 'Discussion Points', icon: '💬' },
  historical: { fa: 'زمینه تاریخی', en: 'Historical Context', icon: '📜' },
};

export default function Commentary({
  title,
  children,
  type = 'reasoning',
}: CommentaryProps): JSX.Element {
  const label = typeLabels[type];

  return (
    <div className={clsx('commentary', `commentary-${type}`)}>
      <div className="commentary-title">
        <span className="me-2">{label.icon}</span>
        {title || `${label.fa} | ${label.en}`}
      </div>
      <div className="commentary-content">
        {children}
      </div>
    </div>
  );
}
