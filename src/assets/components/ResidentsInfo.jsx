import { useState } from "react";
import paginationLogic from "../helpers/paginationLogic";
import ResidentCard from "./ResidentCard";

const ResidentsInfo = ({ residents }) => {

const [currentPage, setCurrentPage] = useState(1)

const {pages, residentsInPage} = paginationLogic(currentPage, residents)

const handleNewPage = (newPage) => {
    console.log(newPage)
    setCurrentPage(newPage)
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


return (
        <>
        <div className="text-[#8EFF8B] text-md bg-[url('/backgrounds/bg_header.png')] py-14 p-3 flex flex-col items-center h-fit">
            <h2>{residents.length > 0 ? "Residents:  " + residents.length : "Without residents"}</h2>
            <section className=" mt-12 grid grid-cols-[repeat(auto-fill,_220px)] max-w-[1000px] justify-center bg-black w-full gap-10">
                {
                    residentsInPage.map((resident) =>
                        <ResidentCard key={resident} residentURL={resident} />
                    )
                }
            </section>

<ul className="flex gap-10 my-16">
    {
        pages.map((page)=>
        <li key={page}><button onClick={() => handleNewPage(page)}>{page}</button></li>
        )
    }
</ul>

            </div>
        </>
    );
};

export default ResidentsInfo;