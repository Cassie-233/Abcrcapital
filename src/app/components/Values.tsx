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
          description: 'We own every decision—full responsibility for capital, partners, and long-term results, with every outcome measurable and transparent.',
        },
        {
          letter: 'B',
          title: 'Benevolent',
          description: 'We pursue genuine win-win outcomes, deploying capital to create sustainable, positive value for clients and all stakeholders.',
        },
        {
          letter: 'C',
          title: 'Credible',
          description: 'Built on uncompromising transparency, deep professionalism, and strict regulatory compliance to earn and preserve lasting trust.',
        },
        {
          letter: 'R',
          title: 'Resilient',
          description: 'We deliver steady, robust growth through market cycles and volatility, prioritizing sustainable and repeatable long-term returns.',
        },
      ],
    },
    zh: {
      title: '核心价值观',
      values: [
        {
          letter: 'A',
          title: 'Accountable 责任担当',
          description: '我们对每一项决策负责——对资本、合作伙伴及长期结果承担全部责任，所有成果均可衡量且透明。',
        },
        {
          letter: 'B',
          title: 'Benevolent 利他共赢',
          description: '我们追求真正的双赢，通过资本配置为客户及所有利益相关方创造可持续的正向价值。',
        },
        {
          letter: 'C',
          title: 'Credible 公信可靠',
          description: '以绝对透明、专业深度和严格合规为基础，建立并维护持久的信任。',
        },
        {
          letter: 'R',
          title: 'Resilient 韧性增长',
          description: '在市场周期与波动中实现稳健增长，优先考虑可持续、可复制的长期回报。',
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
                {value.title}
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
