import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_IMAGE_URL } from '../../constants/globalVariable'


type MovieCardProps = {
    movie: any
}
function MovieCard({ movie }: MovieCardProps) {
    const navigate = useNavigate();
    return (
        <div className="card" style={{ width: 300, height: 450, fontSize: 10, margin: 10 }}>
            <img src={BASE_IMAGE_URL + movie.backdrop_path} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.title ? movie.title : movie.name}</h5>
                <p className="card-text">{movie.overview}</p>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 50, display: "flex", justifyContent: "center" }}>
                    <a style={{ height: 40 }} onClick={() => navigate(`/${movie.id}`)} className="btn btn-primary">More Details</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard