lolarr  =[];
function lol(){
  var username = document.querySelector(".userlol").value
  var pass = document.querySelector(".passlol").value
  var PhoneNumber = document.querySelector(".phonelol").value
  var Age = document.querySelector(".agelol").value
  var form = document.querySelector(".myForm")
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/

  let inputs = {
    names : username , 
    password : pass ,
    ages : Age ,
    number : PhoneNumber
  }
  if(regex.test(pass) && 5 < username.length <10 ){
    alert("KINGGGGGGGGG")
    lolarr.push(inputs)
    form.reset()
    console.log(lolarr)
  }
  else{
    alert("not OK")

  }
}

function loll(){
  
  var usernames = document.querySelector(".inputname").value
  var passs = document.querySelector(".inputpass").value

  lolarr.forEach((items)=>{
    if(usernames === items.names && passs === items.password){
      alert("login successfully")
    }
    else{
      alert("login failed")
    }
  })
}
function Update(){
    var username = document.querySelector(".UpdateName").value
  var passlol = document.querySelector(".Updatepass").value

  console.log(lolarr)
  lolarr.forEach((lol)=>{
    if(lol.userName == username){
      alert("Updated")
      pass.value = passlol
      console.log(Update)
    }else{
      alert("Wrong")
    }
  
  })
}