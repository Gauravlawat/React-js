import { useState } from "react";
import TapButton from './TapButton.jsx'
import { EXAMPLES } from "../data-with-examples.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setselectedTopic] = useState();

    function handleSelect(selectedButton) {
        // buttons can be components,JSX,props,state 
        // console.log(selectedButton);
        // tabContent=selectedButton;
        setselectedTopic(selectedButton);
    }
    // console.log('App component');
    let tabContent = <p>Please select a topic</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content' >
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div >
        );
    }
    return (
        <Section tilte="Examples" id="examples">
            {/* <h2>Examples</h2> */}
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TapButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TapButton>
                        <TapButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TapButton>
                        <TapButton isSelected={selectedTopic === 'Props'} onClick={() => handleSelect('props')}>Props</TapButton>
                        <TapButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TapButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}