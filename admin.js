
let users=localStorage.getItem("users");
users=JSON.parse(users);
if(users == null){
  users=[];
}



let users_data ="<table '1' style= 'border-collapse:collapse'>"
for (user in users){
console.log(typeof users[user]);
let registrant= JSON.parse(users[user]);
console.log(registrant);
users_data+="<tr>"
users_data+="<td>"+registrant["username"]+"</td>"+
"<td>"+registrant["email"]+"</td>"+
"<td>"+registrant["phone"]+"</td>"+
"<td>"+registrant["qualify"]+"</td>"+
"<td>"+registrant["course"]+"</td>"+
"<td>+<button>Edit</button></td><td><button>Delete</button></td>"
users_data+="</tr>"

}

users_data+="</table>"
// console.log(users_data);
document.getElementById("data").innerHTML=users_data;

function Delete(user){
  localStorage.removeItem(user);
}
s



// users_data+='<table>'
// for (user in users){

// let registrant=(users[user]);
// users_data+="<tr>";
// users_data+="<td>"+registrant["username"]+"</td>"+
// "<td>"+registrant["email"]+"</td>"+
// "<td>"+registrant["phone"]+"</td>"+
// "<td>"+registrant["qualify"]+"</td>"+
// "<td>"+registrant["course"]+"</td>"+
// "</tr>"

// }

// users_data+="</table>"

// document.getElementById("data").innerHTML=users_data;



       