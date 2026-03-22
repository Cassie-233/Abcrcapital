interface GlobalReachProps {
  language: 'en' | 'zh';
}

export function GlobalReach({ language }: GlobalReachProps) {
  const content = {
    en: {
      title: 'Global Reach',
      description: 'Serving clients globally with a digital-first approach.',
    },
    zh: {
      title: '全球覆盖',
      description: '以数字化优先的方式为全球客户提供服务。',
    },
  };

  const t = content[language];

  return (
    <section id="global" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="font-['Tenor_Sans'] mb-6"
              style={{ 
                fontSize: 'clamp(32px, 5vw, 48px)', 
                color: '#FEFFFA'
              }}
            >
              {t.title}
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FEFFFA', opacity: '0.8' }}>
              {t.description}
            </p>
          </div>
          
          <div className="aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1586036308218-5ed6553c98b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29ybGQlMjBtYXAlMjBuZXR3b3JrJTIwZ2xvYmFsfGVufDF8fHx8MTc3NDE2MjgzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global Network"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.8)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}