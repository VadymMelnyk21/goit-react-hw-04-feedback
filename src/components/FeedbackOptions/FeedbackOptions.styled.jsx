import styled from '@emotion/styled';

export const DivList = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 5px 15px;
  border: 1px solid #747474;
  border-radius: 5px;

  font-weight: 700;
  color: #555;

  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
