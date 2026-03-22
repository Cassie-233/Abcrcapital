interface ValuesProps {
  language: 'en' | 'zh';
}

export function Values({ language }: ValuesProps) {
  const content = {
    en: {
      title: 'Core Values',
      values: [
        {
          letter: 'A',
          title: 'Accountable',
          description: 'Responsible for capital, partners, and long-term outcomes.',
        },
        {
          letter: 'B',
          title: 'Benevolent',
          description: 'Aligned with long-term, win-win value creation.',
        },
        {
          letter: 'C',
          title: 'Credible',
          description: 'Built on transparency, professionalism, and trust.',
        },
        {
          letter: 'R',
          title: 'Resilient',
          description: 'Sustainable growth across cycles and volatility.',
        },
      ],
    },
    zh: {
      title: '核心价值观',
      values: [
        {
          letter: 'A',
          title: '负责任',
          description: '对资本、合作伙伴和长期结果负责。',
        },
        {
          letter: 'B',
          title: '仁爱',
          description: '致力于长期共赢的价值创造。',
        },
        {
          letter: 'C',
          title: '可信',
          description: '建立在透明、专业和信任之上。',
        },
        {
          letter: 'R',
          title: '坚韧',
          description: '在周期和波动中实现可持续增长。',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="values" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <h2 
          className="font-['Tenor_Sans'] mb-16 text-center"
          style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            color: '#FEFFFA'
          }}
        >
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {t.values.map((value) => (
            <div key={value.letter} className="text-center md:text-left">
              <h3 
                className="font-['Tenor_Sans'] mb-4"
                style={{ 
                  fontSize: 'clamp(24px, 4vw, 32px)', 
                  color: '#FEFFFA'
                }}
              >
                {value.letter} — {value.title}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#FEFFFA', opacity: '0.8' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}