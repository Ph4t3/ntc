import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";
import { finalPermBox } from "./config";

function FinalPerm({ setOutput, setHeading }) {
    setHeading("DES - Final Permutation");
    const submit = () => {
        if (inputs.a.length === 64) {
            var val = "";
            finalPermBox.map(i => {
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

export default FinalPerm;
