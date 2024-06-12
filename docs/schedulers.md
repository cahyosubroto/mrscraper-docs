---
sidebar_position: 8
slug: /
---

# Scheduler

Utilize the powerful built-in scheduler to automate your scraper's recurrence and save time.

---

Imagine I'm a really fast writer and I publish a blog post every morning at 9 am. We don't want to push the scrape button every day, right?

For this particular reason, we have a powerful built-in scheduler that we can use to set up any kind of recurrence for your scrapers.

## Scheduling our scraper

If you have followed the example workflow in this guide, you should know that we have built a scraper to get all MrScraper blog posts.

Let's also suppose that I do not publish new articles on the weekends. So we only need to scrape the blog once every weekday at 10 am.

### Step by step

1. Navigate to the scraper and click on the "Schedule" tab.
2. Once in the "Schedule" tab, enable the scheduler by toggling on the button.
3. Select your timezone for your convenience.
4. First, select "selected minutes only" from the minutes dropdown, and then choose 0 to run once in the desired hour.
5. In the hours selector, choose "Selected hours only" and then select 10 am.
6. To finish, select weekdays from Monday to Friday.

![Scheduler tutorial](/img/scheduler1.png)

## Conclusion

We should now see the exact description of what we were looking for, and now the system will execute the scraper for us.

![Scheduler tutorial](/img/scheduler2.png)
