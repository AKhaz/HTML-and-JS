function postReview(){
  var reviews = document.getElementById("Reviews")
  var userReview = document.getElementById("UserReview").value;
  reviews.innerHTML = "\n";
  reviews.innerHTML += "<h3>Anonymous</h3>\n";
  reviews.innerHTML += "<p>" + userReview + "</p>";

  localStorage.setItem("lastReviewTest", userReview);
}

function loadReview(){
  var reviews = document.getElementById("Reviews")
  var userReview = localStorage.getItem("lastReviewTest");
  reviews.innerHTML = "\n";
  reviews.innerHTML += "<h3>Anonymous</h3>\n";
  reviews.innerHTML += "<p>" + userReview + "</p>";
}

function changeShippingOption(){
  var shippingOption = document.getElementById("ShippingOption");
  var optionDiv = document.getElementById("OtherSelections");

  if (shippingOption.checked){
    optionDiv.innerHTML += "<p>Unfortunately, we cannot complete this request. This product and company doesn't exist.</p>"
  }
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


  reviews.innerHTML = "\n";
  reviews.innerHTML += "<h3>Anonymous</h3>\n";
  reviews.innerHTML += "<p>" + userReview + "</p>";
}
