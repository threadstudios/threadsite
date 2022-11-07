import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { EntryFields } from 'contentful';

function isContentField(field) {
  return field.nodeType === 'document';
}

function isResolveableField(field) {
  return field.sys && field.sys.type === 'Link';
}

export function fieldToDynamo(field) {
  if (isContentField(field)) {
    const fieldData = field as EntryFields.RichText;
    return documentToHtmlString(fieldData);
  }
  if (isResolveableField(field)) {
    const fieldData = field as EntryFields.Link<unknown>;
    return fieldData;
  }
  return field;
}
