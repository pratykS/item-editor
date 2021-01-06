export class newItemClass {
  getAvailableFields(item) {
    return item.fields;
  }
  getFieldId(field) {
    return field.id;
  }
  getFieldType(field) {
    return field.fieldType;
  }
  getFieldName(field) {
    return field.fieldName;
  }
  getFieldValue(field) {
    return field.fieldValue;
  }
  getFieldOptions(field) {
    return field.fieldOptions;
  }
  getItemId(item) {
    return item.id;
  }
}

export const NewItem = new newItemClass();
