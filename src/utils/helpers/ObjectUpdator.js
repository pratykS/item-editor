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
