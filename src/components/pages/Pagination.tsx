import React from 'react'
interface PaginationProps {
    currentPage: number,
    pageNum: number,
    handleChangePage: (page: number | string) => void
}
function Pagination({ currentPage, pageNum, handleChangePage }: PaginationProps) {
    const arrayPage = new Array<number>(pageNum);
    return (
        <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <ul className="pagination">
                {currentPage > 1 ? (<li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage("prev")}>Previous</a></li>) : (<></>)}
                {pageNum > 3 ? (
                    <>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage(1)}>1</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage(2)}>2</a></li>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage(3)}>3</a></li>
                    </>

                ) : pageNum > 1 ? arrayPage.map((arr, index) => (
                    <>
                        <li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage(index + 1)}>{index + 1}</a></li>
                    </>
                )) : <></>}
                {currentPage < pageNum ? (<li className="page-item"><a className="page-link" href="#" onClick={() => handleChangePage("next")}>Next</a></li>) : (<></>)}


            </ul>
        </nav>
    )
}

export default Pagination