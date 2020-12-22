import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

const VerticalSidebar = ({ visible, changeComponent }) => (
    <Sidebar
        as={Menu}
        animation="slide along"
        direction="left"
        inverted
        vertical
        visible={visible}
        style={{ backgroundColor: "#292c34", borderRight: "2px solid #475472" }}
    >
        <Link
            to="/additive-inverse"
            onClick={() => changeComponent("Additive Inverse")}
        >
            <Menu.Item as="a">
                <Icon name="hand point right" />
                Additive Inverse
            </Menu.Item>
        </Link>
    </Sidebar>
);

export default VerticalSidebar;
