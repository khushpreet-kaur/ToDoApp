var seq = 0;
window.WhoAmI = "sdjhskjfnsd"
function submit() {
  var nameInfo = document.getElementById("name").value;
  var empty = "";
  document.getElementById("name").value = empty;
  if (nameInfo == "") {
    alert("Please enter any task");
  }
  else{
    console.log(nameInfo)
      seq = seq+1;
    var div = document.createElement('div');
    div.className = 'new-rect';
    div.id = "divId" + seq;
    var b = document.getElementById('disp').appendChild(div);
    b.innerHTML=seq + ". " +  nameInfo;
    var button = document.createElement('button');
    var button1 = document.createElement('button');
    button.className = "btn btn-default btn-xs";
    button1.className = "btn btn-default btn-xs";
    button1.id = "button1"
    button.innerHTML = "Done";
    button1.innerHTML = "Clear Done";
    button.onclick = doneClick;
    button1.onclick = clearClick;
    div.appendChild(button);
    div.appendChild(button1);
  }
}
function doneClick(){
  var currentDiv = this.parentNode;
  currentDiv.style.textDecoration= 'line-through';
  console.log(this.parentNode);
}

function clearClick() {
  console.log("Clear called");
  var currentDiv = this.parentNode;
  currentDiv.style.display = 'none';
  //currentDiv.remove();
}
