export const btnStyles = () => {
    return `
    margin-bottom: 0.5px;
    padding: 0.8em 1.5em;
    font-family: inherit;
    font-size: 1.5rem;
    color: #002147;
    line-height: 0.8;
    background-color: #FFF;
    border: 1px solid #CCC;
    border-radius: 0.3em;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.075) inset;
    transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
    cursor:pointer;

    &:hover {
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
        outline: 0 none;
    }
    `
};