interface ServicesProps {
  language: 'en' | 'zh';
}

export function Services({ language }: ServicesProps) {
  const content = {
    en: {
      title: 'Services',
      services: [
        'US Equity Investment Management',
        'Portfolio Strategy & Allocation',
        'Global Client Advisory',
      ],
    },
    zh: {
      title: '服务',
      services: [
        '美股投资管理',
        '投资组合策略与配置',
        '全球客户咨询',
      ],
    },
  };

  const t = content[language];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-[600px]">
          <h2 
            className="font-['Tenor_Sans'] mb-12"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              color: '#FEFFFA'
            }}
          >
            {t.title}
          </h2>
          
          <div className="space-y-6">
            {t.services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4"
              >
                <span style={{ color: 'rgba(201, 160, 13, 1)', fontSize: '20px' }}>•</span>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FEFFFA' }}>
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
