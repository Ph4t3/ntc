import React from "react";
import { Form } from "semantic-ui-react";
import { AwesomeButton } from "react-awesome-button";
import useForm from "../../Hooks/Form";

function MulInv({ setOutput, setHeading }) {
    setHeading("Multiplicative Inverse - Extended Euclid's Theorem");
    const submit = () => {
        if (inputs.a && inputs.b) {
            const a = parseInt(inputs.a);
            const b = parseInt(inputs.b);
            var val;
            if (a < b) {
                val = findInv(b, a);
            } else {
                val = "Integer should be less than Modulo";
            }
            setOutput(val);
        }
    };

    const findInv = (a, b) => {
        var val = "n = " + a + ", b = " + b + "\n";
        var count = 1;
        var r1, r2, t1, t2;
        r1 = a;
        r2 = b;
        t2 = 1;
        t1 = 0;
        val += "\nIntial values\n";
        val += "r1 = n, r2 = b, t1 = 0, t2 = 1";

        while (r2 > 0) {
            const q = Math.floor(r1 / r2);
            const r = r1 - q * r2;
            r1 = r2;
            r2 = r;
            const t = t1 - q * t2;
            t1 = t2;
            t2 = t;

            val += "\nStep " + count;
            val += "\nr1 = " + r1;
            val += ", r2 = " + r2;
            val += ", t1 = " + t1;
            val += ", t2 = " + t2;
            count += 1;
        }
        val += "\n\nGCD = r1 = " + r1;

        if (r1 === 1) {
            val += "\nMultiplicative Inverse = t1 = " + t1;
            if (t1 < 0 || t1 >= a)
                val += " Mod " + a + " = " + parseInt(t1 + a);
        } else {
            val +=
                "\nSince GCD is not 1, Multiplicative Inverse does not exist";
        }
        return val;
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

export default MulInv;
