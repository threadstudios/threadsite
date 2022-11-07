type EncapsulatedLanguageField = { 'en-US': unknown };

export interface ContentfulWebhook {
  metadata: {
    tags: [];
  };
  sys: {
    id: string;
    type: 'Entry' | 'Asset';
    publishedCounter: number;
    version: number;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
  fields: Record<string, EncapsulatedLanguageField>;
}
