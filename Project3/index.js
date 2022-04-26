//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5148184deacc452896f99a5537f46f08
console.log("This is my index js file");

//   Initialize  the news api parameters
/*source = 'bbc-news';
let apiKey = `5148184deacc452896f99a5537f46f08`;*/

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


// Create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=5148184deacc452896f99a5537f46f08',true);
xhr.getResponseHeader('Content-type','application/json');

/*                           OR

// Create an ajax  get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}', true);
*/
//  What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();

let news = `<div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Collapsible Group Item #1
                        </button>
                    </h2>
                </div>
        
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                        shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                        proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                        aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                    </div>
                </div>
            </div>`