import styled from "styled-components"
import { above } from "./index"

export const colors = {
  green: "#446A38",
  orange: "#f8b71c",
  gray: "#969696",
  darkBlue: "#1c3643",
  lightBlue: "#1e5372",
  softGray: "#f6f8f9",
  brown: "#8B4513",
  'brown-peru':"#CD853F",
  black: "#000000",
  cordoban:"#3b2a21",
  'brunswich green':'#1B4D3E',
  'dark-green':"#113026"
}

export const StyledHeader = styled.header`
  background-image: linear-gradient(
    90deg,
    ${colors["brunswich green"]},
    ${colors.black}
  );
  margin-bottom: 0;
  padding: 0 0.5rem 0 0;
  height: 3.5rem;
  width: 100%;
  max-width: 960;
  display: flex;
  position: fixed;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  a {
    height: 100%;
    font-size: 0.6rem;
  }
  & > a > img {
    margin: 0;
    background-color: ${colors.blackr};
    height: 100%;
    padding: 0.5rem 0.8rem;
  }
  & ul {
    list-style: none;
    margin: 0;
    display: flex;
    font-size: 0.2rem;
  }
  ${above.medium`
    padding: 0 2rem;
    height: 3.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
  ${above.large`
    padding: 0 10rem;
    height: 4.5rem;
    a{
      height: 100%;
      font-size: 0.8rem;
    }
  `}
`
export const StyledJumbo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  color: white;
  height:10rem;
  overflow: hidden;
  position: relative;

  div{
    padding-top:3rem;
    width: 41vw;
  };
  & h2 {
    margin: 0;
    font-weight: 700;
    font-size: 1.2rem;
  };
  & span{
    color: ${colors["brunswich green"]};
  }
  & small{
    font-weight: 100;
    font-size: 0.6rem;
  };
  & img{
    width: 35vw;
  };
  ${above.medium`
    padding: 2rem 4rem;
    height:27rem;
    flex-direction: row;
    & div{
      padding-top:7rem;
      width:49vw;
      padding-bottom:4rem;
    }
    & h2 {
      font-size: 2.9rem;
    };
  `}
  ${above.mediumL`
    padding: 2rem 4rem;
    height:30rem;
    flex-direction: row;
    & h2 {
      font-size: 1rem;
    };
    
  `}
  ${above.large`
    padding: 2rem 10rem;
    height:30rem;
    flex-direction: row;
    & div{
      width:44vw;
    }
    & h2 {
      margin: 0;
      font-weight: 700;
      font-size: 5.6rem;
    };
  `}
  &:before{
    content: " ";
    background-color:black;
    background-image: url("https://images.unsplash.com/photo-1609593147714-46c546d38137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80");
    background-position: center;
    background-size: cover;
    position: relative;
    filter: invert(0.2) sepia(0.1);
    z-index: -1;
    position: absolute;
    top: -27%;
    width: 130%;
    height: 15rem;
    ${above.medium`
      width: 150%;
      height: 32rem;
      top: -18%;
    `}
    ${above.mediumL`
      height: 40rem;
      top: -60%;
    `}
    ${above.large`
      width: 110vw;
      height: 65vw;
      top: -64%;
    `}
  };
`

export const StyledProducts = styled.div`
  background-color: ${colors.softGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 5rem 1rem;
  h2 {
    color: ${colors.cordoban};
    font-size: 2rem;
    padding-top:4rem;
    padding-bottom:3rem;
    ${above.large`
    font-size: 2.5rem;
  `};
  }
  & img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    object-position: center;
    margin: 0;
  }
  article {
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding-bottom:2rem;
    p {
     text-align:center;
      color: ${colors.cordoban};
      font-weight: 600;
      font-size: 1.3rem;
    }
    small {
      color: ${colors.darkBlue};
      font-weight: 400;
      font-size: 1.1rem;
      padding-bottom:0.3rem;
    }
    a {
      text-decoration: none;
      color: ${colors.darkBlue};
      font-size: 0.8rem;
      border-bottom: 3px solid ${colors.green};
      span {
        color: ${colors.green};
      }
    }
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }
  section {
    display: grid;
    grid-gap: 2rem;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 0;
    ${above.large`
      padding: 0 1rem;
      grid-gap: 3rem;
      padding: 0 6rem;
    `};
  }
`

