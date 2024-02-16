import {useEffect, useState}
from 'react';
export default function Photo(){    const [pics,setPics]=useState([]);
useEffect(()=>{const apiUrl="https://api.unsplash.com/photos/?orientation=landscape&client_id=";
const accessKey="1ofaL50NGwMd2dUChSmnlgQf1kISUkCuJIUiEP3CDQs";

fetch(apiUrl+accessKey).then(response=>response.json()).then((data)=>
    {console.log("Hi")
     setPics(data);
    });
 },[]);
                                
    return (
        <div className="w-screen ">
            <div className=" p-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {pics.map((pic)=>(
            <div className="">
            <img src={pic.urls.small}
                key={pic.id}
                className="object-fill  rounded-sm"></img>
            
            </div>
            ))}
            </div>
        </div>
    )
}