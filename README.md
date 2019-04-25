### Interactive Frontend Development Milestone Project  

WhereTo is a website that was designed to help people to plan trips by making it easy and simple. With a map interactive map, you can search for places such as hotels, restaurants, and bars. Making it a great helper for when you are planning your next trip, making sure are able to choose the best spots to visit and arrange accommodation without any unwanted surprises.

### UX

WhereTo is for people who are looking for a easy way to plan there trips to anywhere in the world, letting them choose a country, a city input bar, and a location filter, allowing them to select between different locations, such as hotels, bars, restaurants, all with useful information being displayed in an intuitive and easy manner.

#### User Stories

* As a user, I may not be sure where I would want my next trip to be, making it helpful if some Youtube video links to get hints and ideas of nice places to visit and then use this website to gather more information. 
* As a user, I may want to search specifics locations, such as restaurants, car rental companies, making it easier for me to plan my trip.
* As a user, I want to be able to use a reset button to clear input fields in the map section and zoom out from the city selected.
* As a user, I may want to get in contact if I have any doubts about the website or get in contact with the developer.

### Features

* The project allows people that want to plan a trip to use a map where they can choose a destination and within the city chosen, to find certain key locations, making it a simple and easy way to help them plan their vacation.
* The project has Youtube videos that show people who haven't decided where to go, the best travel destinations in various continents.
* The project has a contact form that can be used by users to get in contact with the developer, to ask questions, report bugs or for companies looking to advertise their own websites within the WhereTo page. After pressing the send email button, an alert will appear on the window, telling the user if the form was sent successfully or not.

### Future features 

* A route planner, allowing users to add pinpoints for routes they would want to take. Example: Leave the airport, go to a restaurant and after the hotel they chose to stay in.
* Advertisement from websites that sell airplane tickets, travel agencies, allowing the user to quickly see prices of making a trip to the selected country.

### Technologies Used

* [JQuery](https://jquery.com "JQuery Homepage")

  * The project uses JQuery to simplify DOM manipulation.    


* [Bootstrap](https://getbootstrap.com/ "Bootstrap Homepage")  

  * The project uses Bootstrap to allow for maximum responsiveness on various screen sizes.   


* [Font Awesome](https://fontawesome.com "Font Awesome Homepage")  

   * The project uses Font Awesome to be able to use icons for social media links.


* [Google Fonts ](https://fonts.google.com "Google Fonts Homepage")

  * The project uses Google Fonts to apply the fonts used on the website. 

* [Google Maps JavaScript API ](https://developers.google.com/maps/documentation/javascript/tutorial "Google Maps API")

  * The project uses Google Maps JavaScript API to allow users to search for the cities and places of their choice.
    
  * The project uses Google Maps Places library enables the website to search for places and present information about them.
 

### Testing

* The HTML and CSS files were tested by using the W3C Mark Validator Service by direct input of the files on the validator.
* To test the responsiveness of the website in phones, tablets, and desktops screens, I was used the Chrome Developer Tools, verifying how the site reacted in different screen sizes.
* The JavaScript files were tested using JSLint by direct input of the files on the validator.
* The test for the Youtube video was done manually, testing if they would load and play correctly. The test was made by playing each one separately and verifying they worked.
* To test that the emails were being sent correctly I filled the form sent several emails to make sure it was working, verifying if the alert box would pop up to inform the user if the form had been sent or not.
* To make sure the reset button was functioning properly, I tested how it would react once it was clicked when displaying search results for all separate countries. Making sure the input field for the city would be cleared, the map would clear all markers and zoom out to the country selected.

#### User Stories

* As a user, I may not be sure where I would want my next trip to be, making it helpful if some Youtube video links to get hints and ideas of nice places to visit and then use this website to gather more information. 
* As a user, I may want to search specifics locations, such as restaurants, car rental companies, making it easier for me to plan my trip.
* As a user, I want to be able to use a reset button to clear input fields in the map section and zoom out from the city selected.
* As a user, I may want to get in contact if I have any doubts about the website or get in contact with the developer.

#### Bugs

* Had issues with the markers not clearing after selecting a new country or city, fixed by adding the clearMarkers function.
* The email input bar in the contact form was accepting texts without the addition of "@", fixed by changing the input type to "email".
* Had problems with the alert message not showing when the contact form was submitted. Fixed by removing the "console.log" from inside the sendMail function.
* Had issues of the contact form not resetting after the form was submitted fixed it by assigning the "getElementById" inside to the reset function.


### Deployment

The project was developed using the Cloud9 IDE. With every new feature or changes made to the code, the files were added and committed to the local repository. After that, pushed and added to my Github repositories. The project was deployed using GitHub pages.


#### To run the website, simply click the link presented below

(https://luccabbombo.github.io/Interactive-Frontend-Project/)

#### Credits

The base code used for the map was acquired from Google Developers documentation.

##### Media

The videos used in the webpage where embedded from Youtube.
The image used for the map container background was found on Google images.

##### Acknowledgements

I would like to thank the Code Institute students, mentor, and tutors.
