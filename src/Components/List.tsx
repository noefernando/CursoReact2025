import { useState } from "react";

interface Props {
    data: string[];
}

function List({ data }: Props) {
    const [index, setIndex] = useState(2);
    const handleClick = (i:number) =>{
        setIndex (i);
    }
    return (
        <ul className="list-group">
            {data.map((elemento, i) =>(
                <li onClick={()=>handleClick(i)}
                key={elemento}
                className={`list-group-item ${index == i ? 'active':''}`}>{elemento}</li>
            ))}
        </ul>
    );
}

export default List;
