import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";
import { expansionPbox, straightPbox, sbox1 } from "./config";

function Mixer({ setOutput, setHeading }) {
    setHeading("DES - Mixer - Round 1 only");
    const submit = () => {
        if (
            inputs.L &&
            inputs.R &&
            inputs.k &&
            inputs.L.length === 32 &&
            inputs.R.length === 32 &&
            inputs.k.length === 48
        ) {
            var output = "";
            var L = inputs.L.replace(" ", "");
            var R = inputs.R.replace(" ", "");
            var K = inputs.k.replace(" ", "");

            output += "L = " + L;
            output += "\nR = " + R;
            output += "\nRound Key, K = " + K;
            output += "\nDES-function is applied on R and K\n";

            output += "\nR is expanded using expansion P-box";
            var E = "";
            expansionPbox.map((i) => {
                E += R[i - 1];
            });
            output += "\nE = " + E;

            output += "\n\nE is now XORed with K";
            let X = "";
            var i;
            for (i = 0; i < 48; i++) {
                X += parseInt(K[i]) ^ parseInt(E[i]);
            }
            //let temp = 48 - X.length;
            output += "\nX = E^K = " + X;

            output += "\n\nX is now Substituted using an S-box";
            let S = "";
            let str = X;
            const max_size = 6;
            const yardstick = new RegExp(`.{${max_size}}`, "g"); // /.{10}/g;
            const pieces = str.match(yardstick);
            const accumulated = pieces.length * max_size;
            const modulo = str.length % accumulated;
            if (modulo) pieces.push(str.slice(accumulated));
            pieces.map((piece) => {
                let four, six;
                four = piece.substring(1, 5);
                six = piece[0] + piece[5];
                four = parseInt(four, 2);
                six = parseInt(six, 2);

                let sub = sbox1[16 * six + four].toString(2);
                sub = "0".repeat(4 - sub.length) + sub;
                S += sub;
            });
            output += "\nS = " + S;
            output += "\n\n S is not permuted using a P-box";
            var P = "";
            straightPbox.map((i) => {
                P += S[i - 1];
            });
            output += "\nP = " + P;
            output += "\n\nS is the output from the DES function. This is now XORed with L";
            let L1 = ""
            for (i = 0; i < 32; i++) {
                L1 += parseInt(L[i]) ^ parseInt(S[i]);
            }
            output += "\nLeft Half of output = " + L1;

            setOutput(output);
        } else {
            setOutput("Wrong input");
        }
    };

    const { inputs, handleInputChange } = useForm(submit, {
        L: undefined,
        R: undefined,
        k: undefined,
    });

    return (
        <div>
            <Form style={{ marginBottom: "20px" }}>
                <Form.Input
                    fluid
                    placeholder="Left part (32 bits)"
                    name="L"
                    type="number"
                    value={inputs.L}
                    onChange={handleInputChange}
                />
                <Form.Input
                    fluid
                    placeholder="Right Part (32 bits)"
                    name="R"
                    type="number"
                    value={inputs.R}
                    onChange={handleInputChange}
                />
                <Form.Input
                    fluid
                    placeholder="Round Key"
                    name="k"
                    type="number"
                    value={inputs.k}
                    onChange={handleInputChange}
                />
            </Form>
            <AwesomeButton onPress={() => submit()}>Submit</AwesomeButton>
        </div>
    );
}

export default Mixer;
