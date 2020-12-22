import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

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
            <Menu.Item>
                Math Tools
                <Menu.Menu>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            history.push("/additive-inverse");
                        }}
                    >
                        <Icon name="hand point right" />
                        Additive Inverse
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/gcd");
                        }}
                    >
                        <Icon name="hand point right" />
                        GCD - Euclid's Theorem
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/multiplicative-inverse");
                        }}
                    >
                        <Icon name="hand point right" />
                        Multiplicative Inverse
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/bin2int");
                        }}
                    >
                        <Icon name="hand point right" />
                        Binary To Integer
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/int2bin");
                        }}
                    >
                        <Icon name="hand point right" />
                        Integer To Binary
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
            <Menu.Item>
                DES
                <Menu.Menu>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/des/initial");
                        }}
                    >
                        <Icon name="hand point right" />
                        Initial Permutation
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/des/final");
                        }}
                    >
                        <Icon name="hand point right" />
                        Final Permutation
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/additive-inverse");
                        }}
                    >
                        <Icon name="hand point right" />
                        Round Key Generator
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => {
                            setVisible(false);
                            setOutput("");
                            history.push("/additive-inverse");
                        }}
                    >
                        <Icon name="hand point right" />
                        Encrypted Round Value
                    </Menu.Item>
                </Menu.Menu>
            </Menu.Item>
        </Sidebar>
    );
};

export default VerticalSidebar;
