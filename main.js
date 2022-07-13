sus= "";
lol= "";
lwx= "";
lwy= "";
rwx= "";
rwy= "";

function preload() {
    sus= loadSound("Amogus.mp3");
    lol= loadSound("buntystay.mp3");
}

function setup() {
    canvas= createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    posenet= ml5.poseNet(video, modlod);
    posenet.on("pose", gotpose);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#bad5ff');
    stroke('#3383ff');
}

function modlod() {
    console.log("posenet is ready!!!! (^~^)/")
}

function gotpose(results) {
    if(results.length > 0) {
        lwx= results[0].pose.leftWrist.x;
        lwy= results[0].pose.leftWrist.y;
        console.log("left wrist x= " + lwx + "left wrist y= " + lwy);
        rwx= results[0].pose.rightWrist.x;
        rwy= results[0].pose.rightWrist.y;
        console.log("right wrist x= " + rwx + "right wrist y= " + rwy);
    }
}