import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

export function Navigation({ language, setLanguage }: NavigationProps) {
  const content = {
    en: {
      home: 'Home',
      values: 'Values',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    zh: {
      home: '首页',
      values: '价值观',
      services: '服务',
      about: '关于',
      contact: '联系',
    },
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#161616' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <button 
          onClick={() => scrollToSection('hero')}
          className="transition-opacity hover:opacity-70"
        >
          <ImageWithFallback
            src="/images/ABCR logo2.jpg"
            alt="ABCR Capital"
            className="h-8 w-auto object-contain"
          />
        </button>
        
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="transition-opacity hover:opacity-70" style={{ color: '#FEFFFA' }}>
              {t.home}
            </button>
            
            <button onClick={() => scrollToSection('values')} className="transition-opacity hover:opacity-70" style={{ color: '#FEFFFA' }}>
              {t.values}
            </button>
            <button onClick={() => scrollToSection('services')} className="transition-opacity hover:opacity-70" style={{ color: '#FEFFFA' }}>
              {t.services}
            </button>
            <button onClick={() => scrollToSection('global')} className="transition-opacity hover:opacity-70" style={{ color: '#FEFFFA' }}>
              {t.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className="transition-opacity hover:opacity-70" style={{ color: '#FEFFFA' }}>
              {t.contact}
            </button>
          </div>
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="transition-opacity hover:opacity-70 border px-3 py-1"
            style={{ color: '#FEFFFA', borderColor: 'rgba(254, 255, 250, 0.2)' }}
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}
