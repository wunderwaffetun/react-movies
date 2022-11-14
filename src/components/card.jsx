import React from 'react'

export default function Card(props) {
    const { 
        Title: title,
        Year: year,
        imdbID: id, 
        Type: type, 
        Poster: poster,
    } = props;
    return (
        <div className="row">
            <div className="row-include">
                <div className="card">
                    <div className="card-image">
                        <img src={
                            poster !== "N/A" ? poster : "https://via.placeholder.com/468x700?text=No+Preview"
                        } alt="nema" className='img-poster' />
                    </div>
                    <div className="card-content">
                        <p>
                            {title}
                        </p>
                        <span className="meta">
                            <p>{year}</p> 
                            <p>{type}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
