const  products= [{name:"book",price:20}, {name: "pen" ,price:null},{name:"notebook",price: undefined},{name:"BackPack"}];

const showCalcute = ({name,price})=>{
    const result= `name is ${name} and  price is = ${price?? 50} `; 
     console.log(result);
}

products.map((cartitem) => {
    showCalcute(cartitem);
});
