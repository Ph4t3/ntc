import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function XOR({ setOutput, setHeading }) {
    setHeading("Bitwise XOR");
    const submit = () => {
        if (inputs.a && inputs.b) {
            var val = (parseInt(inputs.a, 2) ^ parseInt(inputs.b, 2)).toString(
                2
            );
            var temp = Math.max(inputs.a.length, inputs.b.length) - val.length;
            setOutput("0".repeat(temp) + val);
        }
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
                        placeholder="a"
                        name="a"
                        type="number"
                        value={inputs.a}
                        onChange={handleInputChange}
                    />
                    <Form.Input
                        fluid
                        placeholder="b"
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

export default XOR;
