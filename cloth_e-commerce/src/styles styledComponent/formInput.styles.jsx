import styled,{css} from 'styled-components';

const mainColor = 'black';
const subColor = 'grey';

const shrinkLabelStyle = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

export const GroupStyle = styled.div`
    position: relative;
    margin: 45px 0;

    input[type="password"]{
        letter-spacing: 0.35em;
    }
`;

export const InputStyle = styled.input`
    background: none;
    background-color: white;
    color:${subColor};
    font-size:18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin:25px 0;
    &:focus{
        outline: none;
    }
    &:focus ~ label{
            ${shrinkLabelStyle};
        }
`;

export const LabelStyle = styled.label`
    color:${subColor};
    font-size:16px;
    font-weight: normal;
    position: absolute;
    left: 5px;
    top:10px;
    transition: 300ms ease all;
    &.shrink{
        ${shrinkLabelStyle}
    }
`;