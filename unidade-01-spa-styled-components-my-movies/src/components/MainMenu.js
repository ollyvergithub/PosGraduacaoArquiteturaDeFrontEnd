import React from "react";
import {MainMenuContainer} from "../styles/MainMenuContainer";
import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <MainMenuContainer>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </MainMenuContainer>
    )
}