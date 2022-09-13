 function my_add() {
    var input = document.getElementById("my_input").value;

  
    var ul = document.getElementById("ul");
    //Add checkbox to an item list:

    var checkbox = document.createElement("input")
     checkbox.type="checkbox";
     checkbox.value=1;
     checkbox.name="todo[]"

  //adding data to my list
    var li = document.createElement("li");
    var node = document.createTextNode(input);

     li.appendChild(checkbox);
     li.appendChild(node);

     ul.appendChild(li);
    

    //checking if entry value is empty
    if(input == "") {
        alert("Entry is empty");
    }else {
        document.getElementById("my_list").appendChild(li)
    }


    
      
}

