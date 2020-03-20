import React from 'react'
import { EpisodeBox, EpisodeImage, Header1, Article, Text, WrapperRow, Button } from "./Styled";

export const Episode = ({title, description, image, century, tags, reviews }) => {

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
            <Text>{reviews.length} reviews</Text>
            <WrapperRow>{tags && tags.map((tag) => (
            <Button>{tag}</Button>))}</WrapperRow>
        </EpisodeBox>
    )
   
}