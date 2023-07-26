import styled  from 'styled-components';

// const mainColor = 'black';
const subColor = 'grey';

// const shrinkLabel = () =>`
//     top: -14px;
//     font-size: 12px;
//     color: ${mainColor};
// `;
    

export const ContactStyle = styled.div`
    display: flex;
    flex-direction: column;
    width:30vw;

    p label {
        color:${subColor};
        font-size:16px;
        font-weight: normal;
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
`;

export const TextAreaStyle = styled.textarea`
    width:100%;
    border:1px solid ${subColor};
    background: none;
    background-color: white;
    color:${subColor};
    font-size:18px;
    padding: 10px 10px 10px 5px;
    display: block;
    margin:25px 0;
    &:focus{
        outline: none;
    }
`;
// export const ButtonStyle = styled.div`
//     width:100%;
// `;