import ListContainer from "../../components/ListContainer";
import { useEffect, useState } from "react";
import CartForm from "./TP3form";

function TP3({ item }) {
  return (
    <>
      <div>
      {item.model} ({item.brand}) année: {item.years} km: {item.kms} prix: {item.price}€ -
    </div>
    </>
  );
}
function componentDidMount() {
  // POST request using fetch with set headers
  const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token',
          'My-Custom-Header': 'foobar'
      },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  fetch('http://localhost:5000/cars', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
}


export default function Cart() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>Nos véhicules !</h1>
      <ListContainer
        initialItems={products}
        ListItem={TP3}
        AddForm={CartForm}
      />
      <componentDidMount/>
      
    </>

    
  );
}
