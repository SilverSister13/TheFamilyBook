var cover = "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg"

var names = [
    "My Father: Deepak Kolagad",
    "My Mother: Reshma Kolagad",
    "My Sister: Simran Kolagad",
    "Me: Naila Kolagad"];

  
  var images = [
    "https://easydrawingguides.com/wp-content/uploads/2021/01/Cartoon-Dad-Step-11.png",
    "https://static7.depositphotos.com/1007989/760/i/600/depositphotos_7601771-stock-photo-homemade-dish.jpg",
    "https://i.pinimg.com/736x/99/bd/11/99bd115d730e68729ed7f5afdb9410ed.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOZG3LOJbWiyuDmjY2LCTna41nS9GdYDFGQ&usqp=CAU"];
  
    var i = 0;
  function nextimage(){
    document.getElementById("images").src = images[i];
    document.getElementById("names").innerHTML = names[i]; 
    i++

  }

  
  