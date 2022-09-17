import styled from "styled-components";

export const MoviePoster = styled.img`
    width: 100%;
    height: 87%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`;

export const MovieWrapper = styled.li`
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.01);
        cursor: pointer;
    } 
    > a {
        text-decoration: none;
      }   
`;

export const MovieVote = styled.span`
    background-color: orangered;
    border-radius: 50%;
    color: #fff;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    top: 16px;
    left: 16px;
`;

export const TitleWrap = styled.div`
    width: 100%;
    height: 100px;
    padding: 8px
`

export const MovieTitle = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: black;
`;