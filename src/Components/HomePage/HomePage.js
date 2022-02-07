import { useEffect, useContext, useState } from "react";
import "./homePagestyles.css";
import { getCoList, getList } from "./API";
import { UserContext } from "../../App";
import ModalComponent from "../Modal/Modal";

const HomePage = () => {
  const [modal, setModal] = useState(false);

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
        })
        .catch((res) => setCoList(res));
    } else {
      setCoList([]);
    }
  };

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
              <div className="dropdownCss">DSG</div>
              <div className="dropdownCss">AGG</div>
              <div className="dropdownCss">IND</div>
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
          <ModalComponent modal={modal} setModal={setModal} coList={coList} />
        </div>
      )}
    </>
  );
};

export default HomePage;
