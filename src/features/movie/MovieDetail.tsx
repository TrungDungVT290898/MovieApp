import React, { useEffect, useState } from 'react'
import { BASE_URL_MOVIE_SEARCH_WITH_ID } from '../../constants/globalVariable'
import { MovieJSONPayload } from '../../types/type'
import { BASE_IMAGE_URL, API_KEY } from '../../constants/globalVariable'
import { MovieState } from './movieSlice'
import { useSelector } from "react-redux";
import Portal from '../../components/pages/Portal'
import ConfirmSaveModal from './ConfirmSaveModal'
const modalStyle = {
    padding: '3rem',
    backgroundColor: '#eee',
    margin: '0 auto',
    width: 400,


};
function MovieDetail() {
    const { detailFilm } = useSelector((f: any) => f.films as MovieState);
    const [showModal, setShowModal] = useState(false)
    const handleModalButtonClick = (type: string) => {
        switch (type) {
            case "close":
                setShowModal(s => s = false)
                break;
            case "save":
                setShowModal(s => s = false)
                break;
            default:
                setShowModal(s => s = false)
                break;
        }
    }
    let imgURL = BASE_IMAGE_URL;
    if (detailFilm) {
        imgURL += detailFilm.backdrop_path ? detailFilm.backdrop_path : detailFilm.poster_path;
    }

    return (
        <div className="card" style={{ marginTop: 30, width: "50%", marginBottom: 30 }} >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <a style={{ position: "absolute", right: 10, top: 10 }} className="btn btn-primary" onClick={() => setShowModal(true)}><i className="bi bi-star"></i></a>
                <div>
                    <img src={imgURL} className="card-img-top" alt="image" style={{ minWidth: 100, minHeight: 200 }} />

                </div>
                <h5 className="card-title">{detailFilm?.title}</h5>
                <p className="card-text">{detailFilm?.overview}</p>
                <p className="card-text">Vote Average: {detailFilm?.vote_average}</p>
                <p className="card-text">Vote Count: {detailFilm?.vote_count}</p>
                <div style={{ display: "flex", justifyContent: "space-around", width: "50%" }}>
                    <a className="btn btn-primary" href="#">WATCH</a>

                </div>

                <Portal selector='detailContainer'>
                    {showModal ? <ConfirmSaveModal isShow={showModal} handleModalButtonClick={handleModalButtonClick} content="You wanna save this films?" /> : null}

                </Portal>


                <div id="detailContainer"
                    style={{ zIndex: 999, position: "absolute", top: "0" }} >

                </div>
            </div>

        </div>
    )
}

export default MovieDetail