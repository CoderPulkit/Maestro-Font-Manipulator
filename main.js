noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
differnece=0;

function modelLoaded() {
    console.log('PoseNet is Initialized'); 
     }

     function gotPoses(results)
    { 
     if(results.length > 0) 
      { 
          console.log(results);
          noseX=results[0].pose.nose.x; 
          noseY=results[0].pose.nose.y;

          console.log("Nose X="+ noseX+"Nose Y"+noseY);

          
          rightWristX=results[0].pose.rightWrist.x;
          leftWristX=results[0].pose.leftWrist.x;
          differnece=floor(leftWristX-rightWristX);
          console.log("Diff="+differnece);
      }
}

function setup() { 
    video = createCapture(VIDEO);
    video.size(550, 500); 
    canvas = createCanvas(550, 450);
    canvas.position(560,160);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function draw(){
        background('#001061');
        fill('yellow');
        textSize(differnece);
        text('Maestro',50,400);
    }
    