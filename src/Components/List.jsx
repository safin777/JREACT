import { useState } from "react";
export default function List() {
    const [list, setList] = useState([
        {
        id: 1,
        name: "Mac",
        },
        {
        id: 2,
        name: "ASUS",
        },
        {
        id: 3,
        name: "HP",
        },
        {
        id: 4,
        name: "DELL",
        },
    ]);

    const productList = list.map((items,index)=>(
       <li className="text-red-800 font-bold" key={index} >{items.name} {items.id}-------index:{index}</li>
        
    ))
    return (
        <div className="mt-20 bg-gray-100">
        <ul className="list-decimal">
            {productList}
        </ul>
        </div>
    );

}