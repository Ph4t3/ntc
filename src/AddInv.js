import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "./Hooks/Form";

function AddInv({ setOutput }) {
    const submit = () => {
        if (inputs.a && inputs.b && inputs.a < inputs.b) {
            const val = inputs.b - inputs.a;
            setOutput(
                "The additive inverse of " +
                    inputs.a +
                    " in modulo " +
                    inputs.b +
                    " is " +
                    val
            );
        }
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: null,
        b: null,
    });

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Input
                        placeholder="Integer"
                        name="a"
                        type="number"
                        value={inputs.a}
                        onChange={handleInputChange}
                    />
                    <Form.Input
                        placeholder="Modulo"
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

export default AddInv;
