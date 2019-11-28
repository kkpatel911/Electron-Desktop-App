// const path = require("path");
const { desktopCapturer } = require("electron");
const path = require("path");
const fs = require("fs");
var createHash = require("hash-generator");

// // Button that takes screenshot
const screenShotButton = document.getElementById("notifyBtn");

// console.log("Kishan");
screenShotButton.addEventListener("click", function(e) {
  let options = {
    types: ["screen"],
    thumbnailSize: {
      width: screen.width,
      height: screen.height
    }
  };

  desktopCapturer.getSources(options, (err, sources) => {
    if (err) {
      return console.log(err);
    }
    sources.forEach(function(source) {
      console.log(source);
      if (source.name === "Entire Screen") {
        const screenShotPath = path.join(
          __dirname,
          `../assets/screenshots/${createHash(4)}.png`
        );

        fs.writeFile(screenShotPath, source.thumbnail.toPNG(), err => {
          console.log(err);
        });
      }
    });
  });

  //   // console.log(event);
  var myNotification = new window.Notification("Confirmation", {
    body: "The screenshot has been saved",
    icon: path.join(__dirname, "../assets/images/icon.jpg")
  });
});

var button = document.getElementById("notifyBtn");
setInterval(function() {
  button.click();
  console.log("Cliked");
}, 60000);

console.log("Kishan");
