import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html {
	font-size: 18px;
}

body {
    min-height: 100vh;
    width: 100%;
	padding: 25px;
	margin: 0 auto;
	color: #000426;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
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
	max-width: 1220px;
    margin: 0 auto;
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.6);
	border: 1px solid red;
}
`;

export default GlobalStyle;