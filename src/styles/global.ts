import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html {
	font-size: 22px;

	@media (max-width: 960px) {
		font-size: 18px;
	}

	@media (max-width: 760px) {
		font-size: 16px;
	}

	@media (max-width: 480px) {
		font-size: 14px;
	}
}

body {
    min-height: 100vh;
    width: 100%;
	padding: 1em;
	margin: 0 auto;
	font-family: 'Comfortaa', cursive;
	color: #AFDAFC;
	background: linear-gradient(-45deg, #0065D6, #002147, #0054B2, #00326B);
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
	padding: 0.5em;
}
`;

export default GlobalStyle;

