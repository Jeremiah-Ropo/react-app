import React from "react";
import UserList from "../userList.jsx"

function NewUser(){

    const User = [
        {
        id:'1', name:'george', place:3, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&usqp=CAU",
    }
]

    return <UserList items={User}/>
};

export default NewUser;