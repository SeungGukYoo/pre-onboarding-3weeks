import React from 'react';
import Input from './components/Input';
import List from './components/List';
import { DiseasStoreProvider } from './context/DiseaseStoreContext';
import { DisplayProvider } from './context/DisplayListContext';

function App() {
  return (
    <div className="max-w-[1024px] h-[700px] mx-auto mt-10 pt-10  bg-blue-400/70 flex  items-center flex-col rounded-xl">
      <DisplayProvider>
        <DiseasStoreProvider>
          <Input />
          <List />
        </DiseasStoreProvider>
      </DisplayProvider>
    </div>
  );
}

export default App;
