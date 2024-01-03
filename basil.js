// function login(){
// var user = document.querySelector(".UserName").value
// var password = document.querySelector(".Password").value

// let loginUsers = [
//   {userName:"user1" ,
//    pass:"pass123" ,
//     age:25 ,
//      gender:"male" ,
//     phonne : "123-456-7890"
//     },
//     {userName:"user2" ,
//     pass:"abc456" ,
//      age:30 ,
//       gender:"female" ,
//      phonne : "987-654-3210"
//      }
// ]

// var result = loginUsers.find(x=>x.userName==user && x.pass==password)
// if(result){
//   alert("Logged in successfully")
//   console.log(result)
// }else{
//   alert("Wrong Name or Password")
// }
// }

// function Register(){
// var userREs = document.querySelector(".UserNameRE").value
// var passwordREs = document.querySelector(".PasswordRE").value
// var AgeRE = document.querySelector(".AgeRE").value
// var PhoneNumberREs = document.querySelector(".PhoneNumberRE").value
// var Gender = document.querySelectorAll(".Gender").value

// var Form = document.querySelector(".form")

// var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/

// var arr = [];

// var inputs = {
//  userlol : userREs,
//  passlol : passwordREs
// }

// if(passwordREs.length < 8 ){
//    if(AgeRE > 18 || AgeRE < 60 || AgeRE!=""){
//     alert("Registerd Successfully")
//     arr.push(inputs)
//     console.log(arr)
//    }
//  }else{
//   alert("wrong Inputs")
//  }

// }
// // regex.test(passwordRE)
// //  && passwordRE.length < 8 &&
// //  18<AgeRE<60 && Gender.checked!=false && PhoneNumberRE.length == 11

// // function check(){
// //   var user = document.querySelector('.UserNameRE').value
// //   var password = document.querySelector('.PasswordRE').value
// //   var AgeRE = document.querySelector('.AgeRE').value
// //   var conpass = document.querySelector('conpass').value
// //   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/
// //   var form = document.querySelector('.form');
// //   var arr = [];
// //   let inputs = {
// //     users : user,
// //     passwords : password,

// //   }
// //   if(regex.test(password)) {
// //     alert("it's ok")
// //     arr.push(inputs) 
// //     form.reset()
// //     console.log(arr)

// //   } else {
// //     alert ("not ok ");
// //     console.log("not k")
// //   }
// // }

// // lolarr  =[];
// // function lol(){
// //   var username = document.querySelector(".userlol").value
// //   var pass = document.querySelector(".passlol").value
// //   var conpass = document.querySelector(".conpasslol").value
// //   var form = document.querySelector(".myForm")
// //   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/

// //   let inputs = {
// //     names : username , 
// //     password : pass ,
// //   }
// //   if(regex.test(pass) && 5 < username.length <10 && pass === conpass){
// //     alert("KINGGGGGGGGG")
// //     lolarr.push(inputs)
// //     form.reset()
// //     console.log(lolarr)
// //   }
// //   else{
// //     alert("not OK")

// //   }
// // }

// // function loll(){
  
// //   var usernames = document.querySelector(".inputname").value
// //   var passs = document.querySelector(".inputpass").value

// //   lolarr.forEach((items)=>{
// //     if(usernames === items.names && passs === items.password){
// //       alert("login successfully")
// //     }
// //     else{
// //       alert("login failed")
// //     }
// //   })

// // }

// function Update(){
//     var username = document.querySelector(".userlol").value
//   var passlol = document.querySelector(".passlol").value

//   let Update = [
//     {userName:"user1" ,
//      pass:"pass123" ,
//       age:25 ,
//        gender:"male" ,
//       phonne : "123-456-7890"
//       },
//       {userName:"user2" ,
//       pass:"abc456" ,
//        age:30 ,
//         gender:"female" ,
//        phonne : "987-654-3210"
//        }
//   ]
//   var lol = Update.find(x=>x.userName==user)
//   if(lol)
//   {
//     alert("Updated")
//     pass.value = passlol
//     console.log(Update)
//   }else{
//     alert("Wrong")
//   }

// }