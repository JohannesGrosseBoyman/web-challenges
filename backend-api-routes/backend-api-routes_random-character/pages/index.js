import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

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
  <h1>Here is the random character:</h1>
  <h2>{data.firstName} {data.lastName} </h2>
  <p> twitter-account: {data.twitter} </p>
  <p> geohash: {data.geohash}</p>
  </>
  )
};
