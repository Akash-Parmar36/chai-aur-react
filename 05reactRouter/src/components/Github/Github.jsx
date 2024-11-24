import {useState , useEffect } from "react";
import { useLoaderData } from "react-router";

function Github(){

    // let [data , setData] = useState({})
         
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res) => res.json())
    //     .then((data) =>{
    //           console.log(data);
    //           setData(data)  
    //     })
    // }, [])


    //OR

    let data = useLoaderData();
    console.log(data);

    return (
        <div className='bg-gray-600 text-white text-3xl p-4 text-center'>Followers : {data.followers}
         <img src={data.avatar_url} alt="Git picture" width={300} />
         </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
       const response = await  fetch("https://api.github.com/users/hiteshchoudhary")
       return response.json();
}