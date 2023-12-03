import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentURL }) => {

    const [character, setCharacter] = useState(null)

    useEffect(() => {
        axios
            .get(residentURL)
            .then((data) => setCharacter(data))
            .catch((err) => console.log(err))
    }, [])


    const bgStatus = {
        Dead: "bg-red-500",
        Alive: "bg-green-500",
        unknown: "bg-gray-400"
    }

    return (

        <article className="flex-col justify-center items-center w-[220px]">

            <header className="relative w-[220px] flex items-center justify-center border border-[#8EFF8B]">

                <img src={character ? character.data.image : "unknow"} alt="" className="relative w-[220px]" />
                <div className="absolute top-3/4 flex border border-[#8EFF8B] items-center justify-center px-2 ">
                    <div className={`w-3 h-3 rounded-full ${character?bgStatus[character.data.status]:""}`}></div>
                    <span className=" rounded-md text-[#8EFF8B] p-1 top-0">{character ? character.data.status : "unknow"}</span>
                </div>

            </header>
            <section className="flex flex-col gap-4 text-gray-100 p-3 border border-[#8EFF8B]">
                <h5>{character?.data.name}</h5>
                <ul className="flex flex-col justify-evenly items-start">
                    <li><span className="text-gray-400 font-bold">Species </span>{character ? character.data.species : "Unknow"}</li>
                    <li><span className="text-gray-400 font-bold">Origin </span>{character ? character.data.origin.name : "Unknow"}</li>
                    <li><span className="text-gray-400 font-bold">Times appeared </span>{character ? character.data.episode.length : "Unknow"}</li>
                </ul>
            </section>
        </article>
    );
};

export default ResidentCard;