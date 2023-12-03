import { useEffect, useState } from "react";
import getRandomNumber from "./assets/helpers/random";
import axios from "axios";
import Location from "./assets/components/Location";
import ResidentsInfo from "./assets/components/ResidentsInfo";

function App() {

  const [locationInfo, setLocationInfo] = useState(null)

  useEffect(() => {

    const randomDimension = getRandomNumber(126)

    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err))

  }, [])


  return (
    <>
      <div className="bg-black h-screen">
        {locationInfo ? <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} /> : ''}
        {locationInfo ? <ResidentsInfo residents={locationInfo.residents} /> : ''}
      </div>
    </>
  );
}

export default App;
