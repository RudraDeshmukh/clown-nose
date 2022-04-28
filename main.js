nosex=0;
nosey=0;
var clown_nose_img;

function preload(){
    clown_nose_img=loadImage("https://i.postimg.cc/JnN6Zy4Z/clown-nose.png");
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotResults)
}

function gotResults(results){
    if(results.length>0){
        console.log(results)
        console.log("Nose x = "+ results[0].pose.nose.x)
        console.log("Nose y = "+ results[0].pose.nose.y)
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
    }
}

function modelloaded(){
    console.log("model is loaded")
}

function draw(){
image(video,0,0,300,300)
fill(255,0,0);
stroke(255,0,0);
circle(nosex,nosey,20)

image(clown_nose_img,nosex-15,nosey-15,30,30)


}

function take_snap(){
    save('student.jpg')
}