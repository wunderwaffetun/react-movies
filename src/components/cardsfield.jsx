import React from "react"
import Card from "./card"

export default function Cards(props) {
    const {movies} = props
    return(<div className="movies">
        {
            movies.map((movie) => {
                return <Card key={movie.imdbID} {...movie}/>
            })
        }
    </div>)
}
