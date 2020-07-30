var database,signIn,login;
function setup(){
  database = firebase.database();
  createCanvas(displayWidth,displayHeight+200);
  login=new Login();
  
  login.display();
}
function draw(){

  login.bg();
}