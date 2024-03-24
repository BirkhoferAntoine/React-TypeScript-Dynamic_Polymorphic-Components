import {type FC} from "react";
import Container from "./UI/Container.tsx";
import {type TimerType as TimerProps} from "../store/timers-context.tsx";

const Timer: FC<TimerProps> = ({name, duration}) => {
    return (
        <Container as="article">
            <h2>{name}</h2>
            <p>{duration}</p>
        </Container>
    );
};

export default Timer;