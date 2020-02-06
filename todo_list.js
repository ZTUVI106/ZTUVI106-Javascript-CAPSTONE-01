// const inp_key = "list_key";
// const list_out;
// // = $('#inner_list').val(); 
// const inp_value;

// $(document).ready(function () {

//     // console.log(inp_key);

//     $('#add_btn').click(function () {
//         const inp_value = $("#inp_box").val();
//         const key =  inp_key;
//         const value =  inp_value;
//         window.localStorage.setItem("list_items",value);
//          console.log(localStorage);
//         // alert(inp_key);
//         // console.log("key :-"+key);
//         // console.log("value:- "+value);

//     })
// })


// $(document).ready(function () {
//     $('#add_btn').click(function () {
//         const inp_value = $('#inp_box').val();
//         $('#inner_list').val(inp_value);
//         console.log(inp_value);
//     })
//     // const inp_key = "list_key";

// })




// alert("ok");
// const key = inp_key.value;
// const value = inp_value.value;

// console.log(key);
// console.log(value);


// var inpVal =$('#inp_box').val();
// for(i=0; 1<=)
//         window.localStorage.setItem("list_items",inpVal);
//         console.log(localStorage);

//     });
// })






//........

// let x = 0;
// const  listArr = Array();   // creating array

// function setAndShow() {

//     listArr[x] = document.getElementById("inp_box").value;
//     console.log("input value:- " + listArr[x]);
//     alert(`Element: ${listArr[x]} Added at index ${x}`);

//     let key ="" + x+"";
//     console.log("before storing key " + key);
//     console.log("before storing val of x " + x);
//     var value = JSON.stringify(listArr[0]);

//     localStorage.setItem(key, value);   //storing to localStorage

//     document.getElementById("inp_box").value = "";
//     console.log(localStorage.getItem(0));
//     x++;
//     console.log("after storing key " + key);
//     console.log("after storing val of x " + x);
//     console.log(".......................................");
//     // console.log(localStorage.getItem());
//     // console.log(localStorage);


// };


var myArr = [];

function setAndShow() {
    var inpVal = document.getElementById('inp_box').value;

    myArr.push(inpVal);
    console.log(myArr);
    var pval = "";

    for (var i = 0; i < myArr.length; i++) {

        pval = pval + myArr[i] + "<br/>";


        localStorage.setItem("key", JSON.stringify(myArr));
        var string;
        string = localStorage.getItem("key");
        var strings = JSON.parse(string);
        document.getElementById("inner_list").innerHTML = strings;
        // document.getElementById()

    }
    // console.log(inpVal + " at " + i-1);
    // var string=JSON.stringify(myArr);
    // console.log("stringified "+string);
    // console.log("parsed "+JSON.parse(string));
     document.getElementById('inner_list').innerHTML = pval;
}

function clear_ls() {
    localStorage.clear();
    location.reload();
    console.log(localStorage);
}




