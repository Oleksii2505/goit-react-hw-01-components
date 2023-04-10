import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
width: 350px;
padding-top: 15px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 350px;
margin:  0 auto 15px;
text-align: center;
background-color: #FFFFFF;
border-radius: 6px;
`;

export const Description = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-bottom: 20px;
`;

export const Avatar = styled.img`
background-color: #E7EFBC;
width: 150px;
border-radius: 50%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
text-align: center;
font-weight: 700;
font-size: 30px;
`;

export const Tag = styled.p`
color: grey;
font-size: 15px;
`;

export const Location = styled.p`
color: grey;
  font-size: 15px;
`;

export const Stats = styled.ul`
list-style: none;
display: flex;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
outline: 1px solid rgba(0, 0, 0, 0.1);
flex-basis: calc(100%/3);
padding: 20px;
background-color: #ECF5B0;
 :first-of-type {
    border-radius: 0px 0px 0px 8px;
  }
  :last-of-type {
    border-radius: 0px 0px 8px 0px;
  }
`;

export const Label = styled.span`
color: #231725;
font-size: 18px;
`;

export const Quantity = styled.span`
font-weight: 700;
font-size: 18px;
`;