import React, { useState } from "react";
import BabyNamesData from "./BabyNamesData.json";
import ListOfBabyNames from "./ListOfBabyNames"

const SearchButton = () => {
    const [text, setText] = useState("");
    const filteredNames = BabyNamesData.filter(baby => baby.name.toLowerCase().includes(text.toLowerCase()));

    return (<div><input
        value={text}
        className="searchbtn"
        type="search"
        placeholder="Search for a name..."
        onChange={userInput => setText(userInput.target.value)}
    />
        <ListOfBabyNames names={filteredNames} />
    </div>
    )
}

export default SearchButton