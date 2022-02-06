import { useEffect, useContext } from 'react';
import './homePagestyles.css';
import { getCoList, getList } from './API';
import { UserContext } from '../../App';

const HomePage = () => {
  const { templateList, setTemplateList, coList, setCoList } = useContext(UserContext);

  useEffect(() => {
    getList()
      .then((items) => {
        setTemplateList(items);
      })
      .catch((res) => setTemplateList(res));
  }, []);

  const changeHandler = (e) => {
    const name = e.target.value
    getCoList(name)
    .then((items) => {
      setCoList(items);
    })
    .catch((res) => setCoList(res));
  }

  console.log(coList)

  return (
    <>
      <div className="headerCss">CONTRACT TEMPLATES</div>
      <div className="dropdownBox">
        <select onChange={changeHandler}>
          <option value="">Select Template</option>
          {templateList?.map((ele) => (
            <option value={ele.name}>{ele.name}</option>
          ))}
        </select>
      </div>
      <div className="entitlementCss">+ENTITILEMENT</div>
      <div className="divGridCss">
        <div className="leftSection">
          <div className="dropdownCss">DSG</div>
          <div className="dropdownCss">AGG</div>
          <div className="dropdownCss">IND</div>
        </div>
        <div className="rightSection">right</div>
      </div>
    </>
  );
};

export default HomePage;
