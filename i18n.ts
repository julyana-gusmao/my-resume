import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'pt'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  const messages: Record<string, Record<string, any>> = {
    en: {
      header: (await import(`./messages/en/header.json`)).default,
      about: (await import(`./messages/en/about.json`)).default,
      coding: (await import(`./messages/en/coding.json`)).default,
      contact: (await import(`./messages/en/contact.json`)).default,
      hero: (await import(`./messages/en/hero.json`)).default,
      skills: (await import(`./messages/en/skills.json`)).default,
    },
    pt: {
      header: (await import(`./messages/pt/header.json`)).default,
      about: (await import(`./messages/pt/about.json`)).default,
      coding: (await import(`./messages/pt/coding.json`)).default,
      contact: (await import(`./messages/pt/contact.json`)).default,
      hero: (await import(`./messages/pt/hero.json`)).default,
      skills: (await import(`./messages/pt/skills.json`)).default,
    },
  };

  return {
    messages: messages[locale],
  };
});
