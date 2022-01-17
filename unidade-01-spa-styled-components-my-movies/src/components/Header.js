import React from "react";
import {MainMenu} from "./MainMenu";
import {HeaderContainer} from "../styles/HeaderContainer";

export const Header = () => {

    return(
        <HeaderContainer>
            <h1>My Movies</h1>
            <MainMenu/>
        </HeaderContainer>
    )
}