---
sidebar_position: 5
slug: /extractors
---

# Extractors

Extractors enable the selective extraction of desired information from the HTML code obtained by the scraper.

---

We now have the page's HTML content, but we are only interested in certain parts of it, such as blog posts, job offers, product prices, etc.

To extract the desired information from the HTML code, we use Extractors.

Extractors are attached to scrapers and define what information we want to extract and in what quantity.

## Create an extractor

Extractors are created within the same scraper page. At the bottom, you'll find the extractors form.

Although it may seem intimidating, defining an extractor is actually quite simple. Let's understand the purpose of each input field:

### Store as

This is where you specify the title for a particular set of data. For instance, if we want to collect entries from a job board, we would set this to "jobs" or "posts".

For our example, we will set the name to "posts" since we are collecting articles from a blog.

```json
{
  "posts": ""
}
```

### Type

Please specify the type of information you want to extract from this selector. The most common options are text or collection, but you can also extract HTML code and attributes.

In our example, we want to extract a collection of jobs.

Once you select collection, you will be prompted to add nested properties. It is common to scrape grouped elements and select the title, link, date, and similar information.

To keep this example simple, we will only select the title and link to the blog posts. For now, the scraper will return a result that looks like this:

```json
{
  "posts": {
    "title": "",
    "link": ""
  }
}
```

### Quantity

Of course, we want all blog posts, so the previous result is not sufficient for us as it only returns one post.

This is where we utilize the quantity field to specify the number of matches we want to extract.

In the case of our "jobs" variable, we want to extract all matches. As for the nested properties "title" and "link," we only want to retain the first match.

```json
{
    "posts": [
        {
            "title": "title1",
            "link": "link1"
        },
        ...
    ],
}
```

### Selector

Selectors consist of two parts: the type and the selector itself. The selector informs the scraper about the specific element on the website that you are interested in.

If you are new to web scraping, I recommend using CSS selector type and utilizing tools like the MrScraper Chrome extension to assist you in finding the desired selectors.

Returning to our example, we will use the "article" selector for the article card and "h3 a" for the title. As the title is a link element, we will employ the same selector as the title but instead of extracting text, we will extract the href attribute that contains the URL.

```json
{
    "posts": [
        {
            "title": "How to scrape data from a website using no-code (with MrScraper)",
            "link": "https://mrscraper.com/blog/how-to-scrape-data-from-a-website-using-no-code-with-MrScraper"
        },
        ...
    ],
}
```

## Attaching parsers

As you can see, there is another field for parsers. We will discuss this in the next step.

For now, with all the scraper data and extractors created, you can click on "create" and have your first scraper ready to run!
