export const selectboxOptionList = (aICb) => {
  const availableOptions = aICb();
  const options = availableOptions.map((aI, index) => {
    return {
      id: index + 1,
      label: aI.label,
      value: aI.value,
    };
  });
  return options;
};

export const checkboxOptionList = (obj, aICb, sICb) => {
  const availableOptions = aICb();
  const selectedOptions = sICb(obj);
  const options = availableOptions.map((aI, index) => {
    return {
      id: index,
      label: aI,
      checked: selectedOptions ? selectedOptions.includes(aI) : false,
    };
  });
  return options;
};
