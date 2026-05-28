import { useState, useEffect } from 'react';

export default function ApologySite() {
  const [accepted, setAccepted] = useState(false);
  
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '70%' });

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    const handleBackButton = () => {
      window.history.pushState(null, null, window.location.href);
      setAccepted(false);
    };
    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 70 + 15;
    const y = Math.random() * 70 + 15;
    setNoButtonPosition({ top: `${y}%`, left: `${x}%` });
  };

  if (accepted) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-50 text-center px-4">
        <div className="text-9xl mb-8 animate-bounce">❤️</div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 mb-6 drop-shadow-sm">
          Teşekkür Ederim!
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-rose-800 max-w-2xl leading-relaxed">
          Beni affettiğin için dünyanın en mutlu insanı oldum. Hatamı telafi etmek için sabırsızlanıyorum. Seni çok seviyorum! 🥰
        </p>
        
        <button 
          onClick={() => setAccepted(false)}
          className="mt-12 bg-white text-rose-500 font-bold py-3 px-8 rounded-full shadow hover:bg-rose-100 transition-colors border border-rose-200 cursor-pointer"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-50 px-4 overflow-hidden">
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-8 text-center">
        Her Şey İçin Çok Özür Dilerim...
      </h1>

      <p className="text-xl text-rose-900 mb-16 text-center max-w-xl font-medium leading-relaxed">
        Seni kırdığım için gerçekten çok üzgünüm. Hatamı biliyorum ve telafi etmek için bu küçük sayfayı hazırladım. Lütfen beni affet, yeniden gülümsemeni görmek istiyorum. 🥺
      </p>
      
      <div className="relative w-full max-w-3xl h-80 flex items-center justify-center">
        
        {/* "Evet" Butonuna cursor-pointer eklendi */}
        <button 
          onClick={() => {
            setAccepted(true);
            window.history.pushState(null, null, window.location.href);
          }}
          className="absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-400 hover:bg-emerald-500 hover:scale-110 text-emerald-950 font-extrabold py-4 px-10 text-xl rounded-full shadow-lg transition-all duration-300 z-10 cursor-pointer"
        >
          Seni Affediyorum 💖
        </button>
        
        <button 
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={{ 
            top: noButtonPosition.top, 
            left: noButtonPosition.left, 
            position: 'absolute', 
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.2s ease-out'
          }}
          className="bg-rose-500 text-white font-bold py-4 px-10 text-xl rounded-full shadow-lg cursor-pointer"
        >
          Hayır 😢
        </button>
      </div>
    </div>
  );
}