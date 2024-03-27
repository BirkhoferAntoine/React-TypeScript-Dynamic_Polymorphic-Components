import {type FC, useEffect, useRef, useState} from "react";
import Container from "./UI/Container.tsx";
import {type TimerType as TimerProps, useTimersContext} from "../store/timers-context.tsx";

const Timer: FC<TimerProps> = ({name, duration}) => {
    const { isRunning } = useTimersContext();
    const [remainingTime, setRemainingTime] = useState(duration*1000);
    const interval = useRef<number | null>(null);
    const timeStep = 50; // milliseconds

    if (remainingTime <= 0 && interval.current) {
        clearInterval(interval.current);
    }

    useEffect(() => {
        let timer: number;
        if (isRunning) {
            timer = setInterval(() => {
                setRemainingTime(prevState => {
                    if (prevState <= 0) return prevState;
                    return prevState - timeStep
                });
            }, timeStep);
            interval.current = timer;
        } else if (interval.current) {
            clearInterval(interval.current);
        }


        return () => clearInterval(timer);

    }, [isRunning]);

    const formattedRemainingTime = (remainingTime/1000).toFixed(2);

    return (
        <Container as="article">
            <h2>{name}</h2>
            <p><progress max={duration*1000} value={remainingTime}/></p>
            <p>{formattedRemainingTime}</p>
        </Container>
    );
};

export default Timer;