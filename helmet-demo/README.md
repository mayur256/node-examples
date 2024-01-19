# helmet-demo
- Helmet is a javascript library that can be used to add a layer of security over your web application built with express or similar libraries.
- Generally we see that frameworks or libraries like Express and other define a set of non-standard HTTP headers that may expose some sensitive information.
- For example: **X-Powered-By** header represents the framework that was used to generate the response for a request.
- It is recommended not to expose headers like above and others for security reasons.

## How helmet secures web app
- Helmet prevents your Express powered web app from exposing headers that may reveal sensitive information.
- With that it potentially shields your app from common security threats like XSS, clickjacking, Content Security Policy vulnerabilities, and other security issues.
