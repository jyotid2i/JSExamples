console.log("Learning AJAX")

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    //   Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //   Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1',true);
    

    //  What to do on progress  (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

/*
    xhr.onreadystatechange = function () {
        console.log(`ready state is`, xhr.readyState);

    }
*/

    //  What to do when response is ready ,callback function
    xhr.onload = function (){
       
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            //console.error("Some error occured");
            console.log("Some error occured");
        }
    }

    //  Send the request
    xhr.send();

    console.log("We are done !");
}