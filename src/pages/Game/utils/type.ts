import {Dispatch, SetStateAction} from "react";

export type CrupiePropsType = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    hands: any;
    table: string[];
    setTable: any;
    setHands: any;
    pot: any;
    setPot: any;
}