import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter  } from "next/router";


const fetcher = async url => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
};
  

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
 // console.log("id: ", id);

  const URL = `https://swapi.py4e.com/api/people/${id}`;
  const { data: characters, isLoading, error } = useSWR(
    URL, fetcher
  );
 // console.log("characters: ", characters);
 

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading ...</div>

  return (
    <Layout>
      <Card
        id={id}
        name={characters.name}
        height={characters.height}
        eyeColor={characters.eye_color}
        birthYear={characters.birth_year}
      />
    </Layout>
  );
}
