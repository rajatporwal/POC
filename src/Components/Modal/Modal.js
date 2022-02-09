import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./modalStyles.css";
import { Button, Modal, ModalFooter, ModalBody, Input } from "reactstrap";
import { getCoList, handleValues } from "../utils";

const ModalComponent = ({ modal, setModal, coList, handleAddClick }) => {
  const [groups, setGroups] = useState([]);
  const [dropDownvalues, setDropDownValues] = useState([]);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    setGroups(getCoList(coList));
    setDropDownValues(Object.fromEntries(handleValues(coList)));
  }, [coList]);

  const handleCheckboxClick = (i, type, value) => {
    const temp = JSON.parse(JSON.stringify(groups));
    if(value) {
        temp[i][type] = value;
    } else {
        temp[i][type] = !temp[i][type];
    }
    setGroups(temp);
  };

  const onClickHandler = () => {
    toggle();
    const obj = {
      DSG: [],
      AGG: [],
      IND: []
    }
    groups.forEach(ele => {
      if(ele.dropdownValue.includes('DSG'))
        obj['DSG'].push(ele)
      
      if(ele.dropdownValue.includes('AGG'))
        obj['AGG'].push(ele)
      
        if(ele.dropdownValue.includes('IND'))
        obj['IND'].push(ele)
      
    })
    handleAddClick(obj);
  }

  return (
    <div
      style={{
        display: "block",
        padding: 40,
      }}
    >
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className="modalBody">
            {groups.map((ele, i) => (
              <div className="listContainer" key={ele.id}>
                <div className="listItem">
                  <span style={{ width: "8rem" }}>{ele.name}</span>
                  <Input
                    name="check"
                    type="checkbox"
                    onClick={() => handleCheckboxClick(i, "isSelected")}
                  />
                  {ele.P !== undefined && (
                    <>
                      <div>
                        <Input
                          name="check"
                          type="checkbox"
                          className={`checkboxWithName ${
                            ele.P ? "bgColorActive" : "bgColorNotActive"
                          }`}
                          style={{ position: "relative" }}
                          onClick={(e) => e.preventDefault()}
                        />
                        <span
                          className="alignText"
                          onClick={() => handleCheckboxClick(i, "P")}
                        >
                          P
                        </span>
                      </div>
                    </>
                  )}
                  {ele.AF !== undefined && (
                    <div>
                      <Input
                        name="check"
                        type="checkbox"
                        className={`checkboxWithName ${
                          ele.AF ? "bgColorActive" : "bgColorNotActive"
                        }`}
                        onClick={(e) => e.preventDefault()}
                      />
                      <span
                        className="alignText"
                        style={{ marginLeft: "-21px" }}
                        onClick={() => handleCheckboxClick(i, "AF")}
                      >
                        AF
                      </span>
                    </div>
                  )}
                  {ele.L !== undefined && (
                    <div>
                      <Input
                        name="check"
                        type="checkbox"
                        className={`checkboxWithName ${
                          ele.L ? "bgColorActive" : "bgColorNotActive"
                        }`}
                        onClick={(e) => e.preventDefault()}
                      />
                      <span
                        className="alignText"
                        onClick={() => handleCheckboxClick(i, "L")}
                      >
                        L
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <select className="dropdownContainer" onChange={(e) => handleCheckboxClick(i, 'dropdownValue', e.target.value)}>
                    <option value="">Select</option>
                    {dropDownvalues[ele.name]?.map((ele) => (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => onClickHandler()}>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComponent;
