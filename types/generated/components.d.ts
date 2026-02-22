import type { Schema, Struct } from '@strapi/strapi';

export interface AboutApproachItem extends Struct.ComponentSchema {
  collectionName: 'components_about_approach_items';
  info: {
    displayName: 'approachItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutApproachSection extends Struct.ComponentSchema {
  collectionName: 'components_about_approach_sections';
  info: {
    displayName: 'approachSection';
  };
  attributes: {
    approachItem: Schema.Attribute.Component<'about.approach-item', true>;
    mainTitle: Schema.Attribute.Text;
  };
}

export interface AboutImageTextSection extends Struct.ComponentSchema {
  collectionName: 'components_about_image_text_sections';
  info: {
    displayName: 'imageTextSection';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    mainImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutIntroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_intro_sections';
  info: {
    displayName: 'introSection';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutListItem extends Struct.ComponentSchema {
  collectionName: 'components_about_list_items';
  info: {
    displayName: 'listItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutListWithImageSection extends Struct.ComponentSchema {
  collectionName: 'components_about_list_with_image_sections';
  info: {
    displayName: 'listWithImageSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    listItem: Schema.Attribute.Component<'about.list-item', true>;
    mainImage: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutValueItem extends Struct.ComponentSchema {
  collectionName: 'components_about_value_items';
  info: {
    displayName: 'valueItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_values_sections';
  info: {
    displayName: 'valuesSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    valueItem: Schema.Attribute.Component<'about.value-item', true>;
  };
}

export interface ApolloCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_apollo_cta_sections';
  info: {
    displayName: 'cta_section';
  };
  attributes: {
    ctaButtonName: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
  };
}

export interface ApolloHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_apollo_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ApolloProcessItem extends Struct.ComponentSchema {
  collectionName: 'components_apollo_process_items';
  info: {
    displayName: 'process-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ApolloServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_apollo_service_items';
  info: {
    displayName: 'service-item';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ApolloToolItem extends Struct.ComponentSchema {
  collectionName: 'components_apollo_tool_items';
  info: {
    displayName: 'tool-item';
  };
  attributes: {};
}

export interface ApolloToolSection extends Struct.ComponentSchema {
  collectionName: 'components_apollo_tool_sections';
  info: {
    displayName: 'tool-section';
  };
  attributes: {
    heading: Schema.Attribute.Text;
    tool_item: Schema.Attribute.Component<'tool-section.tool-item', true>;
  };
}

export interface ApolloWhyCitySection extends Struct.ComponentSchema {
  collectionName: 'components_apollo_why_city_sections';
  info: {
    displayName: 'why-city-section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactSteps extends Struct.ComponentSchema {
  collectionName: 'components_contact_steps';
  info: {
    displayName: 'steps';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface ExecutionFeaturesExecutionFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_execution_features_execution_features';
  info: {
    displayName: 'executionFeatures';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    select: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    about_feature_item: Schema.Attribute.Component<
      'home.about-feature-item',
      true
    >;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeAboutFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_home_about_feature_items';
  info: {
    displayName: 'about-feature-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
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

export interface PlatformFeaturesExecutionFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_platform_features_execution_features';
  info: {
    displayName: 'executionFeatures';
  };
  attributes: {};
}

export interface PlatformFeaturesPlatformFeatures
  extends Struct.ComponentSchema {
  collectionName: 'components_platform_features_platform_features';
  info: {
    displayName: 'platformFeatures';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    select: Schema.Attribute.Boolean;
  };
}

export interface PricingPagePricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pricing_page_pricing_plans';
  info: {
    displayName: 'PricingPlan';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plans';
  info: {
    displayName: 'plan';
  };
  attributes: {
    badge: Schema.Attribute.String;
    billingLabel: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    discountLabel: Schema.Attribute.String;
    executionFeatures: Schema.Attribute.Component<
      'pricing.platform-features',
      true
    >;
    executionFee: Schema.Attribute.String;
    licenseText: Schema.Attribute.String;
    One_time_setup_fee: Schema.Attribute.String;
    platformFeatures: Schema.Attribute.Component<
      'pricing.platform-features',
      true
    >;
    showExecutionFee: Schema.Attribute.Boolean;
    specialQuote: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface PricingPlatformFeatures extends Struct.ComponentSchema {
  collectionName: 'components_pricing_platform_features';
  info: {
    displayName: 'platformFeatures';
  };
  attributes: {
    included: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface PricingTab extends Struct.ComponentSchema {
  collectionName: 'components_pricing_tabs';
  info: {
    displayName: 'tab';
  };
  attributes: {
    label: Schema.Attribute.String;
    plan: Schema.Attribute.Component<'pricing.plan', true>;
    saveLabel: Schema.Attribute.String;
  };
}

export interface ServicesServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_services_service_sections';
  info: {
    displayName: 'serviceSection';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    icon: Schema.Attribute.Media<'images'>;
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
    image: Schema.Attribute.Media<'images'>;
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
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String;
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

export interface SuccessStoryTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_success_story_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    designation: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    linkedinUrl: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface TeamPageCeoMessage extends Struct.ComponentSchema {
  collectionName: 'components_team_page_ceo_messages';
  info: {
    displayName: 'CEO Message';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    name: Schema.Attribute.String;
  };
}

export interface TeamPageFounderIntro extends Struct.ComponentSchema {
  collectionName: 'components_team_page_founder_intros';
  info: {
    displayName: 'Founder Intro';
  };
  attributes: {
    founderGreeting: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    founderImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface TeamPageTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_page_team_members';
  info: {
    displayName: 'team_member';
  };
  attributes: {
    designation: Schema.Attribute.String & Schema.Attribute.Required;
    linkedinUrl: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface TeamPageTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_team_page_team_sections';
  info: {
    displayName: 'team-section';
  };
  attributes: {
    team_member: Schema.Attribute.Component<'team-page.team-member', true>;
    title: Schema.Attribute.String;
  };
}

export interface TeamPageVisionAndMission extends Struct.ComponentSchema {
  collectionName: 'components_team_page_vision_and_missions';
  info: {
    displayName: 'Vision & Mission';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeamMember extends Struct.ComponentSchema {
  collectionName: 'components_team_members';
  info: {
    displayName: 'member';
  };
  attributes: {};
}

export interface ToolSectionToolItem extends Struct.ComponentSchema {
  collectionName: 'components_tool_section_tool_items';
  info: {
    displayName: 'tool-item';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.approach-item': AboutApproachItem;
      'about.approach-section': AboutApproachSection;
      'about.image-text-section': AboutImageTextSection;
      'about.intro-section': AboutIntroSection;
      'about.list-item': AboutListItem;
      'about.list-with-image-section': AboutListWithImageSection;
      'about.value-item': AboutValueItem;
      'about.values-section': AboutValuesSection;
      'apollo.cta-section': ApolloCtaSection;
      'apollo.hero-section': ApolloHeroSection;
      'apollo.process-item': ApolloProcessItem;
      'apollo.service-item': ApolloServiceItem;
      'apollo.tool-item': ApolloToolItem;
      'apollo.tool-section': ApolloToolSection;
      'apollo.why-city-section': ApolloWhyCitySection;
      'contact.steps': ContactSteps;
      'execution-features.execution-features': ExecutionFeaturesExecutionFeatures;
      'faq.faq': FaqFaq;
      'home.about': HomeAbout;
      'home.about-feature-item': HomeAboutFeatureItem;
      'home.case-studies': HomeCaseStudies;
      'home.case-study-card': HomeCaseStudyCard;
      'home.hero': HomeHero;
      'home.partner-block': HomePartnerBlock;
      'home.partner-fit': HomePartnerFit;
      'home.partner-item': HomePartnerItem;
      'home.process-section': HomeProcessSection;
      'home.process-step': HomeProcessStep;
      'home.why-thynkwise': HomeWhyThynkwise;
      'home.why-thynkwise-item': HomeWhyThynkwiseItem;
      'platform-features.execution-features': PlatformFeaturesExecutionFeatures;
      'platform-features.platform-features': PlatformFeaturesPlatformFeatures;
      'pricing-page.pricing-plan': PricingPagePricingPlan;
      'pricing.plan': PricingPlan;
      'pricing.platform-features': PricingPlatformFeatures;
      'pricing.tab': PricingTab;
      'services.service-section': ServicesServiceSection;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'success-story.testimonials': SuccessStoryTestimonials;
      'team-page.ceo-message': TeamPageCeoMessage;
      'team-page.founder-intro': TeamPageFounderIntro;
      'team-page.team-member': TeamPageTeamMember;
      'team-page.team-section': TeamPageTeamSection;
      'team-page.vision-and-mission': TeamPageVisionAndMission;
      'team.member': TeamMember;
      'tool-section.tool-item': ToolSectionToolItem;
    }
  }
}
