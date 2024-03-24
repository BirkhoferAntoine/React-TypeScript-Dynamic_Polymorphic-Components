import {type FC} from "react";
import Button from "./UI/Button.tsx";
import {useTimersContext} from "../store/timers-context.tsx";


const Header: FC = () => {

    //const timersCtx = useTimersContext();
    const {stopTimer, startTimer, isRunning} = useTimersContext();

    return (
        <header>
            <h1>ReactTimer</h1>

            <Button onClick={isRunning ? stopTimer : startTimer}>{isRunning ? 'Stop Timers' : 'Start Timer'}</Button>
        </header>
    );
};

export default Header;
