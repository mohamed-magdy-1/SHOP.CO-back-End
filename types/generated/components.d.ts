import type { Schema, Struct } from '@strapi/strapi';

export interface LinksLinkName extends Struct.ComponentSchema {
  collectionName: 'components_links_link_names';
  info: {
    displayName: 'linkName';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LinksLinksF extends Struct.ComponentSchema {
  collectionName: 'components_links_links_fs';
  info: {
    description: '';
    displayName: 'linksFooter';
    icon: 'link';
  };
  attributes: {
    name_link: Schema.Attribute.Component<'links.link-name', false>;
    title: Schema.Attribute.String;
  };
}

export interface LinksOption extends Struct.ComponentSchema {
  collectionName: 'components_links_options';
  info: {
    displayName: 'option';
    icon: 'apps';
  };
  attributes: {
    link: Schema.Attribute.String;
    logoMedia: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SelectOption extends Struct.ComponentSchema {
  collectionName: 'components_select_options';
  info: {
    description: '';
    displayName: 'option';
    icon: 'connector';
  };
  attributes: {
    colorORsize: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface TolesButton extends Struct.ComponentSchema {
  collectionName: 'components_toles_buttons';
  info: {
    displayName: 'Button';
    icon: 'apps';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.link-name': LinksLinkName;
      'links.links-f': LinksLinksF;
      'links.option': LinksOption;
      'select.option': SelectOption;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'toles.button': TolesButton;
    }
  }
}
