# Dayli Wallpapers
## A simple Node server that delivers a daily wallpaper.
---
#### Quick deploy
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/btripoloni/daily-wallpapers)

Daily-Wallpapers is a small server that picks one image a day from a group of selected images and leaves it as a source.
This allows some program to take this font and use it to set a wallpaper.

### Available formats 
- Smarphones 1080x1920
- PC 1920x1080

### Running the server
- Clone the server, install the packages by running NPM.
- Create these folders at the root folder of the project.
  -  portrait
  -  landscape
  -  wallpapers
- And run the Express server

`node server.js -p 3000`

### Defining the Image Group.
Choose the images you will make available for wallpapers and put them in the "portrait" or "landscape" folder

### How are the wallpapers made?
On each request the server will get the time and if there is no image for that day, the Code will generate a new image for that day and delete the previous day's image, otherwise the server will send the image that was generated that day.