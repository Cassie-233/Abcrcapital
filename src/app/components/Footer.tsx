interface FooterProps {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
}

export function Footer({ language, setLanguage }: FooterProps) {
  return (
    <footer id="footer" className="py-12 border-t" style={{ borderColor: 'rgba(254, 255, 250, 0.1)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p style={{ fontSize: '14px', color: '#FEFFFA', opacity: '0.6' }}>
            © {new Date().getFullYear()} ABCR Capital
          </p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage('en')}
              className="transition-opacity"
              style={{ 
                fontSize: '14px', 
                color: '#FEFFFA', 
                opacity: language === 'en' ? '1' : '0.5'
              }}
            >
              EN
            </button>
            <span style={{ color: '#FEFFFA', opacity: '0.3' }}>|</span>
            <button
              onClick={() => setLanguage('zh')}
              className="transition-opacity"
              style={{ 
                fontSize: '14px', 
                color: '#FEFFFA', 
                opacity: language === 'zh' ? '1' : '0.5'
              }}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
