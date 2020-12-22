import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function IntToBin({ setOutput, setHeading }) {
    setHeading("Integer To Binary");
    const submit = () => {
        var val = parseInt(inputs.a).toString(2);
        setOutput(val);
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: null,
    });

    return (
        <div>
            <Form style={{ marginBottom: "20px" }}>
                <Form.Input
                    fluid
                    placeholder="Integer"
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

export default IntToBin;
