import {createContext, type ReactNode, useContext, useReducer} from "react";

export type TimerType = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: TimerType[];
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: TimerType) => void;
    startTimer: () => void;
    stopTimer: () => void;

}

type TimersContextProviderProps = {
    children: ReactNode;

};

type StartStopTimerAction = {
    type: 'START_TIMERS' | 'STOP_TIMERS';
}

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: TimerType;
}

type Action = {
    type: StartStopTimerAction | AddTimerAction;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    if (timersCtx === null) {
        throw new Error('Something went wrong ! TimersContext is null')
    }

    return timersCtx;
}

const initialState: TimersState = {
    isRunning: false,
    timers: [],
}


function timersReducer(state: TimersState, action: Action): TimersState {

    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration,
                }
            ]
        }
    }
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true,
        }
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false,
        }
    }

    return state;
}

export const TimersContextProvider = ({children}: TimersContextProviderProps) => {

    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx: TimersContextValue = {
        isRunning: timersState.isRunning,
        timers: timersState.timers,
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData});
        },
        startTimer() {
            dispatch({type: 'START_TIMERS'});
        },
        stopTimer() {
            dispatch({type: 'STOP_TIMERS'});
        },

    }

    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    )

}

export default TimersContextProvider;