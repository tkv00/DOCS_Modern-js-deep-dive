import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import { CORE_CONCEPTS } from "./data.js";
import "./index.css";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //setSelectedTopics는 업데이트를 위한 함수
  function handleSelect(selectedButton) {
    //selectedButton=>'components','jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  // 방법 3. 변수에 저장
  // let tabContent=<p>Please select a topic.</p>;

  // if(selectedTopic){
  //   tabContent=(
  //     <div id="tab-content">
  //             <h3>{EXAMPLES[selectedTopic].title}</h3>
  //             <p>{EXAMPLES[selectedTopic].description}</p>
  //             <pre>
  //               <code>{EXAMPLES[selectedTopic].code}</code>
  //             </pre>
  //           </div>
  //   );
  // }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}></CoreConcept>
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* 방법 1.삼항연산자 */}
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/* 방법 2. and조건 */}
          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

          {/* 방법 3 */}
          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}

export default App;
