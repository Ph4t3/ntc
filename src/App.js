import "./App.css";
import React, { useState } from "react";
import VerticalSidebar from "./VerticalSidebar";
import Output from "./Output";
import AddInv from "./AddInv";
import { AwesomeButton } from "react-awesome-button";
import { Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [visible, setVisible] = useState(false);
    const [heading, setHeading] = useState("Additive Inverse");
    const [output, setOutput] = useState("");

    const changeComponent = (value) => {
        setHeading(value);
        setVisible(false);
    };

    return (
        <Router>
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
                    <VerticalSidebar
                        changeComponent={changeComponent}
                        visible={visible}
                    />

                    <Sidebar.Pusher>
                        <Segment basic className="App-header">
                            <AwesomeButton onPress={() => setVisible(!visible)}>
                                Sidebar
                            </AwesomeButton>
                            <h1>{heading}</h1>
                        </Segment>
                        <div style={{ margin: "20px" }}>
                            <Switch>
                                <Route path="/">
                                    <AddInv setOutput={setOutput} />
                                </Route>
                                <Route path="/additive-inverse">
                                    <AddInv setOutput={setOutput} />
                                </Route>
                            </Switch>
                            <Output output={output} />
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        </Router>
    );
}

export default App;
