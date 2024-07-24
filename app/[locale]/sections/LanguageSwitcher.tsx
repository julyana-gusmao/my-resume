'use client';

import brFlag from "@/br-flag.png";
import usFlag from "@/us-flag.png";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const locale = pathname.split('/')[1] || 'en';

  const changeLanguage = (lang: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPathname);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => changeLanguage('pt')} >
        <Image src={brFlag} alt="Português" width={32} height={24} className={`${locale === 'en' ? 'opacity-20' : ''}`} />
      </button>
      <button onClick={() => changeLanguage('en')} >
        <Image src={usFlag} alt="English" width={32} height={24} className={`${locale === 'pt' ? 'opacity-20' : ''}`} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
