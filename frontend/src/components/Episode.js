import React from 'react'
import { EpisodeBox, EpisodeImage, Header1, Article, WrapperRow, Button } from "./Styled";

export const Episode = ({title, description, image, century, tags }) => {

    // const selectEpisode = () => { 
    //     // var element = document.getElementsByClassName="episode";
    //     // element.classList.add("selected");
    //     // var episode = document.getElementsByClassName("episode"); 
    //     var episode = document.getElementById('episode');
    //         episode.classList.add('selected');
    //   }

    return (
        <EpisodeBox>
            {image && <EpisodeImage src={image} alt={title}/>}
            {title && <Header1>{title}</Header1>}
            <p>{century && century.map((century, index) => {
                return (<>
                {index === 1 ? " - " : null}
                {century}
                </>)
            })}
            </p>
            {description && 
            <Article
            webkitlineclamp={"6"}>
                {description}
            </Article>}
            <WrapperRow>{tags && tags.map((tag) => (
            <Button>{tag}</Button>))}</WrapperRow>
        </EpisodeBox>
    )
   
}