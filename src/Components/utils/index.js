export const handleValues = (templateselected) => {
  let AGGcount = 0;
  let DSGcount = 0;
  let coArray = [];
  let comap = new Map();
  coArray = templateselected.map(
    (templatedata) => templatedata.chargeOfferName
  );
  let overallAGG = [];
  let overallDSG = [];
  let overallIND = [];
  let AGGtext = null;
  let DSGtext = null;
  let INDtext = null;
  for (let i = 0; i < coArray.length; i++) {
    if (
      coArray[i].endsWith("8") ||
      coArray[i].endsWith("9") ||
      coArray[i].endsWith("4")
    ) {
      AGGcount++;
      AGGtext = `AGG${AGGcount}`;
      overallAGG.push(AGGtext);
      comap.set(coArray[i], overallAGG);
    } else if (coArray[i].endsWith("1") || coArray[i].endsWith("5")) {
      DSGcount++;
      DSGtext = `DSG${DSGcount}`;

      overallDSG.push(DSGtext);
      overallIND.push(DSGtext);
      comap.set(coArray[i], overallDSG);
    } else if (coArray[i].endsWith("3") || coArray[i].endsWith("2")) {
      INDtext = "IND";
      const tempList = overallIND.filter((n) => n === "IND");
      if (tempList.length === 0) {
        overallIND.push(INDtext);
      }
      comap.set(coArray[i], overallIND);
    }
  }

  return comap;
};

export const getCoList = (list) => {
  return list.map((ele) => {
    let obj = {
      name: ele.chargeOfferName,
      isSelected: false,
      dropdownValue: "",
    };
    if (
      ele.chargeOfferName.match(/_4$/) ||
      ele.chargeOfferName.match(/_8$/) ||
      ele.chargeOfferName.match(/_9$/)
    ) {
      obj = {
        ...obj,
        P: false,
        AF: false,
      };
    }
    if (ele.chargeOfferName.match(/_5$/)) {
      obj = {
        ...obj,
        L: false,
      };
    }
    return obj;
  });
};
