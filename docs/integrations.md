---
title: Integrations
sidebar_position: 7
slug: /integrations
---

# Integrations

MrScraper can integrate smoothly into any workflow.

---

At this point, you need to decide how you want to work with the data.

Some people choose to download the results and manually process them. However, in scenarios involving a large amount of data or real-time requirements, integration is necessary. You can add the results to a database, Google Sheet, or even send them by email.

## Available integration options

There is an infinite number of integrations you can make with your scrapers. To provide flexibility and cover various scenarios, we currently have three available methods of integration:

### Webhooks

Webhooks are great because they send information in real-time as soon as a scraper has finished.

Most people use webhooks to integrate the results of scraping with their own applications using their favorite programming language.

There are also no-code apps such as Zapier or Make.com that accept incoming webhooks and enable you to build powerful integrations.

### API

In contrast to webhooks, the API works the other way around. Your application or no-code app can request information from MrScraper at any time by performing an API call.

This is mostly used when real-time is not needed or when we have to check information that is not sent by the webhooks.

### No code apps

No-code apps are a combination of the previous two options, but made easy for non-technical people.

Apps such as Zapier or Make.com allow you to receive webhooks or perform API requests without having any programming knowledge.

Furthermore, MrScraper has an official Zapier app to make things even easier without having to write a single line of code.

## Let's integrate our scraper

We will use the scraper we just created to add MrScraper blog posts to a Google Sheet.

### Create a new Zap

Create or log in to your Zapier account and create a new Zap.

### Add the MrScraper app

First of all, we'll need to create the step that triggers the new Zap. Select the MrScraper app and choose the "New Result" event.

Once MrScraper has a new scraping result ready, it will trigger this zap.

![Integrations tutorial](/img/integrations1.png)

### Convert the results to line items

The next step is to transform the scraping results into a format that Zapier can understand, referred to as "line items."

We will utilize the Zapier code tool to generate a JSON object from the scraping results.

![Integrations tutorial](/img/integrations2.png)

### Add to the database

Lastly, we will save the posts to a database. In this example, we will utilize Zapier's new databases, which make it incredibly easy to store information.

Create a database, add the columns for title and link, and attach it to this final step.

![Integrations tutorial](/img/integrations3.png)

## And we are done!

![Integrations tutorial](/img/integrations4.png)

Integrating your scraper is as simple as that. There are lots of possibilities the limit is your imagination!
