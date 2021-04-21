# Portfolio
This repository contains the code for my personal website. Down below are instructions as to how you can make suitable changes to customize this to your need.


### How to customize it as per your need:
Below are detailed instructions on how to customize this to your taste in case you're new to this. I'd love to see your variations and feature them here so feel free to send them to me. Also all suggestions are welcomed. :)
#### Guide to customizing to your need:

##### 0. Setting up the environment
The site was made using create-react-app, so clone the repo and open it in your favorite code editor. Run `npm install` to download all dependencies. Run `npm start` to start the project locally on your machine.


##### 1. Changing the landing page colors:
Go to src/components/BackgroundNew/style.css

Replace "rgb(0, 207, 17) 50%, rgb(0, 135, 224) 50%" with any two colors you'd like.

##### 2. Add your name and typography:
Go to src/components/FrontPage/FrontPage.js

Replace "Arsh" with your name. You can also go ahead and change the stuff in "steps" to set what you want to see in typography.

##### 3. Add your photo
Go to src/static

Replace mainPhoto.png with your photo and remember to keep the name of your photo as mainPhoto.png

##### 4. Add your About Me
Go to src/components/AboutPage/AboutPage.js

Replace myinfo with whatever you want to. I'd suggest you dont change the post script so that people know that the component is clickable.

##### 5.Add your Socials
Go to src/components/AboutPage/AboutPage.js

Change the url in with your desired url.

##### 6. Add your Projects
Go to src/components/PortfolioPage/PortfolioPage.js

Replace project names. The url for the github repo goes in anchor tag () before the image and for the live preview goes in the second anchor tag.

### Special Thanks to:
https://www.npmjs.com/package/react-flippy

https://www.npmjs.com/package/react-typical

https://www.npmjs.com/package/react-social-icons

This project was bootstrapped with Create React App.
