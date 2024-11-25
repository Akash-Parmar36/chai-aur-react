import { useState , useContext } from "react";
import UserContext from "../Contexts/UserContext";


function Login(){
     
     let [username , setUsername] = useState("");
     let [password , setPassword] = useState("");

     let {setUser} = useContext(UserContext);
     console.log(useContext(UserContext));

     let handleSubmit = (e) => {
               e.preventDefault();
               setUser({username,password});
     } 

     return (
        <>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" placeholder="pasword" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button> 
        </>
     );
}

export default Login;