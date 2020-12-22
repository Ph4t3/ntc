import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";
import { initialPermBox } from "./config";

function InitialPerm({ setOutput, setHeading }) {
    setHeading("DES - Initial Permutation");
    const submit = () => {
        if (inputs.a && inputs.a.length === 64) {
            var val = "";
            initialPermBox.map(i => {
                val += inputs.a[i-1];
            })
            setOutput(val);
        } else {
            setOutput("Should be 64 bits");
        }
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: null,
    });

    return (
        <div>
            <Form style={{marginBottom: "20px"}}>
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

export default InitialPerm;
