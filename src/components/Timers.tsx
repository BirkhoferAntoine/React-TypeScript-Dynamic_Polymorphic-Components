import {type FC} from "react";
import {useTimersContext} from "../store/timers-context.tsx";
import Timer from "./Timer.tsx";


const Timers: FC = () => {
    const {timers} = useTimersContext();
    return (
        <ul>
            {timers.map((timer, index) => {
                return (
                    <li key={timer.name+'-'+index}>
                        <Timer name={timer.name} duration={timer.duration}/>
                    </li>
                )
            })}
        </ul>
    );
};

export default Timers;