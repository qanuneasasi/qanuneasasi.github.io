import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          قانون اساسی نوین
        </Heading>
        <p className={styles.heroSubtitle}>
          چارچوب قانون اساسی برای آینده دموکراتیک ایران
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/preamble">
            مشاهده قانون اساسی
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            مقالات فدرالیست
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, icon}: {title: string; description: string; icon: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'مشارکتی',
    description: 'این قانون اساسی توسط مردم و برای مردم نوشته می‌شود. هر ایرانی می‌تواند مشارکت کند.',
    icon: '🤝',
  },
  {
    title: 'شفاف',
    description: 'تمام بحث‌ها، رأی‌گیری‌ها، و تغییرات به صورت عمومی قابل مشاهده‌اند.',
    icon: '✨',
  },
  {
    title: 'متن‌باز',
    description: 'کد منبع و تمام محتوا در گیت‌هاب در دسترس همگان است.',
    icon: '📖',
  },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageValues() {
  return (
    <section className={styles.values}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          اصول بنیادین
        </Heading>
        <div className="row">
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>حاکمیت مردم</h3>
              <p>تمام قدرت سیاسی از مردم سرچشمه می‌گیرد. هیچ نهادی بالاتر از اراده مردم نیست.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>دموکراسی</h3>
              <p>انتخابات آزاد، رقابتی، و منظم تنها راه مشروع کسب قدرت سیاسی است.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>حقوق بشر</h3>
              <p>حقوق ذاتی و غیرقابل سلب هر انسان، صرف‌نظر از هر ویژگی دیگر، تضمین می‌شود.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>برابری</h3>
              <p>همه شهروندان، بدون توجه به جنسیت، قومیت، مذهب، یا عقیده، برابرند.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>سکولاریسم</h3>
              <p>دولت در امور دینی بی‌طرف است. هیچ دینی رسمی یا ممنوع نیست.</p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.valueCard}>
              <h3>کثرت‌گرایی</h3>
              <p>تنوع قومی، زبانی، فرهنگی، و مذهبی ایران به رسمیت شناخته و حمایت می‌شود.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageCTA() {
  return (
    <section className={styles.cta}>
      <div className="container text--center">
        <Heading as="h2">در تدوین قانون اساسی مشارکت کنید</Heading>
        <p>هر ایرانی می‌تواند در این پروژه تاریخی سهیم باشد.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            href="https://github.com/qanun-e-asasi/qanun-e-asasi/discussions">
            شروع بحث
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/contributing">
            راهنمای مشارکت
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="صفحه اصلی"
      description="قانون اساسی نوین - چارچوب قانون اساسی برای آینده دموکراتیک ایران">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageValues />
        <HomepageCTA />
      </main>
    </Layout>
  );
}
