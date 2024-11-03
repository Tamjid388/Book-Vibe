
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utilities/AddTOdb';

function ListedBook(){
  const allBooks=useLoaderData()
  useEffect(()=>{
const storedReadList=getStoredReadList()
const storedReadListInt=storedReadList.map()
cnst
  },[])
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