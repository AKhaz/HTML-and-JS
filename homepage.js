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
  localStorage.setItem("ReviewJSON", JSON.stringify(myJSON));
  console.log(myJSON);

  review.innerHTML = "<h3 id = 'ReviewName'>" + myJSON["Name"] + "</h3>\n<label for = 'ReviewName' id = 'ReviewStarCount'>" + myJSON["StarCount"] + "</label>\n<hr></hr>\n<p id = 'ReviewText'>" + myJSON["Review"] + "</h3>"

  //localStorage.setItem("lastReviewTest", userReview);
}

function loadReview(){
  var review = document.getElementById("Review")
  var myJSON = JSON.parse(localStorage.getItem("ReviewJSON"));
  review.innerHTML = "<h3 id = 'ReviewName'>" + myJSON["Name"] + "</h3>\n<label for = 'ReviewName' id = 'ReviewStarCount'>" + myJSON["StarCount"] + "</label>\n<hr></hr>\n<p id = 'ReviewText'>" + myJSON["Review"] + "</h3>"
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
