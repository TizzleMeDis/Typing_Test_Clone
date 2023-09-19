import React from "react";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LanguageChoice() {
    return (
        <div>
            <span><FontAwesomeIcon icon={faEarthAmerica}/> english</span>
        </div>
    )
}