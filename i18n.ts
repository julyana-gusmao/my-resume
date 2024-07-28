import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'pt'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages: Record<string, Record<string, any>> = {
    en: {
      header: (await import(`./json/en/header.json`)).default,
      about: (await import(`./json/en/about.json`)).default,
      coding: (await import(`./json/en/coding.json`)).default,
      contact: (await import(`./json/en/contact.json`)).default,
      hero: (await import(`./json/en/hero.json`)).default,
      skills: (await import(`./json/en/skills.json`)).default,
    },
    pt: {
      header: (await import(`./json/pt/header.json`)).default,
      about: (await import(`./json/pt/about.json`)).default,
      coding: (await import(`./json/pt/coding.json`)).default,
      contact: (await import(`./json/pt/contact.json`)).default,
      hero: (await import(`./json/pt/hero.json`)).default,
      skills: (await import(`./json/pt/skills.json`)).default,
    },
  };

  return {
    messages: messages[locale],
  };
});
