interface HeroProps {
  language: 'en' | 'zh';
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      title: 'ABCR Capital',
      subtitle: 'Global Equity Management',
      a: 'A — Accountable',
      b: 'B — Benevolent',
      c: 'C — Credible',
      r: 'R — Resilient',
    },
    zh: {
      title: 'ABCR Capital',
      subtitle: '全球股权管理',
      a: 'A — Accountable｜责任担当',
      b: 'B — Benevolent｜利他共赢',
      c: 'C — Credible｜公信可靠',
      r: 'R — Resilient｜韧性增长',
    },
  };

  const t = content[language];

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1764534161906-f08540a2d333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2l0eSUyMHNreWxpbmUlMjBuaWdodCUyMGZpbmFuY2V8ZW58MXx8fHwxNzc0MTYyODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }} />
      
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl md:ml-0 text-center md:text-left">
          <h1 
            className="font-['Tenor_Sans'] mb-4"
            style={{ 
              fontSize: 'clamp(48px, 8vw, 96px)', 
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: '#FEFFFA'
            }}
          >
            {t.title}
          </h1>
          
          <p 
            className="mb-12"
            style={{ 
              fontSize: 'clamp(20px, 3vw, 32px)', 
              color: '#FEFFFA',
              opacity: '0.9'
            }}
          >
            {t.subtitle}
          </p>
          
          <div className="space-y-2" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#FEFFFA' }}>
            <p>{t.a}</p>
            <p>{t.b}</p>
            <p>{t.c}</p>
            <p className="font-[Plus_Jakarta_Sans]">{t.r}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
