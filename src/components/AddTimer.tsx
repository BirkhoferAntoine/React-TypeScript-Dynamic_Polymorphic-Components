import {type FC, useRef} from "react";
import Form, {FormHandle} from "./UI/Form.tsx";
import Input from "./UI/Input.tsx";
import Button from "./UI/Button.tsx";
import {useTimersContext} from "../store/timers-context.tsx";

const AddTimer: FC = () => {

    const customForm = useRef<FormHandle>(null);

    const {addTimer} = useTimersContext();

    function handleSaveTimer(data: unknown) {
        const extractedData = data as {name: string; duration: string;}
        console.log("=>(App.tsx:12) extractedData", extractedData);
        addTimer({name: extractedData.name, duration: Number(extractedData.duration)});
        customForm.current?.clear();
    }


    return (
        <Form onSave={handleSaveTimer} ref={customForm} id={'add-timer'}>
            <Input label={'Name'} id={'name'} type={"text"} />
            <Input label={'Duration'} id={'duration'} type={"number"} />
            <p><Button>Add Timer</Button></p>
        </Form>
    );
};

export default AddTimer;