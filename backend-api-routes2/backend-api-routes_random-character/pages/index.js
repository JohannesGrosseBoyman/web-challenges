import  useSWR  from "swr";

const fetcher =  async (url) => {
  const res = await fetch(url);
  return res.json();
};

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <h1>Failed to load!</h1>;

  if (!data) return <h1>Loading...</h1>


  return (
    <div>
      <h1>Random Character</h1>
      <p>{data.firstName} {data.lastName} </p>
      <p>twitter: {data.twitter}</p>
      <p>geohash: {data.geohash}</p>
    </div>
  );
}
