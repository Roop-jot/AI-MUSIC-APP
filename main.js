song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;
function preload()
{
    song = loadSound("Happy_rotter.mp3");
    song = loadSound("peter_pan.mp3")
}
function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide; 
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(0, 0, 200, 200);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreRightWrist > 0.2)
    {
        song.play("Happy_rotter.mp3");
    }
    if(scoreLeftWrist > 0.2)
    {
        song.play("peter_pan.mp3");
    }
}
function plaY()
{
    song.play()
}
function stoP()
{
    song.stop()
}
function modelLoaded(){}
function gotPoses(results)
{
    circle(leftWristX, LeftWristY, 20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);
}