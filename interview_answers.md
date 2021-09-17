# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

If a user enters valid credentials (e.g. correct username and password), the server can issue a token. These tokens are strings of cryptic text that can be stored on the client side. Now, the user can access protected resources as the server can continue to read the token and know the user has been validated. This way, a user ony has to login once--instead of entering a username and password when viewing different pages/information throughout the site. Tokens can be removed after a set amount of time, or by the user logging out. 

2. What steps can you take in your web apps to keep your data secure?

Authentication is critical in keeping web apps secure. Issuing tokens is a great way of making sure a user is authorized. Setting up private routes is also necessary. These routes can only be accessed if a valid token is set in session storage or local storage. Protecting API calls by attaching an Authorization: token header to every request also ensures an authenticated user is accessing the appropriate information.

3. Describe how web servers work.

"Web Server" can either mean a computer that stores code for a website or a program that runs on that computer (i.e. the hardware, the software, or both working together). The hardware or computer itself stores web server software and all of the files(ex. HTML, CSS, JS) that combined together make up the website. The software controls how web users access these files.  When a computer is connected to the internet, it can locate the server using a URL and domain name. An HTTP request is sent to the server and the server can accept the request and find the requested information, sending it back through HTTP. If the request is rejected or information is not found, the server can send back an error response.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C (create) = POST
R (read) = GET
U (update) = PUT/PATCH
D (delete) = DELETE