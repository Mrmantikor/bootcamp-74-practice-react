import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import State from './tabs/State/State';
import Props from './tabs/Props/Props';
import Quiz from './tabs/Quiz/Quiz';
import Dice from './tabs/Dice/Dice';
import Todos from './tabs/Todos/Todos';
import Register from './tabs/Register/Register';

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Register</Tab>
          <Tab>Todos</Tab>
          <Tab>Dice</Tab>
          <Tab>Quiz</Tab>
          <Tab>State</Tab>
          <Tab>Props</Tab>
        </TabList>

        <TabPanel>
          <Register />
        </TabPanel>
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
