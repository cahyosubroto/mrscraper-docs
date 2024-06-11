import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import Image1 from '../../static/img/data 2.png';
import Image2 from '../../static/img/data 1.png';
import Code from '../../static/img/Code@300x.png';
import Build from '../../static/img/Scheduler@300x.png';
import Human from '../../static/img/Human@300x.png';
import Proxies from '../../static/img/Proxies@300x.png';
import Parse from '../../static/img/Parse@300x.png';
import Share from '../../static/img/Share@300x.png';
import Logo from '../../static/img/mrscraper-logo.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container flex flex-row items-center justify-center gap-20 py-[5rem]'>
          <img
            src={Image1}
            className='w-[200px] hidden lg:block'
            alt='Document icon'
          />
          <div className='flex flex-col'>
            <Heading as='h1' className='hero__title'>
              {siteConfig.title}
            </Heading>
            <p className={clsx('hero__subtitle', styles.subtitle)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className='button button--secondary button--lg'
                to='/docs/intro'
              >
                Get Started
              </Link>
            </div>
          </div>
          <img
            src={Image2}
            className='w-[200px] hidden lg:block'
            alt='Document icon'
          />
        </div>
      </header>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <section class='py-10'>
          <div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div class='w-[100%] grid grid-cols-1 gap-[2rem] lg:gap-[5rem] my-24 xl:grid-cols-3 lg:mt-20 justify-items-center'>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Code} alt='Code icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Code the data extraction logic
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      You choose a technology and spend hours doing research on
                      coding a web scraper. You rewrite the script many times to
                      fix bugs.
                    </p>
                  </div>
                </div>
              </div>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Build} alt='Build icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Build a scheduler in your system
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      What if you want to scrape a URL on a given date and time,
                      or if you need to set up recurring scrapings?
                    </p>
                  </div>
                </div>
              </div>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Human} alt='Human icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Make the scraper more human
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      Most websites do not welcome programmatic visitors, and
                      you'll be forced to automate real web browsers.
                    </p>
                  </div>
                </div>
              </div>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Proxies} alt='Proxies icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Find and set up proxies
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      Even if you have a great web scraper, you could be banned.
                      You'll need to find and set up multiple proxy rotations.
                    </p>
                  </div>
                </div>
              </div>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Parse} alt='Parse icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Parse and clean the data
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      The data doesn't always come in the format we need. That's
                      a separate script you'll have to write.
                    </p>
                  </div>
                </div>
              </div>
              <div class='flex items-center w-[350px] sm:w-[370px] h-[100%] lg:h-[170px] bg-[#F0F3F6] rounded-lg pr-6 py-6'>
                <div class='flex items-center justify-center'>
                  <div class='mr-6'>
                    <div class='w-[60px] rounded-r-md bg-cyan-500 flex items-center justify-center p-4'>
                      <img src={Share} alt='Share icon' />
                    </div>
                  </div>
                  <div>
                    <h3 class='text-lg font-semibold text-black'>
                      Organize and share the data
                    </h3>
                    <p class='mt-2 text-base text-slate-600'>
                      Pretty sure you'll need to do something with this data.
                      You'll have to manually process it or build an integration
                      every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class='pt-10 bg-slate-900 sm:pt-16 lg:pt-24'>
          <div class='mx-auto max-w-7xl'>
            <div class='px-8 sm:px-6 lg:px-[8rem] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12'>
              <div class='col-span-2 md:col-span-4'>
                <img src={Logo} className='w-[200px]' alt='Mrscraper logo' />
                <p class='text-base leading-relaxed text-slate-100 mt-7 max-w-lg'>
                  Meet Mr. Scraper, a visual web scraper to extract data from
                  websites, easily and without getting blocked.
                </p>
              </div>

              <div class='col-span-1 lg:col-span-2'>
                <p class='text-base font-semibold text-white'>Navigation</p>

                <ul class='mt-6 space-y-4 list-none -ml-[2rem]'>
                  <li>
                    <a
                      href='https://mrscraper.com/#features'
                      title='Features'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/#pricing'
                      title='Pricing'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/blog'
                      title='Web scraping blog'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Blog
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/resources'
                      title='Guides, examples and tools to help you get started and become the best at scraping with MrScraper.'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Resources
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/ai'
                      title='MrScraper AI scraper'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      AI{' '}
                      <span class='hidden lg:inline bg-cyan-500 text-white font-bold tracking-wide text-xs rounded py-0.5 px-2 ml-2'>
                        beta
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://app.mrscraper.com/login'
                      title='Log in'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Log In
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://app.mrscraper.com/register'
                      title='Get early access'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-span-1 lg:col-span-2'>
                <p class='text-base font-semibold text-white'>Support</p>

                <ul class='mt-6 space-y-4 list-none -ml-[2rem]'>
                  <li>
                    <a
                      href='https://help.mrscraper.com/'
                      target='_blank'
                      title='Help center'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Help Center
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/docs/api/v1'
                      target='_blank'
                      title='API documentation'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      API Documentation
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.canny.io/feedback'
                      target='_blank'
                      title='Feature request'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Feature Request
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.canny.io/changelog'
                      target='_blank'
                      title='Changelog page'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Changelog
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://stats.uptimerobot.com/W9M6BU6M0B'
                      target='_blank'
                      title='Status page'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Status
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-span-1 lg:col-span-2'>
                <p class='text-base font-semibold text-white'>Compare</p>

                <ul class='mt-6 space-y-4 list-none -ml-[2rem]'>
                  <li>
                    <a
                      href='https://mrscraper.com/scraperapi-com-alternative'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      ScraperAPI Alternative
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/scrapingbee-com-alternative'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      ScrapingBee Alternative
                    </a>
                  </li>
                </ul>
              </div>

              <div class='col-span-1 lg:col-span-2'>
                <p class='text-base font-semibold text-white'>Company</p>

                <ul class='mt-6 space-y-4 list-none -ml-[2rem]'>
                  <li>
                    <a
                      href='https://mrscraper.getrewardful.com/signup'
                      target='_blank'
                      rel='nofollow noreferrer noopener'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://mrscraper.com/cookie-policy'
                      title='Cookie policy'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Cookie Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/privacy-policy'
                      title='Privacy policy'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href='https://mrscraper.com/terms-of-use'
                      title='Terms of use'
                      class='flex text-sm text-slate-100 transition-all duration-100 hover:text-cyan-400 focus:text-cyan-400'
                    >
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr class='mt-16 mb-10 border-slate-800' />

            <div class='max-w-7xl px-[2rem] sm:px-[8rem] py-2 sm:flex sm:items-center sm:justify-between bg-cyan-500'>
              <p class='text-sm text-slate-100'>Copyright © 2024 MrScraper</p>

              <div class='flex items-center mt-5 space-x-3 md:order-3 sm:mt-0'>
                <a
                  href='https://twitter.com/MrScraper_'
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Follow MrScraper on X'
                  class='flex items-center justify-center text-slate-100 transition-all duration-100 rounded-full w-10 h-10 p-2 focus:bg-slate-800 hover:text-white focus:text-white hover:bg-slate-800'
                >
                  <svg
                    class='w-5 h-5'
                    viewBox='0 0 1200 1227'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                  >
                    <path
                      d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
