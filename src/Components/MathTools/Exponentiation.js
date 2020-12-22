import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function Exponentiation({ setOutput, setHeading }) {
    setHeading("Exponentiation");
    const submit = () => {
        var val = Math.pow(parseInt(inputs.a), parseInt(inputs.b));
        setOutput(val);
    };
    const { inputs, handleInputChange } = useForm(submit, {
        a: undefined,
        b: undefined,
    });

    return (
        <div>
            <Form style={{ marginBottom: "20px" }}>
                <Form.Group widths="equal">
                    <Form.Input
                        fluid
                        placeholder="x"
                        name="a"
                        type="number"
                        value={inputs.a}
                        onChange={handleInputChange}
                    />
                    <Form.Input
                        fluid
                        placeholder="power"
                        name="b"
                        type="number"
                        value={inputs.b}
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
            <AwesomeButton onPress={() => submit()}>Submit</AwesomeButton>
        </div>
    );
}

export default Exponentiation;
