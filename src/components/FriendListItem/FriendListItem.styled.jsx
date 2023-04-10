import styled from '@emotion/styled';
import { getBgColorIsOnline } from 'utils';

export const Item = styled.li`
width: 300px;
margin-bottom: 20px;
padding: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
background-color: #FFFFFF;
display: flex;
justify-content: start;
align-items: center;
gap: 20px;
`;

export const Status = styled.span`
width: 15px;
height: 15px;
background-color: ${getBgColorIsOnline};
border-radius: 50%;
`;

export const Avatar = styled.img`
background-color: #E7EFBC;
width: 100px;
border-radius: 8px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
font-size: 25px;
font-weight: 700;
`;