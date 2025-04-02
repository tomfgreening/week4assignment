🧪 Build a Full-Stack Guestbook

Reflection
This week's project was another challenging task, but I was determined to tackle this head-on and not get discouraged by my recent performance in other assignments (new year, new me and all that). 

I will now go through each user story and user requirements from the brief and discuss how I got on with each.

🐿️ As a user, I’d like to fill out a working form so that I can submit my information effectively and without issues. 

I have created a form on the client with different boxes and a submit button. The submissions are logged into the console with no issues (as far as I know). There was an issue initially with the data storing in the URL, but I used the event.preventDefault(); line to stop this behaviour.

🐿️ As a user, I want the application to work as expected on my mobile device so that I can access and use it conveniently on the go.

I have used media queries to change the view when viewing on a device with a width of 768px or fewer. I don't think I've done this right, media queries are something I need to revise, but I do understand what they are used for.

🐿️ As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users.

This is something that I did not get on well with, I wrote out the correct (I think) code, but I simply could not GET the data from my database. Hours of troubleshooting did not help, please can I get some feedback on what I was doing wrong here please.

🐿️ As a developer, I want to create a working API POST route so that users can send data to the server and store it.

Same as above.

🐿️ As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.

I created a database with some dummy data on SQL. I quite enjoyed using SQL and look forward to using it again.

🎯 Ensure your HTML form is working and submitting data into the database as expected.

I think my form is working as intended. 

🎯 Confirm that your project is functional on multiple screen sizes using either media queries or dynamic CSS styling.

I have used media queries to make the page viewable on mobile devices. I went into this project thinking I was confident with CSS, but I feel a bit out of practice, so I will be trying to incorporate CSS more into my workshop tasks, to keep me sharp. 

🎯 Create a working GET API route in your server.

My API route does not appear to be working at present.

🎯 Create a working POST API route in your client.

Same as above.

🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.

I have made a database of dummy data in SQL.

In general, I feel okay about this week's project. I certainly encountered some frustration’s and parts of my project do not work entirely as intended, but I don't feel completely lost by any of the subjects. I decided not to actively pursue the stretch goals for this week, and I feel better for doing so.


Please see my Trello board for planning documents and resources.

EDIT ON 14/01/2025 - My connection issue was that I was not using the pooler URL from Supabase, I was using the direct connection URL.


Overview
This week you’ve been learning about clients and servers, and most importantly, how to get them to communicate with each other. In it’s most simple sense, a server hosts/collects data that the client will then display. You’ve been learning about the fundamentals of CRUD applications, which are a major part of being a web developer.

This week you’re going to make a ‘Guestbook’, like the ones in hotels, for users to leave a message for other users.

Make sure you take some time to look at the submission instructions, as they’re slightly different form previous weeks.

Topics
HTTP Methods: Get
HTTP Methods: Post
Node.js: Express servers, routing
JavaScript: Events, Fetch, DOM Manipulation, Async/Await Functions
Databases: SQL, Postgres (pg)
Server-side Packages: Express, Postgres, dotenv, CORS
Vite: Modern Frontend Tooling for JavaScript
Resources
Express Docs: app.get()
Express Docs: app.post()
Express Routing
MDN: Event Listeners
W3: HTML DOM Element appendChild()
MDN: appendChild() method
MDN: Using the Fetch API
MDN: fetch() Method
MDN: async Functions
SQL Cheat Sheet
W3: SQL Tutorial
Express Docs
PostgreSQL Tutorial
Node: dotenv
MDN: Cross-Origin Resource Sharing (CORS)
Vite: Getting Started
Instructions
User Stories
🐿️ As a user, I’d like to fill out a working form so that I can submit my information effectively and without issues.
🐿️ As a user, I want the application to work as expected on my mobile device so that I can access and use it conveniently on the go.
🐿️ As a developer, I want to create a working API GET route so that I can retrieve data from the server and display it to the users.
🐿️ As a developer, I want to create a working API POST route so that users can send data to the server and store it.
🐿️ As a developer, I want to create and seed a database with dummy data so that I have realistic test data for development purposes.
Requirements
🎯 Ensure your HTML form is working and submitting data into the database as expected.
🎯 Confirm that your project is functional on multiple screen sizes using either media queries or dynamic CSS styling.
🎯 Create a working GET API route in your server.
🎯 Create a working POST API route in your client.
🎯 Seed your database with realistic-looking ‘dummy’ data through the Supabase query editor or a seed file in your server. Ensure that this is saved and submitted (in a screenshot or seed file form) so it can be marked and tested efficiently.
Assignment Support
Here is some pseudo-code…

How to Deploy
Deploying a project with a client and a server is a bit more complicated than it has been in previous weeks. We can’t rely on GitHub pages as we have been previously. Today, we will use Render to deploy the client and the server individually. Aim to deploy on Render when you have enough time afterwards to debug any potential problems, which will be listed in the production logs.

To begin, ensure your project has been pushed to GitHub. Then, go to Render. You should already have an account at this point, but if not, make an account (or sign-in through GitHub).

The following is for deploying a mono-repo, meaning both the client and the server files are in one folder together. If you’ve not made a mono-repo, the deployment instructions are the same, except you don’t have to alter the ‘root directory’.

Deploying the Server
Click ‘+ New’ and choose ‘Web Service’.
If you haven’t already, connect your GitHub repositories to Render. Select the intended project and click ‘Connect →’.
Now, we should see a page with a few sections. Here’s what we need for the server side:
Root Directory: server (or whatever you named the server)
Start Command: node server
Environment variables: add anything in your server-side .env file in here.
Now, you can ‘Deploy Web Service’!
Check your server is working as expected, and make sure to change any localhost links in your client-side code for the render server URL.
Deploying the Client
Click ‘+ New’ and choose ‘Static Site’.
Select the same project and click ‘Connect →’.
Here is what we need in the section page for the client side:
Root Directory: client (or whatever you named the client)
Build Command: npm install && npm run build (this is assuming you’ve created a Vite client-side)
Environment variables: add anything in your client-side .env file in here.
Now, you can ‘Deploy Static Site’!
Stretch Goals
To achieve an 8/8 in your assignment, aim to achieve all of the requirements, plus some extra goals for each section of the marking rubric. This can be excellence in styling or something that demonstrates creativity or innovation in the week’s topics.

Below are some examples of stretch goals and user stories that you could add to your project, but are not expected to.

Stretch User Stories
🐿️ As a user, I want additional functionality on the form such as form validation so that I can have a more interactive experience when submitting my information.
🐿️ As a user, I want the website to be visually impressive and user-friendly so that it provides a pleasant browsing experience.
🐿️ As a user, I would like to be able to delete posts.
🐿️ As a user, I would like to be able to like messages so I can show my appreciation to other users.
Stretch Requirements
🏹 Provide additional functionality on the form, for example, by adding form validation or other options.
🏹 Style the page excellently, for example, by adding extra UX considerations or animations.
🏹 Add a delete button to each message and a DELETE route in the server.
🏹 Create an option for users to like others’ posts.
Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
Submission Instructions
Please submit the server URL, client URL, your GitHub repository link and a screenshot of your Database Schema (and Query Editor, if it was used).

How to send your database schema:
In Supabase, select the project you have connected to this application.
In the menu, go to ‘Database’.
Then, go to ‘Schema Visualiser’.
Take a screenshot of the tables you’ve used and save it in your files.
On Moodle, in your submission, click the image icon and follow the instructions.
Please note that from this week onwards, the mark scheme will not be split into 2 sections: Web Fundamentals and Programming Logic. Each section is worth 4 marks each, totalling 8 marks overall.
