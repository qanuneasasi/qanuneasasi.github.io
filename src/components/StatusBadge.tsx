import React from 'react';
import clsx from 'clsx';

interface StatusBadgeProps {
  status: 'draft' | 'review' | 'voting' | 'ratified';
}

const statusConfig = {
  draft: {
    labelFa: 'پیش‌نویس',
    labelEn: 'Draft',
    className: 'status-draft',
    icon: '📝',
  },
  review: {
    labelFa: 'در حال بازبینی',
    labelEn: 'Under Review',
    className: 'status-review',
    icon: '🔍',
  },
  voting: {
    labelFa: 'در حال رأی‌گیری',
    labelEn: 'Voting',
    className: 'status-voting',
    icon: '🗳️',
  },
  ratified: {
    labelFa: 'تصویب شده',
    labelEn: 'Ratified',
    className: 'status-ratified',
    icon: '✅',
  },
};

export default function StatusBadge({ status }: StatusBadgeProps): JSX.Element {
  const config = statusConfig[status];

  return (
    <span className={clsx('status-badge', config.className)}>
      <span className="me-1">{config.icon}</span>
      {config.labelFa} | {config.labelEn}
    </span>
  );
}