export const StyledProductDetail = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  align-items: center;
  height: 82vh;
  .limited{
    background-color:${colors.cordoban}
  }
  img {
    width: 75%;
    object-fit: contain;
    object-position: center;
    margin-bottom:1rem;
  }
  p {
    color: #171717;
    font-weight: 500;
    margin: 0;
    font-size: 0.9rem;
    padding-bottom: 0.2rem;
    padding-top: 0.1rem;
  }
  & b {
    color: ${colors.green};
    font-size: 1.5rem;
    margin: 0;
    font-weight: 800;
  }
  h2,
  h3 {
    margin: 0;
  }
  small {
    margin: 0;
    color: #505050;
    text-align: justify;
  }
  div {
    width:90%;
    img {
      width: 20px;
      margin: 0.5rem 0;
      display: block;
      fill: red;
    }
  }
  .details{
    padding-bottom:1rem;
    padding-top:0.5rem;
    display:flex;
    flex-direction:column;
  }
  ${above.medium`
    padding: 1rem 3rem;
    flex-direction: column;
    img{
      margin-right: 2rem;
    }
    `}
  ${above.large` 
    div {
      width:40%;
    }
    img{
      width:50%;

    }
    flex-direction: row;
    height: 82vh;
    padding: 2rem 10rem;
  `}
`

export const StyledCart = styled.div`
  padding: 1rem;
  height: 80vh;
  overflow-y: scroll;
  h2 {
    border-bottom: 2px solid ${colors.darkBlue};
    color: ${colors.darkBlue};
  }
  & th {
    color: #959595;
    margin: 0;
    border: none;
  }
  & img {
    vertical-align: middle;
    width: 60px;
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${colors.darkBlue};
    div {
      display: flex;
      align-items: baseline;
      width: 250px;
      justify-content: space-between;
    }
  }
  & small {
    color: #505050;
    font-size: 0.9rem;
  }
  ${above.medium`
    padding: 1rem 3rem;
  `}
  ${above.large`
    padding: 5rem 10rem;
  `}
`

export const MenuItem = styled.li`
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 100;
  padding: ${({ margin }) => (margin ? "0 13px 0 13px" : "0 0 0 13px")};
  a {
    color: white;
    text-decoration: none;
  }
  & img {
    margin-right: 5px;
    width: 0.4rem;
  }
  ${above.medium`
    border-right: ${({ margin }) => (margin ? "1px solid white" : "")};
    padding: ${({ margin }) => (margin ? "0 26px 0 26px" : "0 0 0 26px")};
    & img{
      margin-right: 5px; 
      width: 0.7rem;
    }
  `}
`

export const Footer = styled.footer`
  background-color: ${colors["dark-green"]};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  bottom: 0;
  a {
    color: ${colors.green};
    margin-left: 0.3rem;
    text-decoration: none;
  }
`

export const Tag = styled.span`
  padding: 0.3rem 1.5rem;
  background-color: ${colors.orange};
  display: inline-block;
  margin: 0.7rem 0;
  color: white;
  border-radius: 3px;
`

export const SizeButton = styled.button`
  padding: calc(0.4rem + 1px);
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
  color: #272727;
  opacity: ${({ unavailable }) => (unavailable ? 0.4 : 1)};
  transition: 0.4s all ease;
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const QtyButton = styled.button`
  padding: 0.4rem;
  background-color: transparent;
  border: 2px solid rgba(0, 0, 0, 0.1);
`
export const QtySelect = styled.div`
  display: flex;
  margin: 0.6rem 0;
  button {
    padding: 0 10px;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #707070;
  }
  input {
    padding: 0.4rem;
    background-color: transparent;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-left: none;
    border-right: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    max-width: 40px;
    max-height: 40px;
  }
`
export const SizeSelect = styled.div`
  display: grid;
  width: 10rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  font-size: 0.8rem;
  margin-top: 0.6rem;
  button:nth-child(${props => props.selected}) {
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "outline" ? "transparent" : colors.green};
  color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  font-size: 0.9rem;
  padding: 0.6rem 1rem;
  font-weight: 500;
  border: ${({ type }) =>
    type === "outline"
      ? `3px solid ${colors.darkBlue}`
      : `3px solid ${colors.green}`};
  border-radius: 12px;
  a {
    text-decoration: none;
    color: ${({ type }) => (type === "outline" ? colors.darkBlue : "white")};
  }
  &:disabled {
    background-color: ${colors.gray};
    border-color: ${colors.gray};
    cursor: not-allowed;
  }
`

export const SelectStars = styled.div`
  span {
    margin: 0 3px;
    color: ${colors.gray};
    cursor: pointer;
  }
  span:nth-child(-n + ${props => props.selected}) {
    color: ${colors.orange};
  }
`
export const Purchase = styled.div`
  width: 100vw;
  height: calc(100vh - 4.5rem - 101px);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2.2rem;
  }
  p {
    margin: 2px 0;
  }
  span {
    font-size: 2rem;
    padding-bottom:2rem;
  }
`

export const Content = styled.div`
  ${above.medium`
    padding-top: 3.5rem;
    `}
  ${above.large`
    padding-top: 4.5rem;
  `}
`