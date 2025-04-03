import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import State from './tabs/State/State';
import Props from './tabs/Props/Props';

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>State</Tab>
          <Tab>Props</Tab>
        </TabList>

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
