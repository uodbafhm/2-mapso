
import { Service, Translations } from './types';

export const DOCTOR_INFO = {
  name: "MAPSO",
  whatsapp: "0600000000",
  phone: "0500000000",
  instagram: "mapso.clinic",
  address: "Maroc, Casablanca",
  google_maps_iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106354.10322525547!2d-7.669394614648437!3d33.5722684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1710000000000!5m2!1sen!2sma",
  google_maps_link: "https://www.google.com/maps/place/Casablanca/"
};

export const SERVICES_AR: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const SERVICES_FR: Service[] = [
  {
    id: "blanchiment",
    title: "Blanchiment Dentaire",
    description: "Blanchiment professionnel pour un sourire éclatant et naturel avec les dernières technologies.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "✨"
  },
  {
    id: "implants",
    title: "Implants Dentaires",
    description: "Restauration permanente des dents manquantes pour un confort et une confiance garantis.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷"
  },
  {
    id: "orthodontie",
    title: "Orthodontie",
    description: "Correction de l'alignement des dents pour enfants et adultes.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "Soins Caries",
    description: "Traitement rapide et sans douleur des caries tout en préservant la structure dentaire.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️"
  },
  {
    id: "detartrage",
    title: "Détartrage & Polissage",
    description: "Élimination de la plaque et du tartre pour maintenir des gencives saines.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼"
  },
  {
    id: "extraction",
    title: "Extraction Dentaire",
    description: "Extraction sûre avec des soins particuliers pour minimiser la douleur.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️"
  }
];

export const TRANSLATIONS_AR: Translations = {
  nav_home: "الرئيسية",
  nav_services: "خدماتنا",
  nav_contact: "حجز موعد",
  hero_title: "ابتسامتك هي أولويتنا",
  hero_subtitle: "نحن نقدم أفضل رعاية صحية لأسنانك باستخدام أحدث التقنيات لضمان راحتك وجمال ابتسامتك.",
  hero_cta: "احجز موعدك الآن",
  services_title: "خدماتنا المتميزة",
  services_subtitle: "حلول شاملة لصحة وجمال أسنانك",
  contact_title: "تواصل معنا",
  contact_subtitle: "املأ الاستمارة وسنقوم بالتواصل معك عبر الواتساب لتأكيد الموعد",
  form_name: "الاسم الكامل",
  form_phone: "رقم الهاتف",
  form_email: "البريد الإلكتروني",
  form_service: "الخدمة المطلوبة",
  form_date: "تاريخ الموعد",
  form_time: "وقت الموعد",
  form_submit: "تأكيد الموعد عبر واتساب",
  footer_address: "المغرب، الدار البيضاء",
  footer_rights: "جميع الحقوق محفوظة",
  whatsapp_message_prefix: "السلام عليكم MAPSO، أود حجز موعد ل",
  features_title: "لماذا تختار عيادتنا؟",
  features_subtitle: "نحن نجمع بين الخبرة والتقنية لتوفير أفضل رعاية ممكنة",
  feature_1_title: "فريق محترف",
  feature_1_desc: "نخبة من الأطباء المتخصصين ذوي الخبرة العالية",
  feature_2_title: "أحدث التقنيات",
  feature_2_desc: "نستخدم أحدث الأجهزة والمعدات الطبية العالمية",
  feature_3_title: "رعاية طارئة",
  feature_3_desc: "نحن هنا من أجلك في الحالات المستعجلة والطارئة",
  feature_4_title: "أسعار مناسبة",
  feature_4_desc: "نقدم أفضل الخدمات بأسعار تنافسية وخطط دفع مرنة",
  stats_patients: "مريض سعيد",
  stats_experience: "سنة خبرة",
  stats_specialists: "أخصائي",
  stats_awards: "جائزة تميز"
};

export const TRANSLATIONS_FR: Translations = {
  nav_home: "Accueil",
  nav_services: "Services",
  nav_contact: "Rendez-vous",
  hero_title: "Votre sourire est notre priorité",
  hero_subtitle: "Nous offrons les meilleurs soins dentaires avec des technologies de pointe pour votre confort.",
  hero_cta: "Prendre rendez-vous",
  services_title: "Nos Services",
  services_subtitle: "Solutions complètes pour la santé et la beauté de vos dents",
  contact_title: "Contactez-nous",
  contact_subtitle: "Remplissez le formulaire et nous vous contacterons via WhatsApp pour confirmer.",
  form_name: "Nom complet",
  form_phone: "Téléphone",
  form_email: "E-mail",
  form_service: "Service souhaité",
  form_date: "Date du RDV",
  form_time: "Heure du RDV",
  form_submit: "Réserver via WhatsApp",
  footer_address: "Maroc, Casablanca",
  footer_rights: "Tous droits réservés",
  whatsapp_message_prefix: "Bonjour MAPSO, je souhaite prendre un rendez-vous pour ",
  features_title: "Pourquoi choisir notre clinique ?",
  features_subtitle: "Nous combinons expertise et technologie pour offrir les meilleurs soins",
  feature_1_title: "Équipe Professionnelle",
  feature_1_desc: "Des médecins spécialistes hautement qualifiés",
  feature_2_title: "Dernières Technologies",
  feature_2_desc: "Nous utilisons les équipements médicaux les plus récents",
  feature_3_title: "Soins d'Urgence",
  feature_3_desc: "Nous sommes là pour vous en cas d'urgence",
  feature_4_title: "Tarifs Abordables",
  feature_4_desc: "Des services de qualité à des prix compétitifs",
  stats_patients: "Patients Heureux",
  stats_experience: "Ans d'Expérience",
  stats_specialists: "Spécialistes",
  stats_awards: "Prix d'Excellence"
};
