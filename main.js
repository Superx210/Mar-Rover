var array_background = ["Mars_pic_1.jpg", "Mars_pic_2.jpg", "Mars_pic_3.jpg", "Mars_pic_4.jpg"];
var random_number = Math.floor(Math.random() * 4);
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image = array_background[random_number];
rover_image = "rover.png";
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);


function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87') {
        up();
        console.log("up");
    }
    if (keyPressed == '83') {
        down();
        console.log("down");
    }
    if (keyPressed == '65') {
        left();
        console.log("left");
    }
    if (keyPressed == '68') {
        right();
        console.log("right");
    }

}

function up() {
    if (rover_y >= 0) {
        rover_y -= 10;
        console.log("When up arrow is pressed x=" + rover_x + "y=" + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y += 10;
        console.log("When down arrow is pressed, x= " + rover_x + "y= " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x -= 10;
        console.log("When left arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x += 10;
        console.log("When right arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}