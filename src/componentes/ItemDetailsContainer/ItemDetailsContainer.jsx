import "./ItemDetailsContainer";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailsContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();
  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);
  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailsContainer;
