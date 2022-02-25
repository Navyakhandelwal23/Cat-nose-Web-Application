noseX=0
noseY=0

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/VNVQ8jfN/CAT-NOSE-removebg-preview.png")
}

function setup(){
    canvas= createCanvas(300,300)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet= ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("poseisloaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
        noseX=results[0].pose.nose.x-50
        noseY=results[0].pose.nose.y-50
    }
}

function draw(){
    image(video,0,0,300,300)
    image(clown_nose,noseX,noseY,100,100)

}

function take_snapshot(){
    save("filterNameImage.png")
}