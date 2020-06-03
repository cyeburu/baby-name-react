import React from "react"

const SearchButton = () => {
    function searchInput(event) {
        let userInput = event.target.value

    }
    return (
        <div>
            <input onClick={searchInput} className="searchbtn" type="search" placeholder="Search for a name..."></input>
        </div>

    )

}

export default SearchButton