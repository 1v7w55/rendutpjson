import React from "react";
export default function TP3form() {
    const asyncPostCall = async () => {
    const rawResponse = await fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        brand: "BRANDS", 
        model: "MODEL",
        years:2021,
        kms: 0,
        price: 0,
         }),
    });
    const content = await rawResponse.json();

    console.log(content);
};
  return (
    <form >
      <label for="model">
        <strong>First Name:</strong>
        <input type="text" name="model" id="model" />
      </label>

      <label for="brand">
        Last Name:
        <input type="text" name="brand" id="brand" />
      </label>

      <input type="submit" onClick={asyncPostCall} value="Create new user" />
    </form>
  );
}
