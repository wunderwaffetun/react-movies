import React from "react"
import Cards from "../components/cardsfield"
import Preloader from "../components/preloader"
import Searcher from "../components/search"
import Ratio from "../components/radiobuttons"

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    constructor(params) {
        super(params)
        this.state = {
            movies: [],
            currentSearching: "matrix",
            choice: "All",
            page: 1
        }
    }

    filmValue = (searching) => {
        this.setState(
            { currentSearching: searching, choice: this.state.choice },
            () => {
                this.udpdateFilms()
            }
        )
    }

    

    udpdateFilms = () => {
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${
                this.state.currentSearching
            }${this.state.choice !== "All" ? `&type=${this.state.choice}` : ""}&page=${this.state.page}`
        )
            .then((data) => data.json())
            .then((data) => {
                this.setState({ movies: data.Search })
            })
    }

    updateChoice = (param) => {
        this.setState(
            Object.assign(this.state, { choice: param }),
            this.udpdateFilms()
        )
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${this.state.currentSearching}&page=${this.state.page}`)
            .then((data) => data.json())
            .then((data) => {
                this.setState({ movies: data.Search })
            })
    }

    render() {
        const { movies } = this.state
        return (
            <main className="content container">
                <Searcher search={this.filmValue} defaultValue={this.state.currentSearching}/>
                <Ratio rad={this.updateChoice}></Ratio>
                {Array.isArray(movies) ? (
                    movies.length !== 0 ? (
                        <Cards movies={movies} />
                    ) : (
                        <Preloader />
                    )
                ) : (
                    <h5>???????????? ???? ?????????????? ??????????</h5>
                )}
            </main>
        )
    }
}

export default Main
