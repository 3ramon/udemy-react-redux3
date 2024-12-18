import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const [status, setStatus] = useState("Impar");

    useEffect(
        function () {
            setStatus(number % 2 !== 0 ? "Impar" : "Par");
        },
        [number]
    );

    useEffect(
        function () {
            const n = parseInt(number);

            if (n > 0) {
                setFatorial((n - 1) * 1);
            } else if (n === 0) {
                setFatorial(1);
            } else {
                setFatorial(-1);
            }
        },
        [number]
    );

    useEffect(
        function () {
            document.title = "Eita!!!";
        },
        [fatorial]
    );

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">
                        {fatorial === -1 ? "Não existe" : fatorial}
                    </span>
                </div>
                <input
                    type="number"
                    className="input"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercicio #02" />

            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    );
};

export default UseEffect;
