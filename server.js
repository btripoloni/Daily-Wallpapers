const express = require("express");
const app = express();
const Jimp = require("jimp");
const fs = require("fs");
const { DateTime } = require("luxon");
const path = require('path')

// Make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", async (request, response) => {
  response.sendFile(path.join(__dirname, "/views/index.html"));
});


/*
 The logic:
 Eveytime that you request the wallpaper the code look for a image made in the actual day.
 if find one Express will send the file.
 if not, will generate a new one save the file and send the buffer.
*/ 
app.get("/smartphone.jpg", async (request, response) => {
  const now = DateTime.now();
  const today_file_name = `/${now.day}-${now.month}-${now.year}.jpg`
  const file_path = path.join(__dirname, 'wallpapers', today_file_name)
  if(fs.existsSync(file_path)){    
    response.sendFile(file_path)
  }else{
    //Check if a file from Yesterday exists and Delete before generate a new image for Today.
    const yesterday = now.minus({ hours: 24 })
    const yesterday_file_name = `/${yesterday.day}-${yesterday.month}-${yesterday.year}.jpg`
    const yesterday_file_path = path.join (__dirname, 'wallpapers', yesterday_file_name)
    if(fs.existsSync(yesterday_file_path)){
      fs.unlink(yesterday_file_path, (err) => {
        if (err) throw err;
      });
    }

    fs.readdir('./images', async (err, images) => {
        if (err) throw err

        var index = Math.floor(Math.random() * images.length);
      
        var wallpaper = await Jimp.read(__dirname + '/images/'+ images[index]).then((img) => {
          img.cover(1080, 1920)
          img.getBuffer(Jimp.MIME_JPEG, function(err, buffer){
            response.set("Content-Type", Jimp.MIME_JPEG);
            response.send(buffer);
          })
          img.write(file_path)
        }) 
    })

  }
});

// listen for requests :)
var port = process.env.PORT || 3000;

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

