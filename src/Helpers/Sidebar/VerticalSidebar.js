import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const items = [
    {
        heading: "Math Tools",
        items: [
            {
                path: "/additive-inverse",
                title: "Additive Inverse",
            },
            {
                path: "/gcd",
                title: "GCD - Euclid's Theorem",
            },
            {
                path: "/multiplicative-inverse",
                title: "Multiplicative Inverse",
            },
            {
                path: "/bin2int",
                title: "Binary To Integer",
            },
            {
                path: "/int2bin",
                title: "Integer To Binary",
            },
            {
                path: "/xor",
                title: "XOR",
            },
            {
                path: "/exponentiation",
                title: "Exponentiation",
            },
        ],
    },
    {
        heading: "DES",
        items: [
            {
                path: "/des/initial",
                title: "Initial Permutation",
            },
            {
                path: "/des/final",
                title: "Final Permutation",
            },
            {
                path: "/des/roundkey",
                title: "Round Key",
            },
            {
                path: "/des/mixer",
                title: "Mixer Function",
            },
        ],
    },
    {
        heading: "RSA",
        items: [
            {
                path: "/rsa/fastexp",
                title: "Fast Exponentiation",
            },
        ],
    },
];

const VerticalSidebar = ({ visible, setOutput, setVisible }) => {
    let history = useHistory();
    return (
        <Sidebar
            as={Menu}
            animation="slide along"
            direction="left"
            inverted
            vertical
            visible={visible}
            style={{
                backgroundColor: "#292c34",
                borderRight: "2px solid #475472",
            }}
        >
            {items.map((item) => (
                <Menu.Item>
                    {item.heading}
                    <Menu.Menu>
                        {item.items.map((innerItem) => (
                            <Menu.Item
                                onClick={() => {
                                    setVisible(false);
                                    setOutput("");
                                    history.push(innerItem.path);
                                }}
                            >
                                <Icon name="hand point right" />
                                {innerItem.title}
                            </Menu.Item>
                        ))}
                    </Menu.Menu>
                </Menu.Item>
            ))}
        </Sidebar>
    );
};

export default VerticalSidebar;
