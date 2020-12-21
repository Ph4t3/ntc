import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

const VerticalSidebar = ({ visible, changeComponent }) => (
    <Sidebar
        as={Menu}
        animation="slide along"
        direction="left"
        inverted
        vertical
        visible={visible}
    >
        <Menu.Item as="a" onClick={() => changeComponent('Modular Arithmetic')}>
            <Icon name="hand point right" />
            Modular Arithmetic
        </Menu.Item>
    </Sidebar>
);

export default VerticalSidebar;
