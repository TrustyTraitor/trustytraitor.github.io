function clickSpider(){

  if(document.getElementById("spideraccuse").getAttribute("src") === 'spidermanaccuse.jpeg')
  {
    document.getElementById("spideraccuse").src = "spidergotya.jpg";
  } else {
    document.getElementById("spideraccuse").src = "spidermanaccuse.jpeg";
  }

}

function spiderHover(){

  if(document.getElementById("spideraccuse").getAttribute("src") === "spidermanaccuse.jpeg"){
    alert("Spiderman cannot trust anyone, not even himself");
  } else {
    alert("Spiderman says you're ok!");
  }
}
