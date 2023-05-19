/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____________________ Student ID: ______________ Date: ________________
*
********************************************************************************/ 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const serverVerb =["GET","GET","GET","POST","GET","POST"]
const serverPaths =["/","/about","/contact","/login","/panel","/logout"]
const serverResponses =["Welcome to WEB700 Assignment1","This assignment was prepared by Alexander Thomas","Alexander Thomas:ajathomas@myseneca.ca","User Logged In","Main Panel","Logout Complete"]

function httpRequest(httpVerb,path){
    for(i=0;i<= serverPaths.length;i++){
        if (serverVerb[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
      
        return `404: Unable to process ${httpVerb} request for ${path}`;
}
    
console.log(httpRequest("GET", "logout"));

function automateTests(){
    const testVerbs =["GET","POST"]
    const testPaths =["/","/about","/contact","/login","/panel","/logout","randompath1","randompath2"]
    function randomRequest(){
        const randVerb = testVerbs[Math.floor(Math.random() * testVerbs.length)];
        const randPath = testPaths[Math.floor(Math.random() * testPaths.length)];
        result = httpRequest(randVerb, randPath);
        console.log(result);
     
    }
    const intervalID =   setInterval(randomRequest,1000);
}

automateTests()