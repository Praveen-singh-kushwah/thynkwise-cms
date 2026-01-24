import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
  };
}

export interface HomeCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_home_case_studies';
  info: {
    displayName: 'caseStudies';
  };
  attributes: {
    caseStudyCard: Schema.Attribute.Component<'home.case-study-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeCaseStudyCard extends Struct.ComponentSchema {
  collectionName: 'components_home_case_study_cards';
  info: {
    displayName: 'caseStudyCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface HomePartnerBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_blocks';
  info: {
    displayName: 'partnerBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    partnerItem: Schema.Attribute.Component<'home.partner-item', true>;
  };
}

export interface HomePartnerFit extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_fits';
  info: {
    displayName: 'partnerFit';
  };
  attributes: {
    partnerBlock: Schema.Attribute.Component<'home.partner-block', true>;
  };
}

export interface HomePartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_home_partner_items';
  info: {
    displayName: 'partnerItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_home_process_sections';
  info: {
    displayName: 'processSection';
  };
  attributes: {
    processStep: Schema.Attribute.Component<'home.process-step', true>;
    rightDescription: Schema.Attribute.Text;
    rightTitleLine1: Schema.Attribute.String;
    rightTitleLine2: Schema.Attribute.String;
  };
}

export interface HomeProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_home_process_steps';
  info: {
    displayName: 'processStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyThynkwise extends Struct.ComponentSchema {
  collectionName: 'components_home_why_thynkwises';
  info: {
    displayName: 'whyThynkwise';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whyThynkwiseItem: Schema.Attribute.Component<
      'home.why-thynkwise-item',
      true
    >;
  };
}

export interface HomeWhyThynkwiseItem extends Struct.ComponentSchema {
  collectionName: 'components_home_why_thynkwise_items';
  info: {
    displayName: 'whyThynkwiseItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    schemaMarkup: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about': HomeAbout;
      'home.case-studies': HomeCaseStudies;
      'home.case-study-card': HomeCaseStudyCard;
      'home.partner-block': HomePartnerBlock;
      'home.partner-fit': HomePartnerFit;
      'home.partner-item': HomePartnerItem;
      'home.process-section': HomeProcessSection;
      'home.process-step': HomeProcessStep;
      'home.why-thynkwise': HomeWhyThynkwise;
      'home.why-thynkwise-item': HomeWhyThynkwiseItem;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
