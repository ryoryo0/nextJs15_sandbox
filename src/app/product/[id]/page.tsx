"use client";

import { getProduct } from "@/lib/api/product"
import { useParams } from "next/navigation";

export default  function Show() {
  const id = Number(useParams());
  const product =  getProduct(id);
  console.log(product);
  
  return (
    <div>
      
    </div>
  );
}