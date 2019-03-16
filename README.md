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
* [] Login user with POST /auth/login
	* [x] validate the user
	* [x] check if username in db
		* [x] compare password with hashed password in db
		* [] login attampts rate limiting 
		* [x] Create and sign a JWT
      * [x] Respond with JWT
* [] Create Landing Page
	* [x] Link to Sign Up Page
* [ ] Create Sign Up Page
	* [] Form with: username and password
	* [] When form is submitted
		* [x] Validate username
			* [x] Display errors
		* [x] Validate password
			* [x] Display errors
		* [x] POST request to server
			* [x] Display errors
			* [x] If succesful sign up
				* [x] Redirect to login page
* [] Create Login Page
	* [x] Form with: username and password
	* [] When form is submitted
		* [x] Validate username
			* [x] Display errors
		* [x] Validate password
			* [x] Display errors
		* [x] POST request to server /auth/login
			* [x] Display errors
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
* [] Visitors can only see the homepage
	* [] checkTokenSetUser middleware
		* [] get token from Authorization header
			* [] if defined ---
				* [] Verify the token with the token secret
				* [] Set req.user to be the decoded verified payload
			* [] else - move along
	* [] isLoggedIn middleware
		* [] if req.user is set - move along
		* [] else - send an unauthorized error message
	* [] redirect to login form
* [] Logged in users can only see their page
* [] Create notes form on client
	* [] Title
	* [] Description
* [] POST /api/v1/notes
	* [] Must be logged in
	* [] Logged in Users Can Create Notes
		* [] Title
		* [] Description -- markdown
		* [] Set user_id on server with logged in users id
* [] GET /api/v1/notes
	* [] Must be logged in
	* [] Logged in Users Can request all their notes 
		* [] Get all notes in DB with logged in users user_id
* [] List all notes on client
	* [] Render description with Markdown

* [x] GET /api/v1/checking
	* [] Checking shop name avalibilty
	* [] 
	* [] 





git pull
git add --all
git commit -m "templates added or updated "
git push




