import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Jessica", "Ana", "Cre"]);

    const [users] = useState([
        {id:1, nome:"Jessica", age:25},
        {id:2, nome:"Ana", age:15},
        {id:3, nome:"Cre", age:50}
    ]);

    return (
        <div>
            <ul>
                {list.map((item) => 
                    <li>{item}</li>
                )}
            </ul>
            <ul>
                {users.map((item) => 
                    <li key={item.id}>{item.nome} - {item.age}</li>
                )}
            </ul>
        </div>
    )
}

export default ListRender;