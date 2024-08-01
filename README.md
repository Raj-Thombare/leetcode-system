demonstration of how leetcode uses messaging queues and pub subs into their backend systems

Let’s initialize a simple Node.js express server that takes a problem submission (very similar to leetcode) as input and sends it to the queue
Let’s also create a worker service that picks up a problem, waits for 2 seconds and then proceeds to pick the next one

![Leetcode System](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Ffe4355d5-b9ca-4671-8a72-825123f9c124%2FScreenshot_2024-04-07_at_4.39.59_PM.png?table=block&id=97d9f40d-e54f-4a18-b749-539397806a4e&cache=v2)


