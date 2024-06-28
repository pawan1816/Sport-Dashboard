let details=document.querySelector(".details");



const tofetch = async()=>{
    const data= await fetch("http://3.223.98.72:1337/api/students");
    const response= await data.json();
    console.log(response);
    console.log("hello");
}


// window.onload = function(){
    
// }
tofetch();