---
sidebar_position: 4
---

# Scrapers

Scrapers serve as the foundation for every scraping, holding the configuration for specific use cases or set of URLs.

---

Crawling is the act of visiting a website and successfully retrieving the HTML content. To perform this, we use a Scraper.

Think of a scraper as a wrapper for your scraping configuration for a particular URL/site. The scraper allows you to define scraping delay, pagination type, set custom cookies, schedule tasks, disable resources such as images, and much more.

## Create a scraper

To create your first scraper, you need to log in or create a MrScraper account.

Once you're logged in, find and go to the "Scrapers" tab in the left sidebar, then click the "New Scraper" button.

## Scraper information

A basic scraper doesn't require much information. Let's take the example of building a scraper to extract a list of blog articles from MrScraper.com/blog.

The only information you need to provide is:

1. **Name:** An internal name for reference. In this case, we'll name the scraper "MrScraper blog posts".
2. **Delay:** Some sites are slow, and you may need to add a wait delay. However, MrScraper's website is fast, so no delay is needed.
3. **Entry URLs:** Default URLs are scraped when you click the "Scrape" button. However, these URLs can be overridden at runtime if necessary. For this example, we'll set the MrScraper blog as the only target URL.

This is all you need for basic scraping. Once you're comfortable with it, feel free to explore advanced options such as pagination, scheduling, or attachments.

## Extractors

Before saving the scraper, you need to create at least one extractor. Continue to the "Extractors" section to learn how to add your first extractor to the scraper.
