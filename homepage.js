function postReview(){
  var name = document.getElementById("UserReviewName").value;
  var review = document.getElementById("Review");
  var userReview = document.getElementById("UserReview").value;
  //Star Count
  star1 = document.getElementById("1Star");
  star2 = document.getElementById("2Star");
  star3 = document.getElementById("3Star");
  star4 = document.getElementById("4Star");
  star5 = document.getElementById("5Star");

  var starString = "";

  if (star1.checked){
    starString = "&#9733;";
  }
  else if (star2.checked){
    starString = "&#9733;&#9733;";
  }
  else if (star3.checked){
    starString = "&#9733;&#9733;&#9733;";
  }
  else if (star4.checked){
    starString = "&#9733;&#9733;&#9733;&#9733;";
  }
  else if (star5.checked){
    starString = "&#9733;&#9733;&#9733;&#9733;&#9733;";
  }

  myJSON = {
    "Name" : name,
    "StarCount" : starString,
    "Review" : userReview,
  }
  JSONList = JSON.parse(localStorage.getItem("ReviewJSONList"));
  if (JSONList == null){
    console.log("Is null");
    JSONList = [];
  }
  //JSONList = localStorage.getItem("ReviewJSONList");
  JSONList.push(myJSON);
  console.log(JSONList);
  localStorage.setItem("ReviewJSONList", JSON.stringify(JSONList));
  console.log(localStorage.getItem("ReviewJSONList"));

  review.innerHTML += "<h3 id = 'ReviewName'>" + myJSON["Name"] + "</h3>\n<label for = 'ReviewName' id = 'ReviewStarCount'>" + myJSON["StarCount"] + "</label>\n<p id = 'ReviewText'>" + myJSON["Review"] + "</h3><hr></hr>"

  //localStorage.setItem("lastReviewTest", userReview);
}

function loadReview(){
  var review = document.getElementById("Review")
  var JSONList = JSON.parse(localStorage.getItem("ReviewJSONList"));
  for (i in JSONList){
    var myJSON = JSONList[i];
    //console.log(myJSON);
    review.innerHTML += "<h3 id = 'ReviewName'>" + myJSON["Name"] + "</h3>\n<label for = 'ReviewName' id = 'ReviewStarCount'>" + myJSON["StarCount"] + "</label>\n<p id = 'ReviewText'>" + myJSON["Review"] + "</h3>\n<hr></hr>"
  }
  //var JSON = JSON.parse(localStorage.getItem("ReviewJSON"));
}

function resetReviews(){
  JSONList = [];
  localStorage.setItem("ReviewJSONList", JSON.stringify(JSONList));
}

function changeProductType(){
  var image = document.getElementById('ProductImage')
  smallOption = document.getElementById("Small");
  mediumOption = document.getElementById("Medium");
  largeOption = document.getElementById("Large");

  if (smallOption.checked){
    image.src = "images/box2.jpg";
  }
  else if (mediumOption.checked){
    image.src = "images/box1.jpg";
  }
  else if (largeOption.checked){
    image.src = "images/box3.jpg";
  }
}
