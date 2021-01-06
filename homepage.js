function doSomething(){
  var username = document.getElementById('UserTag').value;
  var title = document.getElementById('Title');
  var desc = document.getElementById('Desc');
  console.log(username);
  title.innerHTML = "Done! Click Again.";
  desc.innerHTML = username;
}
