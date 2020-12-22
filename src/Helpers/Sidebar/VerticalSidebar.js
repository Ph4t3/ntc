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
        <Link to="/multiplicative-inverse" onClick={() => setVisible(false)}>
            <Menu.Item as="a">
                <Icon name="hand point right" />
                Multiplicative Inverse
            </Menu.Item>
        </Link>
    </Sidebar>
);

export default VerticalSidebar;
