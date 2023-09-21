function myFunction(){
    document.getElementById("demo").innerHTML = "This is demo script";
    
}

function dirFunction(){
    
    var elements = document.getElementsByClassName("super");

    // Loop through all the elements with the class "demo" and change their content
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = "This is super script";
    }

}