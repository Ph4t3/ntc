import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function BinToInt({ setOutput, setHeading }) {
    setHeading("Binary To Integer");
    const submit = () => {
        var val = parseInt(inputs.a, 2);
        setOutput(val);
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: undefined,
    });

    return (
        <div>
            <Form style={{ marginBottom: "20px" }}>
                <Form.Input
                    fluid
                    placeholder="Binary Number"
                    name="a"
                    type="number"
                    value={inputs.a}
                    onChange={handleInputChange}
                />
            </Form>
            <AwesomeButton onPress={() => submit()}>Submit</AwesomeButton>
        </div>
    );
}

export default BinToInt;
