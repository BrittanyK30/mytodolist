var lis = document.querySelectorAll("li");
//mouseover event loops thorough the lis and changes the selected field green
for(var i = 0; i < lis.length; i ++){
lis[i].addEventListener("mouseover", function(){
this.classList.add("selected");
});
//the mouseout event reverts the text to the original state
lis[i].addEventListener("mouseout", function(){
this.style.color = "black";
});
//done in the toggle class effectively crosses the items off of the list
lis[i].addEventListener("click", function(){
this.classList.toggle("done");
});
}
