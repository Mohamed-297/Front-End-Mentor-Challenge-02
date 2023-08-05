let firstName=document.getElementById("fName")
let lastName=document.getElementById("LName")
let email=document.getElementById("email")
let pass=document.getElementById("pass")
let btn=document.querySelector("button")
let nameRegex=/[a-z]/ig
let emailRegex=/\w{5,}@\w+.[com|net|io|org]/ig
let passRegex=/\w{6,}/ig
let form= document.querySelector("section form")

let errFn=document.querySelector(".Name")
let errLn=document.querySelector(".lName")
let errEm=document.querySelector(".email")
let errPass=document.querySelector(".pass")



btn.onclick=()=>{
    // check for length of the first name
    btn.style.cssText="background-color:hsl(154deg 59% 51% / 50%); "
    if(firstName.value.length>=3){
            // check the first name regex or validation
            if(firstName.value.match(nameRegex)){
                console.log(`${firstName.value} Is Valid`)

            }
            // if it doesn't match the regex 
            else{
                console.log(`${firstName.value} Not Valid`)
                firstName.style.cssText="border:2px solid hsl(0, 100%, 74%);"
                firstName.appendChild(error)                
                form.appendChild(error)
                // show the error messages
                errFn.style.cssText="display:block"
            }
        }
    // if the name is less than 3 chars
        else{
            console.log(`${firstName.value} Is Not Valid, Name should contain more than or 3 characters`)
            firstName.style.cssText=`background: url("images/icon-error.svg") no-repeat 7px ;background-position: 95%;border:2px solid hsl(0, 100%, 74%);`

            // show the error messages
            errFn.style.cssText="display:block"
        }
    // check the length of the last name
        if(lastName.value.length>=3){
            // check the last name regex or validation
            if(firstName.value.match(nameRegex)){
                console.log(`${lastName.value} Is Valid`)
            }
            // if it doesn't match the regex 
            else{
                console.log(`${lastName.value} Not Valid`)
                lastName.style.cssText=`background: url("images/icon-error.svg") no-repeat 7px ;background-position: 95%;border:2px solid hsl(0, 100%, 74%);`
            
                // show the error messages
                errLn.style.cssText="display:block"
            }
        }
    // if the last name is less than 3 chars
        else{
            console.log(`${lastName.value} Is Not Valid, Name should contain more than or 3 characters`)
            lastName.style.cssText=`background: url("images/icon-error.svg") no-repeat 7px ;background-position: 95%;border:2px solid hsl(0, 100%, 74%);`
            
            // show the error messages
            errLn.style.cssText="display:block"
        }
    
        //email regex check  
        if(email.value.match(emailRegex)){
            console.log(`${email.value} is valid`)
        }
        else{
            console.log(`${email.value} Is Not Valid, email should match the regex`)
            
            // show the error messages
            errEm.style.cssText="display:block"
            email.setAttribute("value","example@yahoo.com")
            email.classList.add("red-value")    
            email.style.cssText=`background: url("images/icon-error.svg") no-repeat 7px ;background-position: 95%;border:2px solid hsl(0, 100%, 74%);`
            
        }    

         //password regex check  
        if(pass.value.match(passRegex)){
            console.log(`${pass.value} is valid`)
        }
        else{
            console.log(`${pass.value} Is Not Valid, Name should match the regex`)
            pass.style.cssText="border:2px solid hsl(0, 100%, 74%);"
            // show the error messages
            errPass.style.cssText="display:block"
            pass.style.cssText=`background: url("images/icon-error.svg") no-repeat 7px ;background-position: 95%;border:2px solid hsl(0, 100%, 74%);`
            
            //pass.appendChild(error)
        }    
        // to make the data still there 
        return false;
    }
    
    
