import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  //const id = 1;

  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const fetcher = async (URL) => {
    const response = await fetch(URL);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }

    return response.json();
  };

  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading</div>;

  //console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
