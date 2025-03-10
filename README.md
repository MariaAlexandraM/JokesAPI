# JokesAPI

## Description
This project uses CSS, HTML5 and Javascript to display jokes, calling an existing API (https://sv443.net/jokeapi/v2) and using the categories as filters (Christmas, Miscellaneous etc.) 
When a page is accessed for the first time, a Loading animation is shown for 2 seconds, and then the jokes are loaded the exact amount being specificied upon calling the API. 

## Functionalities
### Hover to reveal the joke

There are two types of jokes: single liners and two parts, having Setup and Delivery. When the user hovers over the `twopart` joke card, the Delivery part is shown.
(see in the picture: first vs second card)
![image](https://github.com/user-attachments/assets/fc362123-545c-4836-8f06-2221d1d6ad2c)


### Report

Each card has a Report button. After clicking it, the user can cancel the action, and if not, the joke card gets colored and the report button disappears. This property is lost upon reloading the page or accesing another one.
![image](https://github.com/user-attachments/assets/ee9316e5-86c8-428e-97d0-857c24f86e91)
![image](https://github.com/user-attachments/assets/cb6aab92-a2b5-45fb-9864-a81e3a33f30b)

