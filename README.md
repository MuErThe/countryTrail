# countryTrail

The basic nature of this is to allow user to login and come tho the dashboard page and select country and capital and manipulate the table rows.

## Description

The user can login to access the dashboard, with simple email and password specified in the json. Once he reaches the dashboard page the user can select the country and capital and on click of the country the capital gets selected automatically. The user can add rows, colums and remove with a custom context menu popup. and later submit and logout.

## Getting Started

### Dependencies

* Using Bootstrap, Jquery and anime js.

### Executing program

* Getting capital on click of the Country from the list
```
inp.value = this.getElementsByTagName("input")[0].value;
                  
let objCapital = data.find((o) => o.country === inp.value);

getCapital = objCapital.capital;
console.log(getCapital);
const td = e.target.parentNode.parentNode.parentNode.nodeName;
document.getElementById("capitalBox").value = getCapital;
```

## Authors

Mohammed Zabeeh ur Rahman

## Version History
* 0.1
    * Initial Release
