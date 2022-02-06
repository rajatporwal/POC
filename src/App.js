import HomePage from './Components/HomePage/HomePage';
import { createContext, useState, useContext, useMemo } from 'react';

export const UserContext = createContext({
  templateList: [],
  setTemplateList: () => {},
  coList: [],
  setCoList: () => {},
});

const App = () => {
  const [templateList, setTemplateList] = useState([]);
  const [coList, setCoList] = useState([]);

  const value = useMemo(
    () => ({ templateList, setTemplateList, coList, setCoList }), 
    [templateList, coList]
  );

  return (
    <UserContext.Provider value={value}>
     <HomePage />
    </UserContext.Provider>
  );
}

export default App;
