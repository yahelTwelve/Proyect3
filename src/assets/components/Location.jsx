import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {

    const handleSearchLocation = (e) => {
        e.preventDefault()
        const newLocationValue = e.target.newLocation.value

        axios
        axios.get(`https://rickandmortyapi.com/api/location/${newLocationValue}`)
            .then(({ data }) => setLocationInfo(data))
            .catch((err) => console.log(err))
    }

    return (
        <section className="flex flex-col justify-center items-center bg-[url('/backgrounds/bg_header.png')] bg-cover p-1 font-rick text-xs">
            <img src="/portal.png" alt="" className="mt-[-4px] relative" />
            <img src="/title.png" alt="Rick and Morty" className="absolute top-14" />

            <form onSubmit={handleSearchLocation} className=" border border-[#8EFF8B] my-14 rounded-md w-min">
                <div className="flex justify-center items-center">
                    <input type="number" name="newLocation" placeholder="Type a location ID..." required className="bg-transparent text-center text-gray-300 " />
                    <button type="submit" className="bg-[#8EFF8B] w-14 h-[2rem] "><span className="material-symbols-outlined flex justify-center items-center text-[19px]">mystery</span></button>
                </div>
            </form>

            <article>
                <h2 className="text-[#8EFF8B] text-sm text-center my-[30px]" >Welcome to {locationInfo.name}!</h2>
                <ul className="xs:hidden">
                    <li className="sm:hidden">Type: {locationInfo.type ? locationInfo.type : "unknow"}</li>
                    <li className="sm:hidden">Dimention: {locationInfo.dimension ? locationInfo.dimension : "unknow"}</li>
                    <li className="sm:hidden">Population: {locationInfo.residents.length > 1 || locationInfo.residents.length < 1 ? locationInfo.residents.length + " creatures" : locationInfo.residents.length + " creature"} </li>
                </ul>
            </article>
        </section>
    );
};

export default Location;