import styled from '@emotion/styled';

export const TableTr = styled.tr`
background-color: #ffffff;
`;

export const TableTd = styled.td`
color: grey;
padding: 10px;
text-align: center;
 :first-of-type {
    text-transform: capitalize;
    text-align: start;
    padding-left: calc(100%/8);
}
 :not(:last-of-type) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
}
`;