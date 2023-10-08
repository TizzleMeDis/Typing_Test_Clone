import React from "react";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LanguageChoice() {
    return (
        <div className="m-4 p-4">
            <span className="text-lg"><FontAwesomeIcon icon={faEarthAmerica}/> english</span>
        </div>
    )
}