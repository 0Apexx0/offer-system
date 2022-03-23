# offer-system
a page showing some offer to be claimed by user 

## models user
- products ( to show the products in the homepage)
- user (to store the user by whom offer was / will be claim)
- claim (contain its own objID to store the data of user claim which offer)

## Features 
- products already added in the database so you dont have to do it , if you want your own product change the database with your local database and add product in it.
- offer can be claimed only once by one user.
- if user try to claim it again then the error pop up will shown.
- pop up on login and logout
- validations on signup page

## Technology Used
- node.js
- express
- mongoose
- passport-local-strategy
- flash messages
- express-session
- express-ejs-layouts
- ejs

## Get Started 
- clone the project
- open terminal on same folder and write command :
- - npm install
- then write the second command :
-  - npm start
-  it will work on http://localhost:8000
- signup using your credentials it will redirect you to the login page
- login then start claiming the product

## api calls

### api : https://documenter.getpostman.com/view/19046380/UVsSNig6


## Note

- layout.ejs show some error(due to usage of noty flash message there) but it will work fine. there is no issue with it 

