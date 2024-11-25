import { useContext } from "react";
import UserContext from "../Contexts/UserContext";


function Profile(){

    let {user} = useContext(UserContext);

    if(!user) return <div>Please provide your details</div>

    return <div>My name is {user.username}</div>
}

export default Profile;