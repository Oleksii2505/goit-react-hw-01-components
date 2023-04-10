import PropTypes from 'prop-types';
import { FrendListSection} from "./FriendList.styled";
import { FriendListItem } from "components/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <FrendListSection>{
            friends.map(friend => (
                <FriendListItem 
                key={friend.id}
                avatar = {friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                 />

            ))
        }
        </FrendListSection>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
            })
    )      
}