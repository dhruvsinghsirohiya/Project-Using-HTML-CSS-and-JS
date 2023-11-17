console.log("JS Working");
let tableBody = document.querySelector("tbody");
let submit = document.querySelector("#submit");
let quantity = document.querySelector("#quantity");
let currency = document.querySelector('select[name="currency"]');

const populate = async (val, curr) => {
     let myCurr = ""
    url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_FpKZ7ZPkT6IadtOBmu2zPYRLHZhHP3Wpq3fVaUfP&base_currency=${curr}`;

    let response = await fetch(url);
    let detail = await response.json();
    // console.log(detail);
    document.querySelector(".output").style.display = "block";
    for(let key of Object.keys(detail["data"])){

        myCurr += `

        <tr>
            <td>${key}</td>
            <td>${detail["data"][key]["code"]}</td>
            <td>${detail["data"][key]["value"]*val}</td>
        </tr>
        ` 
        // console.log(detail["data"][key]["code"])
    }
    
            tableBody.innerHTML = myCurr;
       

  
}


submit.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        // console.log("HIi");
        
        populate(quantity.value, currency.value);
    }
)

