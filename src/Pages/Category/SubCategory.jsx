import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard";
import { route } from "../../App";

const SubCategory = () => {
  const subCateId = useParams().subCateId;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${route}/api/v1/products?subcategory=${subCateId}`)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res);
        console.log(subCateId);
      })
      .catch((err) => console.log(err));
  }, [subCateId]);
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  container mx-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default SubCategory;
