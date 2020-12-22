import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

const VerticalSidebar = ({ visible, setVisible }) => (
    <Sidebar
        as={Menu}
        animation="slide along"
        direction="left"
        inverted
        vertical
        visible={visible}
        style={{ backgroundColor: "#292c34", borderRight: "2px solid #475472" }}
    >
        <Menu.Item>
            Math Tools
            <Menu.Menu>
                <Link to="/additive-inverse" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Additive Inverse
                    </Menu.Item>
                </Link>
                <Link to="/gcd" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        GCD - Euclid's Theorem
                    </Menu.Item>
                </Link>
                <Link
                    to="/multiplicative-inverse"
                    onClick={() => setVisible(false)}
                >
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Multiplicative Inverse
                    </Menu.Item>
                </Link>
                <Link
                    to="/bin2int"
                    onClick={() => setVisible(false)}
                >
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Binary To Integer
                    </Menu.Item>
                </Link>
                <Link
                    to="/int2bin"
                    onClick={() => setVisible(false)}
                >
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Integer To Binary
                    </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
            DES
            <Menu.Menu>
                <Link to="/des/initial" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Initial Permutation
                    </Menu.Item>
                </Link>
                <Link to="/des/final" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Final Permutation
                    </Menu.Item>
                </Link>
                <Link to="/additive-inverse" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Round Key Generator
                    </Menu.Item>
                </Link>
                <Link to="/additive-inverse" onClick={() => setVisible(false)}>
                    <Menu.Item as="a">
                        <Icon name="hand point right" />
                        Encrypted Round Value
                    </Menu.Item>
                </Link>
            </Menu.Menu>
        </Menu.Item>
    </Sidebar>
);

export default VerticalSidebar;
