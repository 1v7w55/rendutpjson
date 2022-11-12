import React from "react";
export default function TP3form() {
const form1 = document.querySelector('.form');
if(form1){
form1.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form1);
  const data = Object.fromEntries(formData);
  
  fetch('http://localhost:5000/cars', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(res=>res.json())
  .then(data=>console.log(data))
  .then(error=>console.log(error))
});
}
  return (
    <form class="form">
      <label for="brand">
        <strong>BRAND</strong>
        <input type="text" name="brand" placeholder="brand" />
      </label>
    <br></br>
      <label for="model">
        MODEL
        <input type="text" name="model" placeholder="model" />
      </label>
      <br></br>
      <label for="years">
        YEARS
        <input type="number" name="years" placeholder="years" />
      </label>
      <br></br>
      <label for="kms">
        KMS
        <input type="number" name="kms" placeholder="kms" />
      </label>
      <br></br>
      <label for="price">
        PRICE
        <input type="number" name="price" placeholder="price" />
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
