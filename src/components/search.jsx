import React from "react"


class Searcher extends React.Component {
    state = {
        value: "matrix"
    }

    handleSearch = (event) => {
        if (event.key === "Enter") {
            this.props.search(this.state.value)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12" style={{ padding: "0" }}>
                    <input
                        onFocus={() => {
                            document
                                .querySelector(".pass-label")
                                .classList.add("active")
                        }}
                        onBlur={() => {
                            if (this.state.value === "") {
                                document
                                    .querySelector(".pass-label")
                                    .classList.remove("active")
                            }
                        }}
                        id="filmSearcher"
                        type="text"
                        className="validate"
                        value={this.state.value}
                        onChange={(event) => {
                            this.setState({ value: event.target.value })
                        }}
                        onKeyDown={(event) => {
                            this.handleSearch(event)
                        }}
                    />
                    <label
                        htmlFor="filmSearcher"
                        style={{ marginLeft: "-0.75rem" }}
                        className="pass-label active"
                    >
                        Введите название фильма (en)
                    </label>
                    <button 
                        className="btn search-btn"
                        onClick={()=>{
                            this.props.search(this.state.value)
                        }}
                    >Поиск</button>
                </div>
            </div>
        )
    }
}

export default Searcher
