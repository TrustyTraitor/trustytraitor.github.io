function enterCommand(event)
{
  if(event.keyCode == 13)
  {
    var output = document.getElementById("Output");
    var input = document.getElementById("inputTextBox");
    var command = input.value;
    const path = "C:\\Users\\MichaelG>  ";

    input.value = "";

    var textNode = document.createElement("P");
      textNode.innerHTML = path + command;

      output.appendChild(textNode);
  }
}

var checkCommand = function(command)
{
  switch(command)
  {
    case "help":
      return "\ntest\ntest2";
    default:
      return "\nCommand is not recognized as an internal or external command";
  }
}
