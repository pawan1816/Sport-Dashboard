let details=document.querySelector(".details");



async function start(){
    const data= await fetch("https://jsonplaceholder.typicode.com/users");
    const Response= await data.json();
    document.getElementById("userData").innerHTML=Response.map((user)=>
        `<tr>
         <td>${user.name}</td>
         <td>${user.email}</td>
         <td>${user.username}</td>
         <td>${user.website}</td>
         <td>${user.phone}</td>
        </tr>`
    ).join("");
    
}


// window.onload = function(){
    
// }
start();