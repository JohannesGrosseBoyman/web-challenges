import  useSWR  from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
    const  {data, error} = useSWR("/api/products", fetcher);

    if (error) return <div>Failed to load!</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            <h1>All the products</h1>
            <ul>
                {data.map((product) => (
                    <li key={product.id} >
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>price: {product.price} €</p>

                    </li>
                ))}

            </ul>
        </>
    )
}