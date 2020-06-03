import React from "react";



function ListOfBabyNames(props) {
    return (
        <ul className="container" >
            {props.names.sort((a, b) => a.name > b.name ? -1 : 1).map((name, index) => {
                return (<li className={name.sex} key={index}>{(name.name)} </li>)
            })}
        </ul>
    )
}
export default ListOfBabyNames; 