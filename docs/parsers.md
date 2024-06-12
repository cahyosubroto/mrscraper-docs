---
sidebar_position: 6
slug: /
---

# Parsers

Clean and modify the extracted data before saving or working with it.

---

The parsing and cleaning step comes after the extraction. While there might be easier scenarios where parsing is not required, it is a common practice for most scrapers.

Consider a scenario where you need to extract an email address from a long paragraph of text, and there's only one selector wrapping the text. In this case, you can easily add a regex parser to remove all the unnecessary text and keep only the email address.

## Creating parsers

As you might know at this point, parsers are attached directly to each extractor.

We can create parsers from two places. First, from the dedicated parsers menu on the left sidebar. Or directly in the extractor form using the "+" button which opens a modal window with the same form.

There are parsers for many use cases. For example you can add or remove text, remove whitespace, lower/uppercase, etc.

For the sake of the example, we are going to create a parser to replace mrscraper.com domain with another example.com domain.

### Parser type

Select the parser type "text to text". This parser is going to look for the given text and replace it with the new value.

### Name your parser

Add a descriptive name for your internal reference. For example, we will give this parser the name of "Replace MrScraper domain".

### Text to replace

The text we want to replace: "mrscraper.com".

### Replacement text

The new text we want to append: "example.com".

## Attaching the parser

If you used the inline form, the parser will be automatically attached to the extractor.

If you created the parser in its section, go back to your scraper, find the parsers input and search and click the newly created parser.

Once you run the scraper, the previous extractions should be now:

```json
{
    "posts": [
        {
            "title": "How to scrape data from a website using no-code (with MrScraper)",
            "link": "https://example.com/blog/how-to-scrape-data-from-a-website-using-no-code-with-MrScraper"
        },
        ...
    ],
}
```

## Time to work

Now that we have the information it's time to work with it. In the next step we explain how you can integrate your extractions.
