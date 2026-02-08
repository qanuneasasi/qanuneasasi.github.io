import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  constitutionSidebar: [
    {
      type: 'doc',
      id: 'preamble/index',
      label: 'مقدمه',
    },
    {
      type: 'category',
      label: 'فصل اول: اصول بنیادین',
      link: {
        type: 'doc',
        id: 'chapter-01-sovereignty/index',
      },
      items: [
        'chapter-01-sovereignty/article-01',
        'chapter-01-sovereignty/article-02',
        'chapter-01-sovereignty/article-03',
        'chapter-01-sovereignty/article-04',
        'chapter-01-sovereignty/article-05',
        'chapter-01-sovereignty/article-06',
      ],
    },
    {
      type: 'category',
      label: 'فصل دوم: اعلامیه حقوق',
      link: {
        type: 'doc',
        id: 'chapter-02-rights/index',
      },
      items: [
        {
          type: 'category',
          label: 'کرامت و برابری انسانی',
          items: [
            'chapter-02-rights/article-07',
            'chapter-02-rights/article-08',
            'chapter-02-rights/article-09',
            'chapter-02-rights/article-10',
            'chapter-02-rights/article-11',
          ],
        },
        {
          type: 'category',
          label: 'آزادی‌ها',
          items: [
            'chapter-02-rights/article-12',
            'chapter-02-rights/article-13',
            'chapter-02-rights/article-14',
            'chapter-02-rights/article-15',
            'chapter-02-rights/article-16',
          ],
        },
        {
          type: 'category',
          label: 'حقوق مدنی',
          items: [
            'chapter-02-rights/article-17',
            'chapter-02-rights/article-18',
            'chapter-02-rights/article-19',
            'chapter-02-rights/article-20',
            'chapter-02-rights/article-21',
          ],
        },
        {
          type: 'category',
          label: 'حقوق اقتصادی و اجتماعی',
          items: [
            'chapter-02-rights/article-22',
            'chapter-02-rights/article-23',
            'chapter-02-rights/article-24',
            'chapter-02-rights/article-25',
          ],
        },
        {
          type: 'category',
          label: 'حقوق اقلیت‌ها',
          items: [
            'chapter-02-rights/article-26',
            'chapter-02-rights/article-27',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'فصل سوم: قوه مقننه',
      link: {
        type: 'doc',
        id: 'chapter-03-legislature/index',
      },
      items: [
        'chapter-03-legislature/article-28',
        'chapter-03-legislature/article-29',
        'chapter-03-legislature/article-30',
        'chapter-03-legislature/article-31',
        'chapter-03-legislature/article-32',
      ],
    },
    {
      type: 'category',
      label: 'فصل چهارم: قوه مجریه',
      link: {
        type: 'doc',
        id: 'chapter-04-executive/index',
      },
      items: [
        'chapter-04-executive/article-41',
        'chapter-04-executive/article-42',
        'chapter-04-executive/article-43',
        'chapter-04-executive/article-44',
        'chapter-04-executive/article-45',
      ],
    },
    {
      type: 'category',
      label: 'فصل پنجم: قوه قضائیه',
      link: {
        type: 'doc',
        id: 'chapter-05-judiciary/index',
      },
      items: [
        'chapter-05-judiciary/article-51',
        'chapter-05-judiciary/article-52',
      ],
    },
    {
      type: 'category',
      label: 'فصل ششم: حکومت‌های محلی',
      link: {
        type: 'doc',
        id: 'chapter-06-regional/index',
      },
      items: [
        'chapter-06-regional/article-58',
        'chapter-06-regional/article-59',
      ],
    },
    {
      type: 'category',
      label: 'فصل هفتم: نهادهای مستقل',
      link: {
        type: 'doc',
        id: 'chapter-07-institutions/index',
      },
      items: [
        'chapter-07-institutions/article-73',
        'chapter-07-institutions/article-74',
        'chapter-07-institutions/article-75',
        'chapter-07-institutions/article-76',
        'chapter-07-institutions/article-77',
        'chapter-07-institutions/article-78',
      ],
    },
    {
      type: 'category',
      label: 'فصل هشتم: دین و دولت',
      link: {
        type: 'doc',
        id: 'chapter-08-religion/index',
      },
      items: [
        'chapter-08-religion/article-66',
        'chapter-08-religion/article-67',
      ],
    },
    {
      type: 'category',
      label: 'فصل نهم: اصول اقتصادی',
      link: {
        type: 'doc',
        id: 'chapter-09-economy/index',
      },
      items: [
        'chapter-09-economy/article-85',
        'chapter-09-economy/article-86',
        'chapter-09-economy/article-87',
        'chapter-09-economy/article-88',
        'chapter-09-economy/article-89',
      ],
    },
    {
      type: 'category',
      label: 'فصل دهم: روابط خارجی',
      link: {
        type: 'doc',
        id: 'chapter-10-foreign/index',
      },
      items: [
        'chapter-10-foreign/article-90',
        'chapter-10-foreign/article-91',
        'chapter-10-foreign/article-92',
        'chapter-10-foreign/article-93',
      ],
    },
    {
      type: 'category',
      label: 'فصل یازدهم: وضعیت اضطراری',
      link: {
        type: 'doc',
        id: 'chapter-11-emergency/index',
      },
      items: [
        'chapter-11-emergency/article-94',
        'chapter-11-emergency/article-95',
        'chapter-11-emergency/article-96',
        'chapter-11-emergency/article-97',
      ],
    },
    {
      type: 'category',
      label: 'فصل دوازدهم: اصلاحات',
      link: {
        type: 'doc',
        id: 'chapter-12-amendments/index',
      },
      items: [
        'chapter-12-amendments/article-100',
        'chapter-12-amendments/article-101',
        'chapter-12-amendments/article-102',
      ],
    },
    {
      type: 'category',
      label: 'مقررات انتقالی',
      link: {
        type: 'doc',
        id: 'transitional/index',
      },
      items: [
        'transitional/article-108',
        'transitional/article-109',
        'transitional/article-110',
        'transitional/article-111',
        'transitional/article-112',
        'transitional/article-113',
      ],
    },
    {
      type: 'doc',
      id: 'contributing/index',
      label: 'راهنمای مشارکت',
    },
  ],

  resourcesSidebar: [
    {
      type: 'category',
      label: 'منابع تطبیقی',
      items: [
        'resources/comparative/constitution-1906',
        'resources/comparative/methodology',
      ],
    },
    {
      type: 'category',
      label: 'تاریخ مشروطیت',
      items: [
        'resources/history/constitutional-movement',
      ],
    },
  ],
};

export default sidebars;
