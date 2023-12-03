const paginationLogic = (currentPage, residents) => {
     const residentsPerPage = 20
     const totalePages = Math.ceil(residents.length / residentsPerPage)

     const sliceStart = 0 + ((currentPage - 1) * residentsPerPage)
     const siliceEnd = sliceStart + residentsPerPage

     const residentsInPage = residents.slice(sliceStart, siliceEnd) 

     const pages = []
     for(let i = 1; i <= totalePages; i++){
          pages.push(i)
     }

     console.log(residents)
     return{pages, residentsInPage}
};

export default paginationLogic;