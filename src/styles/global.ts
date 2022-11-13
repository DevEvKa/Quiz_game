import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;

} 
body {
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

#root {
    border: 1px solid red;
    margin: 0 auto;
}
`;

export default GlobalStyle;