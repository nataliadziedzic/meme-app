import styled from 'styled-components'

export const StyledHeader = styled.header`
    width: 100%;
    padding: 16px 24px;
    background-color: #173e55;
    color: #fff;
    nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-items: center;
    }
    .navText {
        font-size: 1.5rem;
        font-weight: light;
    }
    a {
        position: relative;
    }
    a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    a:hover:after { 
        width: 100%; 
        left: 0; 
    }
    .active {
        :after { 
            content: none; 
        }
        :before {    
            content: '▶';
            position: absolute;
            top: 50%;
            left: -5px;
            transform: translate(-100%, -50%);
        }
    }
`
export const Logo = styled.div`
    overflow: hidden;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .appName {
        font-size: 2.1rem;
        font-weight: 100;
        font-style: italic;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-shadow: 1px 1px #8a8a8a;
    }
`