import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import State from './tabs/State/State';
import Props from './tabs/Props/Props';
import Quiz from './tabs/Quiz/Quiz';
import Dice from './tabs/Dice/Dice';
import Todos from './tabs/Todos/Todos';

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Todos</Tab>
          <Tab>Dice</Tab>
          <Tab>Quiz</Tab>
          <Tab>State</Tab>
          <Tab>Props</Tab>
        </TabList>
        
        <TabPanel>
          <Todos />
        </TabPanel>
        <TabPanel>
          <Dice />
        </TabPanel>
        <TabPanel>
          <Quiz />
        </TabPanel>
        <TabPanel>
          <State />
        </TabPanel>
        <TabPanel>
          <Props />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
