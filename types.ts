
export type Language = 'AR' | 'FR';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Translations {
  nav_home: string;
  nav_services: string;
  nav_contact: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  services_title: string;
  services_subtitle: string;
  contact_title: string;
  contact_subtitle: string;
  form_name: string;
  form_phone: string;
  form_email: string;
  form_service: string;
  form_date: string;
  form_time: string;
  form_submit: string;
  footer_address: string;
  footer_rights: string;
  whatsapp_message_prefix: string;
  features_title: string;
  features_subtitle: string;
  feature_1_title: string;
  feature_1_desc: string;
  feature_2_title: string;
  feature_2_desc: string;
  feature_3_title: string;
  feature_3_desc: string;
  feature_4_title: string;
  feature_4_desc: string;
  stats_patients: string;
  stats_experience: string;
  stats_specialists: string;
  stats_awards: string;
}
