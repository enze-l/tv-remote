const chromecast_api = require("chromecast-api");
const chromecast = new chromecast_api()
const media = {url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}

chromecast.on('device', (device) => {
    console.log(device)
    device.play(media, () => {
        device.pause()
        device.setVolume(.5, () => {
            device.close()
            console.log("done")
            process.exit()
        })
    })
})
