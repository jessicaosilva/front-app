const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento");
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou inline")}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true) {
                        console.log("Isso não deveria ser feito assim.");
                    }
                }}
                >Clique aqui, por favor</button>
            </div>
        </div>
    );
};

export default Events;