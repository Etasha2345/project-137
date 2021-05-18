status = "";
objects = [];

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function draw() {
    background(255);
    image(capture, 0, 0, 320, 240);

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(text);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}