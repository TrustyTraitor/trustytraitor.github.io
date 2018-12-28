function clickSpider(){

  if(document.getElementById("spideraccuse").getAttribute("src") === 'spidermanaccuse.jpeg')
  {
    document.getElementById("spideraccuse").src = "spidergotya.jpg";
  } else {
    document.getElementById("spideraccuse").src = "spidermanaccuse.jpeg";
  }

}
