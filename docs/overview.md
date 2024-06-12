---
sidebar_position: 3
slug: /overview
---

# Workflow overview

A quick look at the four-step workflow used when scraping public data from websites with MrScraper.

## How does scraping using MrScraper look?

Scraping data with MrScraper involves four main steps: creating a scraper, defining the extractors, parsing the results, and integrating the results with your needs.

## 1. Crawl

Crawling is the act of visiting a website and successfully retrieving the HTML content. To perform this, we use a Scraper.

Think of a scraper as a wrapper for your scraping configuration for a particular URL/site. The scraper allows you to define scraping delay, pagination type, set custom cookies, schedule tasks, disable resources such as images, and much more.

## 2. Extract

We now have the page's HTML content, but we are only interested in certain parts of it, such as blog posts, job offers, product prices, etc.

To extract the desired information from the HTML code, we use Extractors.

Extractors are attached to scrapers and define what information we want to extract and in what quantity.

## 3. Parse

The parsing and cleaning step comes after the extraction. While there might be easier scenarios where parsing is not required, it is a common practice for most scrapers.

Consider a scenario where you need to extract an email address from a long paragraph of text, and there's only one selector wrapping the text. In this case, you can easily add a regex parser to remove all the unnecessary text and keep only the email address.

## 4. Integrate

At this point, you need to decide how you want to work with the data.

Some people choose to download the results and manually process them. However, in scenarios involving a large amount of data or real-time requirements, integration is necessary. You can add the results to a database, Google Sheet, or even send them by email.

To facilitate integration, you have access to the following set of tools: webhooks, APIs, and no-code apps such as Zapier.
