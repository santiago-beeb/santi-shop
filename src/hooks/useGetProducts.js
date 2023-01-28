import { useEffect, useState } from "react";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const req = await fetch(API);
    const resp = await req.json();
    setProducts(resp);
  }, []);
  return products;
};

export { useGetProducts };
