import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Sub } from "./types";

// * Components
import List from "./components/List";
import Form from "./components/Form";
import SubsService from './services/subs.service';

interface AppState {
  subs: Sub[]
}

function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);
  const [newSubsNumber, setNewSubsNumber] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    SubsService().then(setSubs);
  }, []);

  const handleNewSub = (newSub:Sub):void => {
    setSubs(subs => [...subs, newSub]);
    setNewSubsNumber(n => n + 1);
  }

  return (
    <div className="App" ref={divRef}>
      <List subs={subs} />
      New Subs: { newSubsNumber }
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
