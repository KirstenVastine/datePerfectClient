![Image](../asset/datePerfect)

# Welcome to datePerfect App
----------------------------
*where we take the guess work out of love*
by **Jessica Bushong, Kirsten Vastine and Mansa Samlafo**

## Introduction
The purpose of the app is to create a perfect date matching app for the user based on the age, interests, activities and food that the applicant likes. The app even tells you what gift to buy your date and what topics you can discuss on your first date.

## Built with
--------------
1. Node: Used for the server application build
2. React: Incorporated in the frontend build
3. Material UI: Used for application design/styling which gave it the professional look.

## Project Planning:
Initial stages of the project was spent carefully planning the details using Tello on a high level. This was then layed out in lucid to provide a more detailed structure and allow us to see the flow of information from the server-side to the frontend and vice versa. Figma was incorporated to provide the mockup for all our app pages. Links to our project planning, diagrams and flowchart are listed below this page.

## Project Setup and Key Features
The server side with a total of 7 endpoints was first built out. This was made up of two user endpoints(login and signup) and 5 profile endpoints(create profile, view profile by id, view profile by name, update and delete). Verification and creation of tokens and JWT_SECRET were incorporated to improve the security of the application and minimize unauthorized processes on the app. 

The signin and signup section allows a user to log into th app.
The profile section is completed by the user and information from this section is collected and stored in postgres database. This is used along with logic in matching our user to the perfect date.
The update profile functionality  allows the user to make changes to their profile.
A user who decides to opt out of the dating app has the ability to delete their information from the applicaiton. This functionality automatically logs out the user. This is an added security measure we incorporated to ensure that non-users do not have the ability to see or search profiles of other users.

## Coding fact/Things you will notice
Spread throughout our code is a lot of ternaries.  
```
```<dating app ? "datePerfect app" : "not the right app">```
``` 
A lot of the functionality of the app was achieve using this logic. The React app favicon was replaced with one that we created: **VBS**.

### Planning tools
* Click [datePerfect lucid flow diagram](https://lucid.app/lucidchart/b519e946-8153-435d-86b5-eb6965800d49/edit?shared=true&page=0_0#?folder_id=home&browser=icon) to view in the browser.

* Click [datePerfect App Mockup](https://www.figma.com/file/qiPPSDMS35pkg6ZcxfDVQP/Date-Perfect?node-id=0%3A1) to view in your browser.

* Click [datePerfect Tello board](https://trello.com/b/hDpk6NEp/blue-badge-project-ideas) to view in your browser




                                                  `Elevenfifty Academy © VBS 2020`


