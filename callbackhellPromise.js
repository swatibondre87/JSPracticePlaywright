//callbackhell
orderCoffee((coffee) => {
  console.log(coffee);
  orderSandwich((sandwich) => {
    console.log(sandwich);
    orderDonut((donut) => {
      console.log(donut);
      getBill((bill) => {
        console.log(bill);
      });
    });
  });
})


//Promise - simple version
orderCoffee()
  .then(coffee => {
    console.log(coffee);
    return orderSandwich();
  })
  .then(sandwich => {
    console.log(sandwich);
    return orderDonut();
  })
  .then(donut => {
    console.log(donut);
    return getBill();
  })
  .then(bill => {
    console.log(bill);
  });





