import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function FastExp({ setOutput, setHeading }) {
    setHeading("Fast Exponentiation");
    const submit = () => {
        if (inputs.a) {
            const bin = parseInt(inputs.a).toString(2).substring(1);
            var output = "First convert the exponent to binary:\n";
            output += `(${inputs.a})<sub>10</sub> = (${"1" + bin})<sub>2</sub>`;

            output +=
                "\n\nIterate through binary and square in each iteration and multiply by x if bit is 1\n\n";
            var previous = 1;
            [...bin].forEach((bit) => {
                output += `(x<sup>${previous}</sup>)<sup>2</sup> = x<sup>${
                    previous * 2
                }</sup><br>`;
                previous *= 2;

                if (bit === "1") {
                    output += `x<sup>${previous}</sup>.x = x<sup>${
                        previous + 1
                    }</sup><br>`;
                    previous += 1;
                }
            });
            setOutput(output);
        }
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: undefined,
    });

    return (
        <div>
            <Form style={{ marginBottom: "20px" }}>
                <Form.Input
                    fluid
                    placeholder="Power"
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

export default FastExp;
