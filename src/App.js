import "./App.css";
import React, { useState } from "react";
import VerticalSidebar from "./VerticalSidebar";
import Output from "./Output";
import { AwesomeButton } from "react-awesome-button";
import { Segment, Sidebar } from "semantic-ui-react";

function App() {
    const [visible, setVisible] = useState(false);
    const [heading, setHeading] = useState('Modular Arithmetic');

    const changeComponent = (value) => {
        setHeading(value);
        setVisible(false);
    };

    return (
        <div className="App">
            <Sidebar.Pushable
                as={Segment}
                style={{
                    borderRadius: "0",
                    height: "100vh",
                    backgroundColor: "#282c34",
                    overflow: "hidden",
                }}
            >
                <VerticalSidebar changeComponent={changeComponent} visible={visible} />

                <Sidebar.Pusher>
                    <Segment basic className="App-header">
                        <AwesomeButton onPress={() => setVisible(!visible)}>
                            Sidebar
                        </AwesomeButton>
                        <h1>{heading}</h1>
                    </Segment>
                    <Output/>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </div>
    );
}

export default App;
