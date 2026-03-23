interface GlobalReachProps {
  language: 'en' | 'zh';
}

export function GlobalReach({ language }: GlobalReachProps) {
  const content = {
    en: {
      title: 'About',
      description: 'ABCR Capital LLC is a boutique investment firm specializing in U.S. equity trading and active capital management, delivering disciplined, high-conviction strategies to a global client base.\n\nFounded and led by Corey D. Richards, who has been trading U.S. stocks since 1995 with a proven track record of delivering average annualized returns exceeding 20% (net of fees, over multiple market cycles), ABCR Capital focuses on resilient, risk-adjusted performance that consistently outperforms benchmarks. With offices in Seattle, Washington and Jacksonville, Florida, the firm bridges West Coast innovation and East Coast accessibility to provide personalized, long-term investment solutions.',
    },
    zh: {
      title: '关于我们',
      description: 'ABCR Capital LLC 是一家精品投资公司，专注于美国股市交易与主动资本管理，为全球客户提供纪律严明、高信念度的投资策略。',
      description2: '公司由 Corey D. Richards 创立并领导，他自 1995 年起活跃于美股交易，长期保持年化平均回报率超过 20%（扣除费用后，多周期验证），致力于提供超越基准、风险调整后的稳健表现。公司在华盛顿州西雅图和佛罗里达州杰克逊维尔设有办公室，将西海岸创新与东海岸便利性相结合，为客户量身定制长期投资方案。',
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-24 md:py-32">
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
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FEFFFA', opacity: '0.8', whiteSpace: 'pre-line' }}>
              {t.description}
            </p>
            {t.description2 && (
              <div style={{ marginTop: '12px' }}>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#FEFFFA', opacity: '0.8', whiteSpace: 'pre-line' }}>
                  {t.description2}
                </p>
              </div>
            )}
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
