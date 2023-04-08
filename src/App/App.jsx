import { Container } from "./App.styled";
import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics";

import user from "data/user.json";
import data from "data/data.json";

export const App = () => {
  return (
    <Container> 
    React homework template
   <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics title="Upload stats" stats={data}/>
  <Statistics stats={data}/>
 
</Container>
  );
};
