export const ObjectUpdator = (sc, up, c, scb) => {
  const updatedSelectedContent = { ...sc, ...up };
  const updatedContent = Object.values({
    ...c,
    [sc.id - 1]: updatedSelectedContent,
  });
  scb({
    content: updatedContent,
    selectedContent: updatedSelectedContent,
  });
};
export const newObjectUpdator = (sc, up, c, scb) => {
  const updatedFieldObject = Object.values({
    ...sc.fields,
    [up.fieldId - 1]: {
      ...sc.fields[up.fieldId - 1],
      fieldValue: up.val,
    },
  });
  const updatedSelectedContent = {
    ...sc,
    fields: updatedFieldObject,
  };

  const updatedContent = Object.values({
    ...c,
    [up.itemId - 1]: updatedSelectedContent,
  });

  scb({
    content: [...updatedContent],
    selectedContent: updatedSelectedContent,
  });
};
