import ListContainer from "../../components/ListContainer";
import { useEffect, useState } from "react";
import CartForm from "./TP3form";

function TP3({ item }) {
  return (
    <>
      <li>{item.model} ({item.brand})
      <ul>
      <li>année: {item.years} </li>
      <li>km: {item.kms}</li> 
      <li>prix: {item.price}€ </li>
      <button>Supprimer {item.id}</button>
      </ul>
      </li>
    </>
  );
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
    <ul>
      <ListContainer
        initialItems={products}
        ListItem={TP3}
        AddForm={CartForm}
      />
      {/* <componentDidMount/> */}
      </ul>
    </>

    
  );
}
