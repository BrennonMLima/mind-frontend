import styled from 'styled-components';

export const SignContainer = styled.div`
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
margin-top: 10%;
`;

export const FormStyles = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 15px;
min-width: 245px;
`;

export const PlaceHolder = styled.label`
position: absolute;
left: 10px;
padding: 5px;
top: 50%;
background: transparent;
transform: translateY(-50%);
transition: 0.2s ease all;
pointer-events: none;
color: #999;
`;

export const InputContainer = styled.div`
position: relative;

.text-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
        border-color: #007BFF;
    }

    &:focus + ${PlaceHolder},
    &:not(:placeholder-shown) + ${PlaceHolder} {
        top: 0;
        left: 10px;
        background: var(--preto);
        font-size: 12px;
        color: #007BFF;
    }
}
`;

export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .image-input {
    display: none;
  }

    .image-label {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--azul-escuro);
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
    
    .image-label:hover {
    background: var(--azul-claro);
  } 

  .image-preview {
    max-width: 100px;
    max-height: 100px;
    border: 1px solid #ccc;
    border-radius: 5px;
    object-fit: cover;
  }

  .placeholder-text {
    font-size: 14px;
    color: #888;
  }
`;

