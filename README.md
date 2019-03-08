# Auth for Mido

Add JWT-based authentication to a Node/Express/Mongo/Vue app.

## Authentication
* [x] Create Server
* [x] Add auth router
* [x] Create user with POST /auth/signup
	* [x] validate required fields
	* [x] Check if username is unique
	* [x] hash password with bcrypt
	* [x] insert into db
* [ ] Login user with POST /auth/login
	* [] validate the user
	* [] check if username in db
		* [] compare password with hashed password in db
		* [] Create and sign a JWT
      * [] Respond with JWT
* [] Create Landing Page
	* [x] Link to Sign Up Page
* [ ] Create Sign Up Page
	* [] Form with: username and password
	* [] When form is submitted
		* [] Validate username
			* [] Display errors
		* [] Validate password
			* [] Display errors
		* [] POST request to server
			* [] Display errors
			* [] If succesful sign up
				* [] Redirect to login page
* [] Create Login Page
	* [x] Form with: username and password
	* [] When form is submitted
		* [] Validate username
			* [] Display errors
		* [] Validate password
			* [] Display errors
		* [] POST request to server /auth/login
			* [] Display errors
			* [] If succesful login
				* [] Store the token in localStorage
				* [] Redirect to the "dashboard"
* [] If a logged in user visits the signup or login page, redirect them to the dashboard
* [] If a non logged in user visits the dashboard, redirect to the login page
* [] After sign up, immediately login
* [] Show username on dashboard
* [ ] On homepage, show go to dashboard button instead of signup/login button
* [ ] If logged in:
	* [ ] Show logout button in header
	* [ ] Show user icon and username in header

### Authorization:
* [x] Visitors can only see the homepage
	* [x] checkTokenSetUser middleware
		* [x] get token from Authorization header
			* [x] if defined ---
				* [x] Verify the token with the token secret
				* [x] Set req.user to be the decoded verified payload
			* [x] else - move along
	* [x] isLoggedIn middleware
		* [x] if req.user is set - move along
		* [x] else - send an unauthorized error message
	* [x] redirect to login form
* [x] Logged in users can only see their page
* [x] Create notes form on client
	* [x] Title
	* [x] Description
* [x] POST /api/v1/notes
	* [x] Must be logged in
	* [x] Logged in Users Can Create Notes
		* [x] Title
		* [x] Description -- markdown
		* [x] Set user_id on server with logged in users id
* [x] GET /api/v1/notes
	* [x] Must be logged in
	* [x] Logged in Users Can request all their notes 
		* [x] Get all notes in DB with logged in users user_id
* [x] List all notes on client
	* [x] Render description with Markdown
