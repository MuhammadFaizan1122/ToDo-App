var assign = document.getElementById("todo");
var list = document.getElementById("list")

function dataInput() {
    // Create li text

    var li = document.createElement("li");
    var liText = document.createTextNode(assign.value)
    li.setAttribute("class", "litext")
    list.appendChild(li);
    li.appendChild(liText);
    assign.value = "";


    // Create delete button


    var dlt = document.createElement("button");
    var dltBtnName = document.createTextNode("Delete");
    dlt.setAttribute("class", "dltboton");
    dlt.setAttribute("onclick", "dltli(this)");
    dlt.appendChild(dltBtnName)



    // Create Edit Button

    var edit = document.createElement("button")
    var editText = document.createTextNode("Edit")
    edit.appendChild(editText)
    edit.setAttribute("class", "editboton");
    edit.setAttribute("onclick", "editbtn(this)")

    li.appendChild(dlt)
    li.appendChild(edit)
}

function dltli(e) {
    e.parentNode.remove()
}

function editbtn(e) {
    var editValue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue

}

function deleteAll() {
    list.innerHTML = "";
}