import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";
import { parityDrop, keyCompression } from "./config";
const options = [
    { key: "1", text: "Round 1", value: "1" },
    { key: "2", text: "Round 2", value: "2" },
    { key: "3", text: "Round 3", value: "3" },
    { key: "4", text: "Round 4", value: "4" },
    { key: "5", text: "Round 5", value: "5" },
    { key: "6", text: "Round 6", value: "6" },
    { key: "7", text: "Round 7", value: "7" },
    { key: "8", text: "Round 8", value: "8" },
    { key: "9", text: "Round 9", value: "9" },
    { key: "10", text: "Round 10", value: "10" },
    { key: "11", text: "Round 11", value: "11" },
    { key: "12", text: "Round 12", value: "12" },
    { key: "13", text: "Round 13", value: "13" },
    { key: "14", text: "Round 14", value: "14" },
    { key: "15", text: "Round 15", value: "15" },
    { key: "16", text: "Round 16", value: "16" },
];

const shiftRound = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

function RoundKey({ setOutput, setHeading }) {
    setHeading("DES - Round Key Generator");

    const submit = () => {
        let input = inputs.a.replace(" ", "");
        let output = "";
        if (input && input.length === 64) {
            output += "Key with Parity = " + input;
            let val = "";
            parityDrop.map((i) => {
                val += input[i - 1];
            });
            input = val;
        }
        output += "\nKey without Parity, K = " + input;

        if (input && input.length === 56) {
            output += "\nSplit key into 2 halfs:";
            let L = input.substring(0, 28);
            let R = input.substring(28);
            let shift = shiftRound[parseInt(round) - 1];
            output += "\nL = " + L;
            output += "\nR = " + R;

            output +=
                "\nFor Round " +
                round +
                " Left shift both halfs by " +
                shift +
                "bit";

            L = parseInt(L, 2);
            R = parseInt(R, 2);
            L = ((L << shift) | (L >>> (28 - shift))) & 0xfffffff;
            R = ((R << shift) | (R >>> (28 - shift))) & 0xfffffff;
            L = (L >>> 0).toString(2);
            R = (R >>> 0).toString(2);
            output += "\nL = " + L;
            output += "\nR = " + R;

            input = L + R;
            output += "\nCombine both Halves: " + input;
            let val = "";
            keyCompression.map((i) => {
                val += input[i - 1];
            });
            output += "\nUse compression table to compress and find key";
            output += "\nRound Key " + round + " = " + val;

            setOutput(output);
        } else {
            setOutput(
                "Enter 64-bit Binary (with parity) or 56-bit Binary (without parity)"
            );
        }
    };

    const { inputs, handleInputChange } = useForm(submit, {
        a: null,
    });

    const [round, setRound] = useState("1");
    const handleSelectChange = (a, b) => {
        setRound(b.value);
    };

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
                <Form.Select
                    fluid
                    options={options}
                    placeholder="Round"
                    className="blackText"
                    name="round"
                    value={round}
                    onChange={handleSelectChange}
                />
            </Form>
            <AwesomeButton onPress={() => submit()}>Submit</AwesomeButton>
        </div>
    );
}

export default RoundKey;
