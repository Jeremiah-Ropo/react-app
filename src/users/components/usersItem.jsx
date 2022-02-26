import React from "react";

import "./usersItem.css"

import Card from '../../shares/components/Card.jsx'
import Avatar from "../../shares/components/Avatar";
import { Link } from "react-router-dom";

function UserItem(props){
    return(
      
        
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}> 
                    <div className="user-item__image"><Avatar image={props.image} alt={props.name} /></div>   
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.placesCount} {props.placesCount=== 1 ? "Place" : "Places"}</h3>
                    </div>
                </Link>
            </Card>            
        </li>
        
        
    )
};

export default UserItem;