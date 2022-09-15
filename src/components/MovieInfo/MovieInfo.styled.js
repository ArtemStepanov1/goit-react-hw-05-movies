import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    border-bottom: 2px solid lightgrey;
    padding-bottom: 16px;
`
export const Image = styled.img`
    width: 20vw;
    margin-right: 32px;
`

export const ShortInfo = styled.div`
    width: 40vw;
`

export const LongInfoWrapper = styled.div`
    border-bottom: 2px solid lightgrey;
    padding-bottom: 16px;`
export const LinkList = styled.ul`
    display: flex;
    gap: 16px;
`

export const LinkItem = styled.li`
    padding: 8px 16px;
    justify-content: center;
    border: 2px solid orangered;
    border-radius: 4px;

    &.active {
        color: white;
        background-color: orangered;
    }

    > a {
        text-decoration: none;
        color: black;
        font-weight: 500;
      }   
`