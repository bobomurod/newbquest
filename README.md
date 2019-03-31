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
- [] Login user with POST /auth/login
  _ [x] validate the user
  _ [x] check if username in db
  _ [x] compare password with hashed password in db
  _ [] login attampts rate limiting
  _ [x] Create and sign a JWT
  _ [x] Respond with JWT
- [x] Create Landing Page \* [x] Link to Sign Up Page
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
      _ [x] Store the token in localStorage \* [x] Redirect to the "dashboard"
- [x] If a logged in user visits the signup or login page, redirect them to the dashboard
- [x] If a non logged in user visits the dashboard, redirect to the login page
- [x] After sign up, immediately login
- [] Show username on dashboard
- [ ] On homepage, show go to dashboard button instead of signup/login button
- [ ] If logged in:
      _ [ ] Show logout button in header
      _ [x] Logout function \* [ ] Show user icon and username in header

### Authorization:

- [] Visitors can only see the homepage
  _ [] checkTokenSetUser middleware
  _ [] get token from Authorization header
  _ [] if defined ---
  _ [] Verify the token with the token secret
  _ [] Set req.user to be the decoded verified payload
  _ [] else - move along
  _ [] isLoggedIn middleware
  _ [] if req.user is set - move along
  _ [] else - send an unauthorized error message
  _ [] redirect to login form
- [] Logged in users can only see their page
- [] Create notes form on client
  _ [] Title
  _ [] Description
- [] POST /api/v1/notes
  _ [] Must be logged in
  _ [] Logged in Users Can Create Notes
  _ [] Title
  _ [] Description -- markdown \* [] Set user_id on server with logged in users id
- [] GET /api/v1/notes
  _ [] Must be logged in
  _ [] Logged in Users Can request all their notes \* [] Get all notes in DB with logged in users user_id
- [] List all notes on client \* [] Render description with Markdown

- [x] GET /api/v1/checking
      _ [] Checking shop name avalibilty
      _ [] \* []

- [] Generating standalone shop with constructor
  _ [] Front-end
  _ [] Valid constructor
  _ [] Shopping cart constructor form
  _ [] Fields: Shop name, domain, min one item with price and photo, tel contacts message form \* [] "Buy" button and cart functionality

      	* [] Back-end
      		* [] Getting constructor data with POST method
      		* [] Store form data to MongoDB collection
      		* [] Generate virtual page with stored data
      		* [] Setup subdomain by shop name
      		* [] Simple warehouse functionality

## Admin page

- [] Admin page that list all users
  _ [] Admin table with user_id
  _ [] de activate users
- [] Admin can see any page on site
- [] Rate limiting
  _ [] Prevent brute force logins
  _ [] Lock out accounts after too many login attamps
- [] Password strength meter

* [] reCaptcha for Signup/Login

git pull
git add --all
git commit -m "templates added or updated "
git push
