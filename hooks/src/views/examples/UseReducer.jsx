import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { type } from "@testing-library/user-event/dist/type";

import { initialState, reducer } from "../../store/config";
import { login, numberAdd2 } from "../../store/actions";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [anyNumber, setAnyNumber] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Sem usuário!</span>
                )}

                <span className="text">{state.number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => login(dispatch, "Maria")}
                    >
                        Adicionar usuário
                    </button>
                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_mult7" })}
                    >
                        Vezes 7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_div25sd" })}
                    >
                        Dividir por 25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "number_addParse" })}
                    >
                        Tornar inteiro
                    </button>

                    <div className="center">
                        <input
                            type="number"
                            className="input"
                            value={anyNumber}
                            onChange={(e) => setAnyNumber(e.target.value)}
                        />
                        <button
                            className="btn"
                            onClick={() =>
                                dispatch({
                                    type: "number_addAny",
                                    payload: anyNumber,
                                })
                            }
                        >
                            Adicionar valor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
