# Auth for Mido

Add JWT-based authentication to a Node/Express/Mongo/Vue app.

## Authentication

- [x] Create Server
- [x] Add auth router
- [x] Create user with POST /auth/signup
      _ [x] validate required fields
      _ [x] Check if username is unique
      _ [x] hash password with bcrypt
      _ [x] insert into db
- [ ] Login user with POST /auth/login
  - [x] validate the user
  - [x] check if username in db
  - [x] compare password with hashed password in db
  - [ ] login attampts rate limiting
  - [x] Create and sign a JWT
  - [x] Respond with JWT
- [x] Create Landing Page
- [x] Link to Sign Up Page
- [x] Create Sign Up Page
      _ [x] Form with: username and password
      _ [x] When form is submitted
      _ [x] Logout function
      _ [ ] Show user icon and username in header

### Authorization:

    	* [x] Validate username
    		* [x] Display errors
    	* [x] Validate password
    		* [x] Display errors
    	* [x] POST request to server
    		* [x] Display errors
    		* [x] If succesful sign up
    			* [x] Redirect to login page

- [x] Create Login Page
      _ [x] Form with: username and password
      _ [x] When form is submitted
      _ [x] Validate username
      _ [x] Display errors
      _ [x] Validate password
      _ [x] Display errors
      _ [x] POST request to server /auth/login
      _ [x] Display errors
      _ [x] If succesful login
      _ [x] Store the token in localStorage
      _ [x] Redirect to the "dashboard"
- [x] If a logged in user visits the signup or login page, redirect them to the dashboard
- [x] If a non logged in user visits the dashboard, redirect to the login page
- [x] After sign up, immediately login
- [ ] Show username on dashboard
- [ ] On homepage, show go to dashboard button instead of signup/login button
- [ ] If logged in:
      _ [ ] Show logout button in header
      _ [x] Logout function
      _ [ ] Show user icon and username in header

### Authorization:

- [ ] Visitors can only see the homepage
  - [ ] checkTokenSetUser middleware
  - [ ] get token from Authorization header
  - [ ] if defined ---
  - [ ] Verify the token with the token secret
  - [ ] Set req.user to be the decoded verified payload
  - [ ] else - move along
  - [ ] isLoggedIn middleware
  - [ ] if req.user is set - move along
  - [ ] else - send an unauthorized error message
  - [ ] redirect to login form
- [ ] Logged in users can only see their page
- [ ] Create notes form on client
  - [ ] Title
  - [ ] Description
- [ ] POST /api/v1/notes
  - [ ] Must be logged in
  - [ ] Logged in Users Can Create Notes
  - [ ] Title
  - [ ] Description -- markdown
        [ ] Set userid on server with logged in users id
- [ ] GET /api/v1/notes
  - [ ] Must be logged in
  - [ ] Logged in Users Can request all their notes
  - [ ] Get all notes in DB with logged in users userid
- [ ] List all notes on client -
- [ ] Render description with Markdown

- [x] GET /api/v1/checking
      _ [ ] Checking shop name avalibilty
      _ [ ]

- [ ] Administration (Users)
  - [ ] Show users
  - [ ] Show each user detailed
  - [ ] Update, Delete, Edit userinfo
  - [ ] Text search for users

- [ ] Administration (Shops)
  - [ ] Show shops
  - [ ] Show each shop detailed
  - [ ] Update, Delete, Edit shopinfo
  - [ ] Text search for shopname

- [ ] Generating standalone shop with constructor
  - [ ] Standalone constructor in Vue
  - [ ] NGINX configuration to redirect SUBDOMAIN requests
  - [ ] Catch subdomain in Vue and pass it to server
  - [ ] Use template from Saidalo
  - [ ] Build another template in Vuejs
  - [ ] Search func

- [ ] Main screen change

- [ ] Reg (Store) shop in DB
  - [ ] Front-end
  - [ ] Valid constructor
  - [ ] Shopping cart constructor form
  - [ ] Fields: Shop name, domain, min one item with price and photo, tel contacts message form
  - [ ] "Buy" button and cart functionality
  - [ ] Uploading image functionality

    _ [ ] Back-end
    _ [ ] Getting constructor data with POST method
    _ [ ] Store form data to MongoDB collection
    _ [ ] Uploading image functionality
    _ [ ] Store image on disk
    _ [ ] Store image path in db
    _ [ ] Generate virtual page with stored data
    _ [ ] Setup subdomain by shop name 
		_ [ ] Check subdomain is not busy
    	_ [ ] Change HOSTS file
    	_ [ ] Change NGINX configuration
    	_ [ ] Simple warehouse functionality

- [ ] Collection statistics
  - [ ] Sub task

## Admin page

- [ ] Admin page that list all users
  - [ ] Admin table with userid
  - [ ] de activate users
- [ ] Admin can see any page on site
- [ ] Rate limiting
  - [ ] Prevent brute force logins
  - [ ] Lock out accounts after too many login attamps
- [ ] Password strength meter

* [ ] reCaptcha for Signup/Login






## Shops model in DB

name - unique shop name
title  -  shop title
subdomain  - unique shop domain (subdmain)
theme - name or number of theme selected by user
about  -  text about shop
contacts  -  merchant's contacts
{
        "shop": {
                "name": "marketshop",
                "title": "good market very best",
                "subdomain": "marketshop"
                "theme": "1"
                "about": "We do our best to take your money",
                "contacts": "tel:1232456454, email@email.com"
        }
}