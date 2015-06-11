var seq = 0;
window.WhoAmI = "sdjhskjfnsd"
function submit() {
  var nameInfo = document.getElementById("name").value;
  console.log(nameInfo)
    seq = seq+1;
  var div = document.createElement('div');
  div.className = 'new-rect';
  div.id = "divId" + seq;
  var b = document.getElementById('disp').appendChild(div);
  b.innerHTML=nameInfo;
  var button = document.createElement('button');
  button.className = "btn btn-default btn-sm";
  button.innerHTML = "Done";
  button.onclick = doneClick;
  div.appendChild(button);
}
function doneClick(){
  var currentDiv = this.parentNode;
  currentDiv.style.textDecoration= 'line-through';
  console.log(this.parentNode);
}
