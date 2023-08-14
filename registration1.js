function save() {
  
   console.log("save called");
   let users=localStorage.getItem("users");
   users=JSON.parse(users);
   if(users == null){
     users=[];
   }
   

  // var username=document.getElementById('username').value;
  // //console.log(username)
  

  // var email=document.getElementById('email').value;
  // //console.log(email)

  // var phone=document.getElementById('phone').value;
  // //console.log(phone)

  // var qualify=document.getElementById('qualify').value;
  // //console.log(qualify)

  // var course=document.getElementById('course').value;
  // //console.log(course)

  var user = JSON.stringify( {
  username : document.getElementById('username').value,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value,
  qualify: document.getElementById('qualify').value,
  course:document.getElementById('course').value,
  });
   
   users.push(user);
   localStorage.setItem("users", JSON.stringify(users));
    // window.location.href='thankyou.html';
   }
       