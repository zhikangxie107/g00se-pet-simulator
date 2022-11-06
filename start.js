function loadName(){
  let called=document.getElementById('nym').value
  document.getElementById("storage").value=called
  document.getElementById('nym').value=''
}

function loadStart(){
  let x = new XMLHttpRequest
  x.onload=function(){
    document.getElementById("total").innerHTML = this.responseText;
  }
  x.open("GET", "start.txt");
  x.send();
}

//names goose
function goose_name(){
  let Gname=document.getElementById("storage").value
  document.getElementById("gooseName").innerHTML=Gname
}


function loadGame(){
  let x = new XMLHttpRequest
  x.onload=function(){
    document.getElementById("total").innerHTML = this.responseText;
  }
  x.open("GET", "gamepage.txt");
  x.send();
  document.getElementById("change").value=1
}

//test
function consolelog(){
  document.getElementById("test").innerHTML()
}
