import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100%;
padding: 16px 24px;
background-color: #173e55;
color: #fff;
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.navText {
    font-size: 1.3rem;
}
`
export const Logo = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .appName {
        font-size: 2rem;
        font-weight: 100;
        font-style: italic;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-shadow: 1px 1px #8a8a8a;
    }
`