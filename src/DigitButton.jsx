import { ACTIONS } from "./App";
import React from "react";

export default function DigitButton({ dispatch, digit }) {
    return (
        <button className="rounded-lg bg-gradient-to-b from-orange-500 to-red-500 text-white font-orbitron font-bold text-2xl py-2 hover:from-orange-600 hover:to-red-600 transition duration-200 shadow-lg" onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
    );
}
