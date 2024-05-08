import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["Jessica", "Ana", "Cre"]);

    return (
        <div>
            <ul>
                {list.map((item) => 
                    <li>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default ListRender;