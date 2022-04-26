console.log("Learning AJAX")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');

    //   Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    /* //   Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1',true);
    */


    //USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type', 'application/json');   

    //  What to do on progress  (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    /*
        xhr.onreadystatechange = function () {
            console.log(`ready state is`, xhr.readyState);
    
        }
    */

    //  What to do when response is ready ,callback function
    xhr.onload = function () {

        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            //console.error("Some error occured");
            console.log("Some error occured");
        }
    }

    //  Send the request
    params = `{"name":"test","salary":"123","age":"123"}`;
    xhr.send(params);

    console.log("We are done !");
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler(){

    console.log('You have clicked the pop Handler');

    //   Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //   Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees',true);


    //  What to do when response is ready ,callback function
    xhr.onload = function () {

        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');

            str ="";

            for(key in obj){
                str +=`<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else {
            //console.error("Some error occured");
            console.log("Some error occured");
        }
    }

    //  Send the request
    xhr.send();

    console.log("We are done fetching employees!");
}