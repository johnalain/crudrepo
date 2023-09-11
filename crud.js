// get total
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

//console.log("title,price,taxes,ads,discount,total,count,category,submit");
//tillnow ok
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "rgb(163, 88, 88)";
  }
}

// create product
//https://builtin.com/software-engineering-perspectives/json-stringify
//let dataPro ;
let dataPro;
if (localStorage.product != null) {
  dataPro = JSON.parse(localStorage.product);
} else {
  dataPro = [];
}

submit.onclick = function () {
  let newPro = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  dataPro.push(newPro);
  localStorage.setItem("product", JSON.stringify(dataPro));
  clearData();
  showData();

  //till now ok
  // let obj = JSON.stringify(newPro);
  // console.log(obj);
  // if(localStorage.product != null){
  //   dataPro = JSON.parse(newPro);
  // }else{
  //   dataPro = [];
  // }
  // dataPro.push(newPro);
  // localStorage.setItem("product", JSON.stringfy(newPro));
  // console.log(newPro);
  //   //till now ok
};
//https://linuxhint.com/json-parse-stringfy-explained/
//https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/
// const myInfo = {
//   Name: "GFG",
//   Age:22,
//   Department : "Computer Science and Engineering",
//   Year: "3rd"
// }
// const Obj = JSON.stringify(myInfo);
// console.log(Obj)

//save localStorage
//clear inputs
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}
//read
function showData() {
  let table = "";
  for (let i = 0; i < dataPro.length; i++) {
    table += `
    <tr>
                    <th>${i}</th>
                    <th>${dataPro[i].title}</th>
                    <th>${dataPro[i].price}</th>
                    <th>${dataPro[i].taxes}</th>
                    <th>${dataPro[i].ads}</th>
                    <th>${dataPro[i].discount}</th>
                    <th>${dataPro[i].category}</th>
                    <th><button id="update"> update </button></th>
                    <th><button onclick="deleteData(${i} )" id="delete"> delete </button></th>
                </tr>
    `;

    //  till now ok 1.17.22 time
  }
  document.getElementById("tbody").innerHTML = table;
  let btnDelete = document.getElementById("deleteAll");
  if (dataPro.length > 0) {
    btnDelete.innerHTML = `
     <button>delete all</button>
    `
  }
}
showData();
//count
//delete
function deleteData(i) {
  dataPro.splice(i, 1);
  localStorage.product = JSON.stringify(dataPro);
  showData();
}
// //update
// //search
// //clean data


