import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function ApologySite() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '70%' });
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-50 text-center px-4 overflow-hidden">
        {/* Konfeti Efekti */}
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.15}
        />
        
        {/* Kendi dosyamızdaki Mutlu Ayıcık */}
        <img 
          src="/mutlu.gif" 
          alt="Mutlu Ayıcık" 
          className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6 relative z-10"
        />

        <h1 className="text-5xl md:text-7xl font-extrabold text-rose-600 mb-6 drop-shadow-sm relative z-10">
          Teşekkür Ederim!
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-rose-800 max-w-2xl leading-relaxed relative z-10">
          Beni affettiğin için dünyanın en mutlu insanı oldum. Hatamı telafi etmek için sabırsızlanıyorum. Seni çok seviyorum! 🥰
        </p>
        
        <button 
          onClick={() => setAccepted(false)}
          className="mt-12 bg-white text-rose-500 font-bold py-3 px-8 rounded-full shadow hover:bg-rose-100 transition-colors border border-rose-200 cursor-pointer relative z-10"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-rose-50 px-4 overflow-hidden">
      
      {/* Kendi dosyamızdaki Üzgün Ayıcık */}
      <img 
        src="/uzgun.gif" 
        alt="Üzgün Ayıcık" 
        className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4 relative z-10"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold text-rose-700 mb-6 text-center relative z-10">
        Her Şey İçin Çok Özür Dilerim...
      </h1>

      <p className="text-xl text-rose-900 mb-12 text-center max-w-xl font-medium leading-relaxed relative z-10">
        Seni kırdığım için gerçekten çok üzgünüm. Hatamı biliyorum ve telafi etmek için bu küçük sayfayı hazırladım. Lütfen beni affet, yeniden gülümsemeni görmek istiyorum. 🥺
      </p>
      
      <div className="relative w-full max-w-3xl h-64 flex items-center justify-center">
        
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
          className="bg-rose-500 text-white font-bold py-4 px-10 text-xl rounded-full shadow-lg cursor-pointer z-10"
        >
          Hayır 😢
        </button>
      </div>
    </div>
  );
}