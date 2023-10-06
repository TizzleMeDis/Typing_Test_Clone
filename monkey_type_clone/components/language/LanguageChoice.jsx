import React from "react";
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './LanguageChoice.css'
export default function LanguageChoice() {
    return (
        <div className="logo-container">
            <span className="logo"><FontAwesomeIcon icon={faEarthAmerica}/> english</span>
        </div>
    )
}