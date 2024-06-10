import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Code the data extraction logic',
    Svg: require('@site/static/img/code.svg').default,
    description: (
      <>
        You choose a technology and spend hours doing research on coding a web
        scraper. You rewrite the script many times to fix bugs.
      </>
    ),
  },
  {
    title: 'Build a scheduler in your system',
    Svg: require('@site/static/img/schedule.svg').default,
    description: (
      <>
        What if you want to scrape a URL on a given date and time, or if you
        need to set up recurring scrapings?
      </>
    ),
  },
  {
    title: 'Make the scraper more human',
    Svg: require('@site/static/img/robot.svg').default,
    description: (
      <>
        Most websites do not welcome programmatic visitors, and you'll be forced
        to automate real web browsers.
      </>
    ),
  },
  {
    title: 'Find and set up proxies',
    Svg: require('@site/static/img/proxy.svg').default,
    description: (
      <>
        Even if you have a great web scraper, you could be banned. You'll need
        to find and set up multiple proxy rotations.
      </>
    ),
  },
  {
    title: 'Parse and clean the data',
    Svg: require('@site/static/img/clean.svg').default,
    description: (
      <>
        The data doesn't always come in the format we need. That's a separate
        script you'll have to write.
      </>
    ),
  },
  {
    title: 'Organize and share the data',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        Pretty sure you'll need to do something with this data. You'll have to
        manually process it or build an integration every time.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
