import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Sub } from "./types";

// * Components
import List from "./components/List";
import Form from "./components/Form";

interface AppState {
  subs: Sub[]
}

const INITAL_STATE = [
  {
    nick: 'daepelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'He is a moderator sometimes'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
];

function App() {

  const [subs, setSubs] = useState<AppState['subs']>([]);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITAL_STATE);
  }, []);

  const handleNewSub = (newSub:Sub):void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="App" ref={divRef}>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
