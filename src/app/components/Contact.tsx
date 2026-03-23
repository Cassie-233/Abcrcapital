import { useState } from 'react';

interface ContactProps {
  language: 'en' | 'zh';
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const content = {
    en: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      orEmail: 'Or email us directly:',
    },
    zh: {
      title: '联系我们',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      send: '发送',
      orEmail: '或直接发送邮件：',
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Thank you for your message!' : '感谢您的留言！');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-[500px] mx-auto px-6 md:px-12">
        <h2 
          className="font-['Tenor_Sans'] mb-12 text-center"
          style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            color: '#FEFFFA'
          }}
        >
          {t.title}
        </h2>
        
        
        
        <div className="text-center">
          
          <a 
            href="mailto:info@abcrcapital.com"
            style={{ fontSize: '16px', color: '#C9A00D' }}
            className="hover:opacity-80 transition-opacity"
          >
            info@abcrcapital.com
          </a>
        </div>
      </div>
    </section>
  );
}
