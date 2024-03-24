import Button from "./components/Button.tsx";
import Input from "./components/Input.tsx";
import Form, {type FormHandle} from "./components/Form.tsx";
import {useRef} from "react";

function App() {

    const customForm = useRef<FormHandle>(null);
    function handleSave(data: unknown) {
        const extractedData = data as {name: string; age: string;}
        console.log("=>(App.tsx:12) extractedData", extractedData);
        customForm.current?.clear();
    }

  return (
      <main>
        <Form onSave={handleSave} ref={customForm}>
            <Input label={'Name'} id={'name'} type={"text"} />
            <Input label={'Age'} id={'age'} type={"number"} />
            <p><Button>Save</Button></p>
        </Form>
      </main>
  );
}

export default App;
