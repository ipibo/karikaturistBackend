import type { Schema, Attribute } from '@strapi/strapi';

export interface OptredenOptreden extends Schema.Component {
  collectionName: 'components_optreden_optredens';
  info: {
    displayName: 'Optreden';
    icon: 'alien';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.String;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'optreden.optreden': OptredenOptreden;
    }
  }
}
