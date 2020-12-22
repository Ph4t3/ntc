import React from "react";
import { Segment } from "semantic-ui-react";
import "./Output.css";

const Output = ({ output }) => (
    <Segment className="Container" padded="very" placeholder>
        <p dangerouslySetInnerHTML={{ __html: output }}></p>
    </Segment>
);

export default Output;
