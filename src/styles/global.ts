import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
        font-size: ${(props) => props.theme.fonts.size.p};
        line-height: 24px;
    }

    body {
        font-family: ${({ theme }) => theme.fonts.family.main};
        overflow: hidden;
        overflow-y: scroll;
        color: ${(props) => props.theme.colors.neutral[10]};

        &.blocked {
            overflow-y: hidden
        }

        h1{
            font-size: ${(props) => props.theme.fonts.size.h1};
            font-weight: 700;
            line-height: 48px;
        }

        h2{
            font-size: ${(props) => props.theme.fonts.size.h2};
            font-weight: 700;
            line-height: 48px;
        }

        h3{
            font-size: ${(props) => props.theme.fonts.size.h3};
            font-weight: 700;
            line-height: 40px;
        }

        h4{
            font-size: ${(props) => props.theme.fonts.size.h4};
            font-weight: 700;
            line-height: 32px;
        }

        h5{
            font-size: ${(props) => props.theme.fonts.size.h5};
            font-weight: 700;
            line-height: 28px;
        }

        h6{
            font-size: ${(props) => props.theme.fonts.size.h6};
            font-weight: 700;
            line-height: 28px;
        }

        p{
            font-size: ${(props) => props.theme.fonts.size.p};
        }

        small{
            font-size: ${(props) => props.theme.fonts.size.small};
        }
    }

    #___gatsby {
        display: block;
        margin: auto;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 250ms ease-in-out;
}

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }
`;
