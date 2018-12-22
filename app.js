const fs = require('fs');


let auth = fs.readFileSync("auth.json");
let anim = fs.readFileSync("anim.json");
let auth_token = JSON.parse(auth).auth_token;
const AuroraAPI = require('nanoleaves');
const aurora = new AuroraAPI({
    host: '192.168.86.249',
    token: auth_token
});
 
aurora.info().then(info =>
{
    console.log(info);
});

var Anesidora = require("anesidora");
 
var pandora = new Anesidora("natedog2424@cox.net", "david5");


pandora.login(function(err) {
    if (err) throw err;
    pandora.request("user.getStationList", function(err, stationList) {
        if (err) throw err;
        var station = stationList.stations[0];
        pandora.request("station.getPlaylist", {
            "stationToken": "3998223891361446696",
            "additionalAudioUrl": "HTTP_128_MP3"
        }, function(err, playlist) {
            if (err) throw err;
            var track = playlist.items[0];
            console.log("Playing '" + track.songName + "' by " + track.artistName);
            console.log(track.additionalAudioUrl);
            console.log(track.albumArtUrl);
           
        });
    });
});


aurora.addAnimation(JSON.parse(anim));