import React from "react";
import BabyNamesData from './BabyNamesData.json'


function ListOfBabyNames() {
    return (
        <ul className="container" >
            {BabyNamesData.sort((a, b) => a.name > b.name ? -1 : 1).map((name) => {
                return (<li class="babyNames" className={name.sex}>{(name.name)} </li>)
            })}
        </ul>
    )
}
export default ListOfBabyNames; 