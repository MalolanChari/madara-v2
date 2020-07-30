class SignIn{
    constructor(){
        this.message = createElement("h2");
        this.name_msg = createElement("h4");
        this.nameBox = createInput("");
        this.password_msg = createElement("h4")
        this.password = createInput('', 'password');
       
        this.signUpbutton = createButton("Sign In")
      


    }

    signUp(){
        login.hide();
        this.display();

    }

    display(){
       
        this.message.position(displayWidth/2-110,displayHeight-500);
        this.message.style('color:white')
        this.message.html("WELCOME SOLDIER! PLEASE SIGN IN");
        
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

        
        this.signUpbutton.position(displayWidth/2,displayHeight-50)

        this.signUpbutton.mousePressed(()=>{
            var Name = this.nameBox.value();
            var Password = this.password.value();

             var playerref = database.ref('Madara/'+ Name+'/');
             playerref.set({
                 Name : Name,
                Password: Password
             })
            this.hide();
            login.show(); 
            login.display();
             
        })
    }
    hide(){
        this.message.hide();
        this.name_msg.hide();
        this.nameBox.hide();
        this.password_msg.hide();
        this.password.hide();
        
        this.signUpbutton.hide();
      
    }
}