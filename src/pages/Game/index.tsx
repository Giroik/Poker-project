import {useState} from "react";

import Table from "../../components/Table";
import {runNextStep} from "./utils/runNextStep";

function Index() {
    const [table, setTable] = useState<any>([]);
    const [hands, setHands] = useState<any>();
    const [step, setStep] = useState<number>(0);
    const [pot, setPot] = useState<any>({Sum: 0});
    const [inputValue, setInputValue] = useState<any>(100);

    const onClick = () => {
        runNextStep({
            step,
            setStep,
            hands,
            table,
            setTable,
            setHands,
            pot,
            setPot
        });
    };


    return (
        <div className="App">
            <Table table={table} cards={hands}/>
            <button onClick={onClick}>Crupie Loop</button>
            <br/>
            <br/>
            <button
                onClick={() => {
                    setPot({...pot, Sum: pot.Sum + 100});
                }}
            >
                Raise
            </button>
            <input
                type={"text"}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key == "ArrowUp") {
                        setInputValue(Number(e.target.value) + 100);
                    }
                    if (e.key == "ArrowDown") {
                        if (Number(e.target.value) - 100 >= 100) {
                            setInputValue(Number(e.target.value) - 100);
                        }
                    }
                }}
            />
            <button>Call</button>
            <button>Check</button>
            <button>Fold</button>
        </div>
    );
}

export default Index;
