import "./App.css";
import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { Segment, Sidebar } from "semantic-ui-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import VerticalSidebar from "../../Helpers/Sidebar/VerticalSidebar";
import Output from "../../Helpers/Output/Output";
import AddInv from "../AddInv/AddInv";
import GCD from "../GCD/Gcd";

function App() {
    const [visible, setVisible] = useState(false);
    const [heading, setHeading] = useState("");
    const [output, setOutput] = useState("");

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
                        setVisible={setVisible}
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
                                <Route path="/additive-inverse">
                                    <AddInv
                                        setOutput={setOutput}
                                        setHeading={setHeading}
                                    />
                                </Route>
                                <Route path="/gcd">
                                    <GCD
                                        setOutput={setOutput}
                                        setHeading={setHeading}
                                    />
                                </Route>
                                <Route path="/">
                                    <Redirect to="/additive-inverse" />
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
