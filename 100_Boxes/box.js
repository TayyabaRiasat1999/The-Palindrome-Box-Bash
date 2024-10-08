

document.getElementById("root").addEventListener("load", create_100_boxes());

function top_position() {
    let top = Math.floor(Math.random() * (400-0+1)) + "px";
    return top;
}

function left_position() {
    let left = Math.floor(Math.random() * (1300-0+1)) + "px";
    return left ;
}

function colors() {
    let colors_list = ['black','pink','orange','yellow','grey','lightblue','red','violet'];

    FinalColor = colors_list[Math.floor(Math.random() * colors_list.length)];
    console.log(FinalColor);
    return FinalColor;
}



function create_100_boxes() {
    for (let i = 1; i <= 100; i++) {
        let box = document.createElement("span");
        box.style.top = top_position();
        box.style.left = left_position();
        box.style.backgroundColor = colors();
        document.getElementById("root").appendChild(box);
        box.onmouseover = function() {mouseover(this)};
    }
}

function create_50_boxes() {
    for (let i = 1; i <= 50; i++) {
        let box = document.createElement("span");
        box.style.top = top_position();
        box.style.left = left_position();
        box.style.backgroundColor = colors();
        document.getElementById("root").appendChild(box);
        box.onmouseover = function() {mouseover(this)};
    }
}

function create_100_circles(){
for (let j = 1; j <= 100; j++) {
        let box = document.createElement("span");
        box.style.top = top_position();
        box.style.borderRadius = "50px";
        box.style.left = left_position();
        box.style.backgroundColor = colors();
        document.getElementById("root").appendChild(box);
        box.onmouseover = function() {mouseover(this)};
    }
}
function create_50_circles(){
    for (let j = 1; j <= 50; j++) {
            let box = document.createElement("span");
            box.style.top = top_position();
            box.style.borderRadius = "50px";
            box.style.left = left_position();
            box.style.backgroundColor = colors();
            document.getElementById("root").appendChild(box);
            box.onmouseover = function() {mouseover(this)};
        }
    }

function create_100_random(){

   var result =Math.floor((Math.random() * 2) +1);
   if (result == 1){
   create_100_circles();
   }
   else
   create_100_boxes();
}

function mouseover(boxes) {
    let total_boxes = document.getElementById("root").childElementCount;
    console.log(total_boxes);

    if (total_boxes > 1) {
        boxes.remove();
    }
    else {
        alert("Last Child!");
    }
}

function generate(){
    if (document.getElementById('Square').checked){
        create_100_boxes();
    }
    else if (document.getElementById('Circle').checked){
        create_100_circles();
    }
    else{
        create_100_random();
    }
    
}
function generateMore(){
    create_50_circles();
    create_50_boxes();
    
}