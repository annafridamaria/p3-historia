import React from 'react'
import {WrapperRow, Wrapper, Header1, ImageRound, Episode2, EpisodeBox, Article} from 'components/Styled'

export const UserPage = () => {
    return (
        <>
            <Wrapper>
                <ImageRound src="https://miro.medium.com/fit/c/256/256/2*tVPotzlGdl-5oM4WI2Z4Ug.jpeg" alt="Frida"/>
                <Header1>Frida</Header1>
            </Wrapper>
            <WrapperRow>
                <Episode2>
                    <Header1>Playlists</Header1>
                    <EpisodeBox
                    width={"90%"}
                    height={"20px"}
                    >
                        <p>Haile Selassie – dyrkad kejsare och hatad despot</p>
                    </EpisodeBox>
                </Episode2>
                <Episode2>
                    <Header1>Reviews</Header1>
                    <Article>
                        <p><b>Karin Månsdotter – pigan som blev drottning av Sverige</b></p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Article>
                </Episode2>
            </WrapperRow>
        </>
    ) 
}