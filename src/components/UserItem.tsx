import React, {FC} from 'react';
import {IUser} from "./types/types";

interface UserItemProps {
    user:IUser
    children?: React.ReactNode
}
const UserItem:FC<UserItemProps> = ({user, children}) => {
    return (
        <div>
            {user.name} проживает в  {user.address.city} на улице {user.address.street}
            {children}
        </div>
    );
};

export default UserItem;