import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
    const { data: coords, isLoading, error, mutate } = useSWR(
      URL, fetcher, { refreshInterval: 5000 }
    );
   // console.log("coords: ", coords);
   // console.log("mutate function: ", mutate);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading ...</div>

   
    const getISSCoords = () => { mutate() };
/*  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  */

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
