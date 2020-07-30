class Login{
    constructor(){
        this.message = createElement("h2");
        this.name_msg = createElement("h4");
        this.nameBox = createInput("");
        this.password_msg = createElement("h4")
        this.password = createInput('', 'password');
        this.logInbutton = createButton("Log In");
        this.signUpbutton = createButton("Sign In")
        this.bg_log = loadImage("pictures/bg/bg.jpg");


    }

    bg(){
        background(this.bg_log);
    }

    display(){
       console.log("hi")
        this.message.position(displayWidth/2-110,displayHeight-500);
        this.message.style('color:white')
        this.message.html("WELCOME SOLDIER! PLEASE LOG IN");
        
       //fill("white")
       //fontSize("15")
        //text("WELCOME SOLDIER! PLEASE LOG IN",displayWidth/2,displayHeight-300)
     
        this.name_msg.position(displayWidth/2,displayHeight-300);
        this.name_msg.html("Name");
        this.name_msg.style('color:white')

        this.nameBox.position(displayWidth/2,displayHeight-250);

        this.password_msg.position(displayWidth/2,displayHeight-200);
        this.password_msg.html("Password")
        this.password_msg.style('color:white')

        this.password.position(displayWidth/2,displayHeight-150)

        this.logInbutton.position(displayWidth/2,displayHeight-100)

        this.signUpbutton.position(displayWidth/2,displayHeight-50)

        this.signUpbutton.mousePressed(()=>{
            signIn= new SignIn();
            signIn.signUp();

            
        })
        this.logInbutton.mousePressed(()=>{
           
            var Name = this.nameBox.value();
            var playerref = database.ref('Madara/'+ Name+'/');
            playerref.on("value",(data)=>{
                var logIndetails = data.val();
                var Name = this.nameBox.value();
                var Password = this.password.value();
                
                if(Name===logIndetails.Name && Password === logIndetails.Password){
                    console.log("login is success ")
                }
            },showError);
         

        })

    }
    hide(){
        this.message.hide();
        this.name_msg.hide();
        this.nameBox.hide();
        this.password_msg.hide();
        this.password.hide();
        this.logInbutton.hide();
        this.signUpbutton.hide();
      
    }
    show(){
        this.message.show();
        this.name_msg.show();
        this.nameBox.show();
        this.password_msg.show();
        this.password.show();
        this.logInbutton.show();
        this.signUpbutton.show();
      
    }
   
}

function showError(){
    console.log("error")
}