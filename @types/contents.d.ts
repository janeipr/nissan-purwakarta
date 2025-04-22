interface Service {
  slug: string;
  thumbnail: string;
  subtitle: string;
  title: string;
  tags: string[];
  description: string;
  publishDate: Date;
  category: string;
  screenshots: ServiceScreenshot[];
}

interface ServiceScreenshot {
  image: string;
  title: string;
}

interface Promo {
  title: string;
  slug: string;
  publishDate: Date;
  thumbnail: string;
  icon: PromoIcon;
}

interface PromoIcon {
  src: string;
  color: string;
}
