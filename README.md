# Dayli Wallpapers
## A simple Node server that delivers a daily wallpaper.
---
#### Quick deploy
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/btripoloni/daily-wallpapers)

Daily-Wallpapers is a small server that picks one image a day from a group of selected images and leaves it as a source.
This allows some program to take this font and use it to set a wallpaper.

### Available formats 
- Smarphones for now

### Running the server
- Clone the server, install the packages by running NPM.
- Create a **images** and a **wallpappers** at the root folder of the project.
- And run the Express server

`node server.js -p 3000`

### Defining the Image Group.
Choose the images you will make available for wallpapers and put them in the "images" folder

### How are the wallpapers made?
On each request the server will get the time and if there is no image for that day, the Code will generate a new image for that day and delete the previous day's image, otherwise the server will send the image that was generated that day.