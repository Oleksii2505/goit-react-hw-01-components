import styled from '@emotion/styled';
import { getRandomHexColor, getFlexBasis } from "utils";

export const StatisticsWrapper = styled.section`
width: 600px;
margin:  0 auto 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
padding: 50px;
margin: 0 auto;
font-weight: 700;
font-size: 30px;
line-height: 1.36;
letter-spacing: 0.06em;
text-align: center;
text-transform: uppercase;
background-color: #FFFFFF;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
flex-basis: ${getFlexBasis};
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
padding: 20px;
gap: 10px;
background-color: ${getRandomHexColor};
color:  #FFFFFF;
`;

export const Label = styled.span`
font-size: 18px;
`;

export const Percentage = styled.span`
font-weight: 700;
font-size: 18px;
`;