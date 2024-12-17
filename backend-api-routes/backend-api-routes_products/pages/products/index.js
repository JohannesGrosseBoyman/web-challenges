
import  useSWR  from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Failed to load products!</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h1>All my products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
             {" "}
            <h2>{product.name}</h2> 
            <p>{product.description}</p>
           <p>Price: {product.price} {product.currency}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
