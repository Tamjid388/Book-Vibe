
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ListedBook(){
    return(
        <div>
              <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-2xl'>Books I read</h2>
    </TabPanel>
    <TabPanel>
    <h2 className='text-2xl'>My Wish List</h2>
    </TabPanel>
  </Tabs>

        </div>
    )
}





export default ListedBook