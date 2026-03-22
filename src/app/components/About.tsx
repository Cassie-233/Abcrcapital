interface AboutProps {
  language: 'en' | 'zh';
}

export function About({ language }: AboutProps) {
  const content = {
    en: {
      text: 'Serving high-net-worth clients across the US, Asia, and the Middle East, with a focus on long-term US equity investment management.',
    },
    zh: {
      text: '面向欧美、亚洲、中东高净值客户，专注美股资产管理，提供长期稳健的投资解决方案。',
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
        <p className="font-bold" 
          style={{ 
            fontSize: 'clamp(20px, 3vw, 28px)', 
            lineHeight: '1.6',
            color: '#FEFFFA'
          }}
        >
          {t.text}
        </p>
      </div>
    </section>
  );
}
