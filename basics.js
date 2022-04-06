document.getElementById('demo').innerHTML="INDEX PAGE IS WORKING";

function datacheck()
{
    console.log("WORKING this FUNCTION");

    var email = document.getElementById("emailID").value;

    var textarea = document.getElementById("textArea1").value;

    console.log("EMAIL ID :",email);

    console.log("TEXT :",textarea);

    var data1 = document.createTextNode(email);

    var data2 = document.createTextNode(textarea);

    var li1 = document.createElement("li");

    var li2 = document.createElement("li");

    li1.className = "list-group-item";

    li2.className = "list-group-item";
    
    li1.appendChild(data1);
    
    li2.appendChild(data2);

    document.getElementById("listdata").appendChild(li1);

    document.getElementById("listdata").appendChild(li2);
}