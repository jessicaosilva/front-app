const Challenge  = () => {
    const a = 10;
    const b = 1;
    const soma = a+b;
    return (
        <div>
            <div>Número a: {a}</div>
            <div>Número b: {b}</div>
            <button onClick={() => console.log(soma)}>Clique aqui para somar (console).</button>
        </div>
    );
};

export default Challenge;