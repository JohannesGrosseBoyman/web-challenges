import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const response = await fetch(url);
  const result = await response.json();

  console.log("API resonse: ", result);
  return result;
};

export default function Products() {
  const router = useRouter();
  const { id } = router.query;

  // only fetch data if the  `id` is available
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Failed to load products!</h1>;
  }

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <>
      <h1>Product Details</h1>
      <ul>
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
        </li>
      </ul>
    </>
  );
}
