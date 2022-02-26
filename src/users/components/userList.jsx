import React from "react";
import UserItem from "./usersItem";

import './userList.css';
import Card from "../../shares/components/Card";


function UserList(props){
    if (props.items.length === 0){
        return (
            <div className="center">
            <Card>
                <h3>No users found!</h3>
            </Card>
            </div>
            
        );
    }else{
        return(props.items.map((user, id) => {
           return (
           <div className="user-list">
    
             <UserItem 
                key={user.id} 
                name={user.name} 
                id={user.id}
                image={user.image}
                placesCount={user.place}
             />
       
           </div>)  
        }))
    }
};

export default UserList;