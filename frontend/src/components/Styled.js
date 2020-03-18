import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${props => props.width ? props.width : "auto"};
  height: ${props => props.height ? props.height : "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.flexdirection ? props.flexdirection : "column"};
  overflow: ${props => props.overflow ? props.overflow : "none"};

`
export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 30px;
  border-radius: 15px;
  padding: 0px 5px;
  margin: 10px;
  background: #f48ebd;
  color: #fff59c;
  border: none;
    &:hover {
      transition: ease 0.4s;
      transform: scale(1.1);
      font-weight: bold;
  }
`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${props => props.width ? props.width : "20%"};
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  -webkit-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
  -moz-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
  box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
`
export const Label = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Input = styled.input` 
  height: 30px;
  width: ${props => props.width ? props.width : "auto"};
  background: none;
  border: none;
  border-bottom: 2px solid #f48ebd;
  font-size: large;
  color: #f48ebd;
`
export const CheckboxInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 30px;
  border-radius: 15px;
  padding: 0px 5px;
  margin: 10px;
  background: #f48ebd;
  color: #fff59c;
  border: none;
    &:checked {
    color: #f48ebd;
    background: #fff59c;
    font-weight: bold;
  }
`
export const CheckBoxSquare = styled.input`
    /* display: none; */
`
export const TextArea = styled.textarea` 
  height: 100px;
  width: ${props => props.width ? props.width : "auto"};
  background: none;
  border: 1px solid #f48ebd;
  border-bottom: 3px solid #f48ebd;
  font-size: large;
  color: #f48ebd;
`
export const Select = styled.select`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: auto;
  height: 30px;
  border-radius: 15px;
  padding: 0px 5px;
  margin: 10px;
  background: #f48ebd;
  color: #fff59c;
  border: none;
  font-size: 15px;
`
export const EpisodeBox = styled.div`
    width: ${props => props.width ? props.width : "18%"};
    height: ${props => props.height ? props.height : "30%"};
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    -webkit-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
&:hover {
    transform: scale(1.02);
    transition: all 0.4s ease;
    -webkit-box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4);
}`

export const ListBox = styled.div`
    width: ${props => props.width ? props.width : "18%"};
    height: ${props => props.width ? props.width : "30%"};
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    border: solid 1px #f48ebd;
    /* -webkit-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4); */
&:hover {
    border: solid  1px #fff59c;
    color: #fff59c;
    background: #f48ebd;
    transition: all 0.4s ease;
}`

export const Episode2 = styled.div`
    width: 40%;
    height: 30%;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    -webkit-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
`
export const EpisodeSmall = styled.div`
    width: 90%;
    height: 30px;
    border-radius: 15px;
    padding: 10px;
    margin: 10px;
    -webkit-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 12px -9px rgba(0,0,0,0.4);
&:hover {
    font-weight: bold;
    /* transform: scale(1.01);
    transition: all 0.2s ease;
    -webkit-box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4);
    -moz-box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4);
    box-shadow: 8px 11px 31px -9px rgba(0,0,0,0.4); */
}`

export const EpisodeImage = styled.img`
    height: 180px;
    width: 100%;
    object-fit: cover;
    object-position: 50%;
`

export const Header1 = styled.h1`
    font-size: 18px;
`
export const ArticleShort = styled.article`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6; /* number of lines to show */
    -webkit-box-orient: vertical;
`
export const ArticleMedium = styled.article`
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 12; /* number of lines to show */
    -webkit-box-orient: vertical;
`
export const ImageRound = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius:50%
`;