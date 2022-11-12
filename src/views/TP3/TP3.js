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
      <ListContainer
        initialItems={products}
        ListItem={TP3}
        AddForm={CartForm}
      />
      {/* <componentDidMount/> */}
      
    </>

    
  );
}
