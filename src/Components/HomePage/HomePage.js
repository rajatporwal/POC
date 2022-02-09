import { useEffect, useContext, useState } from "react";
import "./homePagestyles.css";
import { getCoList, getList } from "./API";
import { UserContext } from "../../App";
import ModalComponent from "../Modal/Modal";

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [groupbyType, setGroupsByType] = useState({});
  let count = 0;
  const { templateList, setTemplateList, coList, setCoList } =
    useContext(UserContext);

  useEffect(() => {
    getList()
      .then((items) => {
        setTemplateList(items);
      })
      .catch((res) => setTemplateList(res));
  }, []);

  const changeHandler = (e) => {
    const name = e.target.value;
    if (name) {
      getCoList(name)
        .then((items) => {
          setCoList(items);
        setGroupsByType({});

        })
        .catch((res) => setCoList(res));
    } else {
      setCoList([]);
    }
  };

  const handleAddClick = (result) => {
    setGroupsByType(result);
  };

  const getGroupBox = (type) => (
    <div>
      <div className="box">{type}</div>
      {groupbyType[type]?.length > 0
        ? groupbyType[type].map((ele) => {
            count += 1;
            return (
              <div className="group" key={ele.name}>
                <div className="groupHeader">Group {count}</div>
                <div className="groupContent">{ele.name}</div>
              </div>
            );
          })
        : null}
    </div>
  );

  return (
    <>
      <div className="headerCss">CONTRACT TEMPLATES</div>
      <div className="dropdownBox">
        <select onChange={changeHandler}>
          <option value="">Select Template</option>
          {templateList?.map((ele) => (
            <option key={ele.id} value={ele.name}>
              {ele.name}
            </option>
          ))}
        </select>
      </div>
      {coList.length ? (
        <>
          <div className="entitlementCss" onClick={() => setModal(!modal)}>
            +ENTITILEMENT
          </div>
          <div className="divGridCss">
            <div className="leftSection">
                {getGroupBox("DSG")}
                {getGroupBox("AGG")}
                {getGroupBox("IND")}
            </div>
            <div className="rightSection">
              {coList.map((ele) => (
                <div key={ele.id} className="coList">
                  {ele.chargeOfferName}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
      {modal && (
        <div className="modalContainer">
          <ModalComponent
            modal={modal}
            setModal={setModal}
            coList={coList}
            handleAddClick={handleAddClick}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
