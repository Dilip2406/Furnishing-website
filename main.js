function myNav(){
    
    let bar=document.getElementById("bar");
    let nav=document.querySelector(".navigation")
    bar.onclick=()=>{
        if (nav.style.right == "0%")
        {
            nav.style.right="-50%";
            bar.src="pic/menu.png";

        }

        else{
            nav.style.right = "0%";
            bar.src="pic/x.png";

        }
    }
}
myNav();


function myHeader()
{
    var currentPageURL = window.location.href;
  
  
  if(currentPageURL.indexOf('login.html') !== -1){

    document.querySelector('header').style.cssText="position:static; background-color:rgb(106,105,106);"
    document.querySelector('body').style.cssText="height:100%; overflow-y: hidden;";


    document.querySelector('footer').style.cssText="height: 100px; position: sticky; top:auto; bottom: 70px;"

    document.getElementById('content').style.cssText="min-height: calc(90% - 120px); "





    return;
  }
  if((currentPageURL.indexOf('shop.html') !== -1))
  {
    document.querySelector('header').style.cssText="background-color:rgb(106,105,106);"
    document.querySelector('body').style.cssText="position:relative; height:70%;";


    document.querySelector('footer').style.cssText="height: 100px; width:100% ;position: absolute; bottom: 70px;"

    document.getElementById('content').style.cssText=" overflow-y:auto  "


    

  }
  

    let header=document.getElementById("header");
    let lamp=document.getElementById("lamp");
    window.addEventListener("scroll",function()
    {
        if(window.scrollY>0)
        {
            header.classList.add("active");
           
            lamp.src="pic/bulb2.png";

        }
        else
        {
            header.classList.remove("active");
            lamp.src="pic/bulb.png";
        }
    })

}
myHeader();

function myBars(){
    let bars = document.querySelector("#bar");
    let nav = document.querySelector(".navigation");
    bars.onclick = function(){
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bars.src = "pic/menu.png"
        }else{
            nav.style.right = "0%";
            bars.src = "pic/x.png"
        }
        nav.classList.toggle("new")
    }
    
    
}
myBars()

function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box ");
    plus.onclick = ()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "pic/pause.png"
        }else{
            videos.pause();
            player.src = "pic/play.png"
        }
    }
}
myVideo();

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"
        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }

}
toTop();

function submitForm() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;


    var namecheck=/^[a-zA-Z0-9]+$/;
    var passcheck=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#]).{8,}$/;

    if(namecheck.test(user) && passcheck.test(pass)){
        document.getElementById("message").innerHTML = '<div class="alert alert-success mt-3" role="alert">Login successful!</div>';

    } else {
        document.getElementById("message").innerHTML = '<div class="alert alert-danger mt-3" role="alert">Invalid username or password!</div>';
    }

}