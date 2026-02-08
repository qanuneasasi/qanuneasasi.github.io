import React from 'react';
import clsx from 'clsx';

interface BilingualArticleProps {
  articleNumber: number;
  titleFa: string;
  titleEn: string;
  textFa: string;
  textEn: string;
  status?: 'draft' | 'review' | 'voting' | 'ratified';
  showBilingual?: boolean;
}

const statusLabels = {
  draft: { fa: 'پیش‌نویس', en: 'Draft' },
  review: { fa: 'در حال بازبینی', en: 'Under Review' },
  voting: { fa: 'در حال رأی‌گیری', en: 'Voting' },
  ratified: { fa: 'تصویب شده', en: 'Ratified' },
};

export default function BilingualArticle({
  articleNumber,
  titleFa,
  titleEn,
  textFa,
  textEn,
  status = 'draft',
  showBilingual = false,
}: BilingualArticleProps): JSX.Element {
  const [isBilingual, setIsBilingual] = React.useState(showBilingual);

  return (
    <div className="bilingual-article">
      {/* Status Badge */}
      <div className="mb-4 flex items-center justify-between">
        <span className={clsx('status-badge', `status-${status}`)}>
          {statusLabels[status].fa} / {statusLabels[status].en}
        </span>
        <button
          onClick={() => setIsBilingual(!isBilingual)}
          className="text-sm text-primary hover:underline"
        >
          {isBilingual ? 'نمایش تک‌زبانه' : 'نمایش دوزبانه'}
        </button>
      </div>

      {isBilingual ? (
        <div className="bilingual-container">
          {/* Farsi Column */}
          <div className="bilingual-fa">
            <div className="article-number">اصل {articleNumber}</div>
            <h2 className="article-title">{titleFa}</h2>
            <div className="article-text" dangerouslySetInnerHTML={{ __html: textFa }} />
          </div>

          {/* English Column */}
          <div className="bilingual-en">
            <div className="article-number">Article {articleNumber}</div>
            <h2 className="article-title">{titleEn}</h2>
            <div className="article-text" dangerouslySetInnerHTML={{ __html: textEn }} />
          </div>
        </div>
      ) : (
        <div>
          {/* Single language view - shows based on current locale */}
          <div className="article-number">اصل {articleNumber} / Article {articleNumber}</div>
          <h2 className="article-title">{titleFa}</h2>
          <h3 className="text-lg text-gray-600 mb-4">{titleEn}</h3>
          <div className="article-text" dir="rtl" lang="fa" dangerouslySetInnerHTML={{ __html: textFa }} />
          <hr className="my-6" />
          <div className="article-text" dir="ltr" lang="en" dangerouslySetInnerHTML={{ __html: textEn }} />
        </div>
      )}
    </div>
  );
}
