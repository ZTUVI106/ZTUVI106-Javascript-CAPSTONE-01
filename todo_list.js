var node = 1;

window.onload = myfun();

function myfun() {
    document.getElementById('lst').innerHTML = localStorage.getItem("psList");
    node = localStorage.getItem("psNode");
    node++;
}


function psfun() {
    let values = document.getElementById('vals').value;
    
var trim= values.trim();


    if (trim==0) {
        alert("enter a value");
    }
    else {
        let ul = document.getElementById('lst');
        let list = document.createElement('li');

        list.appendChild(document.createTextNode(values));
        list.setAttribute("id", node);
        ul.prepend(list);

        let ntr = document.getElementById(node);
        console.log("node: "+ntr.innerHTML);
        ntr.innerHTML = "<input type='checkbox' class='checkBox'><label>" + ntr.innerHTML + "</label><button onclick=rmve('" + node + "');>X</button> ";
    //    console.log("ntr.innerHTML: "+ntr.innerHTML);
        node++;

        console.log("Added on NODE ID :" + list.id);
        window.localStorage.setItem('psList', ul.innerHTML);
        window.localStorage.setItem('psNode', list.id);
    }   
}


function rmve(e) {
    document.getElementById(e).remove();

    let ol = document.getElementById('lst');

    window.localStorage.setItem('psList', ol.innerHTML);
    console.log("Remove from NODE ID :" + e);
}

function empty(){
    localStorage.clear();
    console.log(localStorage);
}