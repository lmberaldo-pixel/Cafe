
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { LOGO_SVG, BRAND_NAME, PRODUCTS, FULL_PROCESS, getWhatsAppLink } from './constants';
import logoImg from './Cafe-maita/foto/logo.jpg';
import processCuraImg from './Cafe-maita/foto/ChatGPT Image 16 de fev. de 2026, 18_57_17.png';
import gardenImg from './Cafe-maita/foto/jardim4.jpg';
import harvestImg from './Cafe-maita/foto/ChatGPT Image 21 de fev. de 2026, 18_27_50.png';
import historyImg from './Cafe-maita/foto/IMG_20250711_172938.jpg';
import cidadeImg from './Cafe-maita/foto/IMG_20250701_213210.jpg';
import identidadeImg from './Cafe-maita/foto/ChatGPT Image 16 de fev. de 2026, 18_55_20.png';
import ararasImg from './Cafe-maita/foto/IMG_20260221_012644_128.jpg';
import extraFoto1 from './Cafe-maita/foto/WhatsApp Image 2026-03-03 at 08.05.47 (2).jpeg';
import extraFoto2 from './Cafe-maita/foto/WhatsApp Image 2026-03-29 at 15.55.23.jpeg';
import maitaVideo1 from './Cafe-maita/video/VID_20260215_201452_585.mp4';
import maitaVideo2 from './Cafe-maita/video/YouCut_20260215_214824771.mp4';
import maitaVideo3 from './Cafe-maita/video/VID_20260215_201316_174.mp4';
import maitaVideo4 from './Cafe-maita/video/VID_20260215_201922_381.mp4';
import maitaVideoTorra from './Cafe-maita/video/VID_20260215_201416_750.mp4';
import maitaVideoColheita from './Cafe-maita/video/VID_20260215_201849_738.mp4';
import maitaVideoPreparo from './Cafe-maita/video/VID_20260215_201118_829.mp4';
import maitaVideoLifestyle from './Cafe-maita/video/torranofogo.mp4';
import maitaVideoDespertar from './Cafe-maita/video/VID_20260221_013026_938.mp4';
import maitaVideoExtra1 from './Cafe-maita/video/VID_20260221_012359_348.mp4';
import maitaVideoExtra3 from './Cafe-maita/video/VID_20260221_013039_845.mp4';
import maitaVideoExtra4 from './Cafe-maita/video/VID_20260221_012533_165.mp4';
import graoColheita3 from './Cafe-maita/foto/png/graocolheita3.png';
import graoColheita4 from './Cafe-maita/foto/png/graocolheita4.png';
import graoColheita5 from './Cafe-maita/foto/png/graocolheita5.png';
import novaImg1 from './Cafe-maita/foto/WhatsApp Image 2026-03-03 at 08.05.48 (1).jpeg';
import novaImg2 from './Cafe-maita/foto/image_27b25160.png';
import novaImg3 from './Cafe-maita/foto/WhatsApp Image 2026-03-02 at 09.48.50.jpeg';
import novaImg4 from './Cafe-maita/foto/ChatGPT Image 21 de fev. de 2026, 18_27_55.png';
import novaImg5 from './Cafe-maita/foto/pe1.jpg';
import novaImg6 from './Cafe-maita/foto/pe10.jpg';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'history':
        return <HistoryPage />;
      case 'products':
        return <ProductsPage />;
      case 'process':
        return <ProcessPage />;
      case 'roast':
        return <RoastPage />;
      case 'videos':
        return <VideosPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col scroll-smooth">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

// --- PAGINA: HOME ---
const HomePage: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => (
  <>
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <img
          src={processCuraImg}
          className="w-full h-full object-cover opacity-50 animate-slow-zoom"
          alt="Coffee Table"
        />
      </div>

      {/* Texto Gigante Esmaecido */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="bg-gradient-to-b from-white/60 to-white/0 bg-clip-text text-transparent font-sans font-black uppercase text-[15vw] leading-none select-none whitespace-nowrap tracking-tighter inline-block scale-y-[1.8] scale-x-75 translate-y-[35vh] md:translate-y-[20vh]">
          100% Arábica
        </span>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-white mb-10 tracking-wide drop-shadow-md leading-relaxed">
          O café artesanal que carrega a alma de Manduri em cada grão.
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => onNavigate('products')}
            className="bg-[#1B4332] text-white px-12 py-5 rounded-[2rem] text-xl font-semibold hover:bg-[#081C15] transition-all shadow-xl"
          >
            Explorar Sabores
          </button>
          <button
            onClick={() => onNavigate('history')}
            className="bg-transparent text-white border-2 border-white/50 px-12 py-5 rounded-[2rem] text-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Nossa Jornada
          </button>
        </div>
      </div>
    </section>

    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="w-full flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold font-serif mb-6 text-[#1B4332]">Café com Consciência</h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Localizado no interior de São Paulo, o Café Maitá nasceu da vontade de resgatar o sabor verdadeiro do campo, unindo técnicas artesanais de colheita ao cuidado minucioso e à essência da nossa torra artesanal feita lentamente para preservar cada nuance.
            </p>
            <button onClick={() => onNavigate('process')} className="text-[#1B4332] font-bold border-b-2 border-[#1B4332] hover:text-[#081C15] transition-colors pb-1 mb-8">
              Conheça o nosso Processo
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6 w-full">
            <div className="aspect-square overflow-hidden rounded-3xl shadow-xl">
              <img
                src={gardenImg}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Fazenda de Café"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl shadow-xl">
              <img
                src={harvestImg}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Grãos de Café"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-stone-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#1B4332] font-bold uppercase tracking-widest text-xs mb-4 block">Qualidade Sensorial</span>
          <h2 className="text-4xl font-bold font-serif mb-4 text-[#1B4332]">Selos da ABIC</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            A Associação Brasileira da Indústria de Café classifica os cafés comerciais em categorias de acordo com a qualidade sensorial (nota de 0 a 10):
          </p>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-serif text-[#1B4332] mb-3">Café Extraforte</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Torra intensa e sabor marcante, voltado para quem prefere café forte.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-serif text-[#1B4332] mb-3">Café Tradicional</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Equilibrado, com torra média, ideal para o consumo diário (nota abaixo de 6,0).</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-serif text-[#1B4332] mb-3">Café Superior</h3>
              <p className="text-stone-600 text-sm leading-relaxed">Qualidade superior, com notas de 6,0 a 7,2. Selecionado e com rigoroso controle de impurezas.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-200 p-8 rounded-3xl shadow-sm border border-stone-300 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold font-serif text-[#1B4332] mb-3">Café Gourmet</h3>
              <p className="text-stone-700 text-sm leading-relaxed">Feito com grãos 100% arábica, nota sensorial acima de 7,3, superior em aroma e sabor.</p>
            </div>
            <div className="bg-[#1B4332] p-8 rounded-3xl shadow-xl border border-[#081C15] hover:shadow-2xl transition-shadow text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C19A6B] rounded-bl-full opacity-20"></div>
              <h3 className="text-2xl font-bold font-serif text-[#C19A6B] mb-3 relative z-10">Café Especial</h3>
              <p className="text-white/90 text-sm leading-relaxed relative z-10">Mais de 80 pontos (SCA), com características sensoriais superiores e rastreabilidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

// --- PAGINA: TORRA ---
const RoastPage: React.FC = () => (
  <div className="pt-32 pb-24 bg-stone-50 text-stone-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-[#1B4332] font-bold uppercase tracking-widest text-xs mb-4 block">Processo Artesanal</span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1B4332]">Etapas da Torra</h1>
      </div>

      <div className="w-full bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-200 shadow-sm max-w-4xl mx-auto">
        <div className="space-y-10">
          <div className="border-l-4 border-[#1B4332] pl-6 py-2 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold text-[#1B4332] mb-4">Torreador Manual Cilíndrico:</h3>
              <p className="text-stone-700 mb-2">Um pequeno cilindro metálico giratório colocado sobre o fogão (a gás ou lenha).</p>
              <p className="text-stone-700 mb-2">Coloque os grãos até a metade, pois eles aumentam de volume.</p>
              <p className="text-stone-700">Gire a manivela constantemente para garantir uma torra uniforme.</p>
            </div>
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-white p-2">
              <img
                src={logoImg}
                className="w-full h-full object-contain"
                alt="Ilustração Torrador de Bola"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#1B4332]">Fases da Torra e Sinais</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
                <strong className="text-[#1B4332] block mb-2">Secagem (cor verde para amarelo):</strong>
                <p className="text-stone-600 text-sm">Liberação de água e compostos voláteis, cheiro de grama/pão.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
                <strong className="text-[#1B4332] block mb-2">Reação de Maillard (amarelo para marrom):</strong>
                <p className="text-stone-600 text-sm">O grão começa a caramelizar e a aumentar de tamanho.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
                <strong className="text-[#1B4332] block mb-2">Primeiro Estalo (First Crack):</strong>
                <p className="text-stone-600 text-sm">Acontece por volta de 8-12 minutos (aprox. 180°C-200°C). Soa como estalos de pipoca, indicando que o café está com uma torra clara a média.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl shadow-sm border border-stone-100">
                <strong className="text-[#1B4332] block mb-2">Segundo Estalo (Second Crack):</strong>
                <p className="text-stone-600 text-sm">Estalos mais rápidos e agudos (aprox. 220°C+). Indica torra escura, com surgimento de óleos na superfície.</p>
              </div>
            </div>
            <div className="bg-[#1B4332] text-white p-8 rounded-2xl shadow-lg mt-8">
              <strong className="text-[#C19A6B] text-lg block mb-2 uppercase tracking-widest font-bold">Resfriamento:</strong>
              <p className="leading-relaxed">
                Passo crucial. Transfira os grãos imediatamente para um escorredor de metal e mexa/abane para resfriar rapidamente e evitar que a torra continue, o que resultaria em gosto de queimado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- PAGINA: HISTORIA ---
const HistoryPage: React.FC = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4">
      <span className="text-[#1B4332] font-bold uppercase tracking-widest text-sm mb-4 block">Nossa História</span>
      <h1 className="text-5xl md:text-6xl font-bold font-serif mb-12 text-stone-900 leading-tight">Um Canto que Ecoa de Manduri para a sua Xícara</h1>

      <div className="aspect-video mb-12 rounded-3xl overflow-hidden shadow-2xl">
        <img src={historyImg} className="w-full h-full object-cover" alt="Manduri Landscape" />
      </div>

      <div className="prose prose-lg text-stone-600 max-w-none space-y-8">
        <p className="text-2xl font-serif text-stone-800 italic">
          "Onde outros viam apenas pastagens, nós vimos uma oportunidade de preservar a herança de Manduri através do cultivo sustentável."
        </p>

        <div className="clearfix mb-12">
          <img src={cidadeImg} alt="Nome da cidade" className="float-left w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg mr-6 mb-4" />
          <h3 className="text-3xl font-serif text-stone-900 mb-6 text-[#1B4332]">Nome da Cidade</h3>
          <p>
            A história moderna de Manduri começou a ser trilhada nos trilhos de ferro. Em <strong>1905</strong>, com o avanço da Estrada de Ferro Sorocabana, a cidade nasceu como um ponto estratégico de conexão, pulsando ao ritmo do progresso ferroviário.
          </p>
          <p>
            O nome "Manduri" carrega em si a essência da nossa terra através de duas origens fascinantes. A primeira homenageia a abundância da <strong>abelha silvestre Manduri</strong>, famosa por seu mel delicioso que perfumava a região. A segunda raiz vem da língua Tupi, significando <strong>"Campo Largo"</strong>, uma descrição perfeita da nossa topografia de planalto.
          </p>
        </div>

        <div className="clearfix mb-12">
          <img src={identidadeImg} alt="Identidade e Autonomia" className="float-right w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg ml-6 mb-4" />
          <h3 className="text-3xl font-serif text-stone-900 mb-6 text-[#1B4332]">Identidade e Autonomia</h3>
          <p>
            Foi em <strong>1944</strong> que Manduri alcançou um marco fundamental, sendo elevada à categoria de Município, com sua instalação oficial em 1º de janeiro de 1945. Essa autonomia permitiu que a vocação agropecuária da região se consolidasse, servindo de berço para o que viria a ser o Café Maitá.
          </p>
        </div>


        <div className="mt-20 pt-10 clearfix">
          <img src={ararasImg} alt="Araras" className="float-left w-32 h-32 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg mr-6 mb-4" />
          <h3 className="text-3xl font-serif text-stone-900 mb-8 text-[#1B4332]">Araras: O Pulso Rural de Manduri</h3>
          <p>
            Ancorado na zona rural de Manduri, o <strong>Bairro Araras</strong> (CEP 18780-000) é muito mais que uma coordenada geográfica; é onde a alma produtora da nossa terra se manifesta em sua forma mais pura. Longe da agitação urbana, este bairro é composto por propriedades agrícolas e chácaras que formam um cinturão de cultivo essencial para a nossa identidade.
          </p>

          <p>
            Araras é um bairro rural do município de Manduri, no interior de São Paulo, com perfil voltado à agricultura e horticultura. Manduri tem cerca de 10 mil habitantes e área aproximada de 229 km².
          </p>

          <p>
            A região apresenta topografia ondulada a suavemente colinosa, com altitudes entre 640 e 758 metros, característica comum do interior paulista. Esse relevo favorece atividades rurais, embora em alguns pontos possa exigir manejo do solo e da água. Os solos, como os latossolos, são geralmente férteis e retêm boa umidade quando bem manejados.
          </p>

          <p>
            O clima é tropical de altitude (Cwa), com verões quentes e chuvosos e invernos mais secos. As temperaturas variam entre cerca de 20 °C e 32 °C no verão, enquanto no inverno as mínimas caem, mas sem frio intenso. As chuvas concentradas no verão favorecem a agricultura, embora períodos secos exijam técnicas de irrigação e conservação de água.
          </p>

          <p>
            A economia local é predominantemente agropecuária, com pequenas propriedades dedicadas ao cultivo de hortaliças como alface, tomate e pimentão, além da existência de associação de produtores rurais, indicando organização comunitária no setor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-16 mt-12 w-full">
          <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <img src={extraFoto1} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Fazenda Maitá 1" />
          </div>
          <div className="aspect-square md:aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <img src={extraFoto2} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Fazenda Maitá 2" />
          </div>
        </div>

        <div className="bg-stone-100 p-10 rounded-3xl my-16 border border-stone-200">
          <h4 className="text-2xl font-serif text-[#1B4332] mb-8 text-center">Manduri em Números e Fatos</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">🏔️</div>
                <div>
                  <h5 className="font-bold text-stone-900">Geografia</h5>
                  <p className="text-sm">Situada a 705 metros de altitude em um planalto plano. Estamos a 334 km da capital São Paulo pela Rodovia Castelo Branco.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">☀️</div>
                <div>
                  <h5 className="font-bold text-stone-900">Clima</h5>
                  <p className="text-sm">Tipo quente com inverno seco, ideal para o descanso e a maturação controlada dos nossos grãos.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">🌳</div>
                <div>
                  <h5 className="font-bold text-stone-900">Natureza</h5>
                  <p className="text-sm">Preservamos 400 hectares de mata nativa, fundamentais para o equilíbrio do microclima dos nossos cafezais.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">🚢</div>
                <div>
                  <h5 className="font-bold text-stone-900">Economia</h5>
                  <p className="text-sm">Além da agropecuária, Manduri é hoje um polo exportador de madeira (Pinus), resina e artefatos industriais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p>
          Hoje, o Café Maitá é o resultado dessa mistura rica entre história ferroviária, a doçura das abelhas silvestres e a força da produção rural. Honramos cada hectare de mata nativa e cada metro de altitude para entregar um café que não é apenas uma bebida, mas o resumo de um "Campo Largo" que conquistou o mundo.
        </p>
      </div>
    </div>
  </div>
);

// --- PAGINA: PRODUTOS ---
const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      const next = (prev[id] || 0) + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalItems = Object.keys(cart).reduce((s, k) => s + (cart[k] || 0), 0);
  const totalPrice = PRODUCTS.reduce((s, p) => s + (cart[p.id] || 0) * p.priceValue, 0);

  const handleCheckout = () => {
    const lines = PRODUCTS
      .filter(p => (cart[p.id] || 0) > 0)
      .map(p => `• ${cart[p.id]}x ${p.name} (${p.type}) — R$ ${((cart[p.id] || 0) * p.priceValue).toFixed(2).replace('.', ',')}`);

    const msg = [
      'Olá! Gostaria de fazer o seguinte pedido:',
      '',
      ...lines,
      '',
      `*Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}*`,
    ].join('\n');

    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4 text-[#1B4332]">Loja Maitá</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">Descubra o frescor da torra artesanal e transforme seu ritual diário com a sofisticação e o sabor autêntico do nosso café 100% Arábica.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => {
            const qty = cart[product.id] || 0;
            return (
              <div key={product.id} className="w-full md:w-[calc(50%-1.25rem)] group bg-stone-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="aspect-square overflow-hidden relative bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-[#1B4332]">
                    {product.type}
                  </div>
                  {qty > 0 && (
                    <div className="absolute top-4 right-4 bg-[#1B4332] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {qty}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 font-serif text-[#1B4332]">{product.name}</h3>
                  <p className="text-stone-500 text-sm mb-6 flex-grow">{product.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-2xl font-bold text-[#1B4332]">{product.price}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(product.id, -1)}
                        className="w-10 h-10 rounded-full border-2 border-stone-300 text-stone-500 flex items-center justify-center hover:border-[#1B4332] hover:text-[#1B4332] transition-colors text-xl font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                        disabled={qty === 0}
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-bold text-lg text-stone-800">{qty}</span>
                      <button
                        onClick={() => updateQty(product.id, 1)}
                        className="w-10 h-10 rounded-full bg-[#1B4332] text-white flex items-center justify-center hover:bg-[#081C15] transition-colors text-xl font-bold shadow-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carrinho fixo no rodapé */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${totalItems > 0 ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-[#1B4332] text-white shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                <span className="absolute -top-2 -right-2 bg-[#C19A6B] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{totalItems}</span>
              </div>
              <div>
                <p className="text-sm text-white/70">{totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho</p>
                <p className="text-xl font-bold">R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCart({})}
                className="border-2 border-white/30 text-white px-6 py-3 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                Limpar
              </button>
              <button
                onClick={handleCheckout}
                className="bg-white text-[#1B4332] px-8 py-3 rounded-2xl font-bold hover:bg-[#C19A6B] hover:text-white transition-all shadow-lg flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.704-1.393A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953a.5.5 0 00-.404-.078l-3.384 1.002 1.07-3.236a.5.5 0 00-.064-.427A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" /></svg>
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PAGINA: PROCESSO ---
const ProcessPage: React.FC = () => (
  <div className="pt-32 pb-24 bg-stone-50 text-stone-900">
    <div className="max-w-7xl mx-auto px-4">
      <div className="max-w-2xl mb-24">
        <h1 className="text-5xl font-bold font-serif mb-6 italic text-[#1B4332]">A Ciência e a Arte da Perfeição</h1>
        <p className="text-stone-600 text-lg">Nosso processo é lento, metódico e apaixonado. Não apressamos a natureza, apenas a ouvimos.</p>
      </div>

      <div className="space-y-32 mb-24">
        {FULL_PROCESS.map((step, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
            <div className="md:w-1/2">
              <div className="text-[#1B4332] font-bold mb-4 text-sm tracking-tighter uppercase">Fase {idx + 1}</div>
              <h2 className="text-4xl font-bold mb-6 font-serif text-[#1B4332]">{step.title}</h2>
              <p className="text-xl text-stone-700 mb-6 leading-relaxed italic">"{step.description}"</p>
              <p className="text-stone-600 leading-relaxed">{step.details}</p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-inner border border-stone-200 bg-white">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-all duration-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- PAGINA: VIDEOS ---
const VideosPage: React.FC = () => {
  const videoCards = [
    { id: 0, title: 'Momentos Maitá', subtitle: 'Saindo da Torra', thumb: '', video: maitaVideo2 },
    { id: 13, title: 'Colheita Selecionada', subtitle: 'Safra Especial', thumb: graoColheita3, video: '' },
    { id: 1, title: 'Momentos Maitá II', subtitle: 'Toque final', thumb: '', video: maitaVideo3 },
    { id: 16, title: 'Rotina do Campo', subtitle: 'O dia a dia', thumb: novaImg1, video: '' },
    { id: 2, title: 'O Despertar da Fazenda', subtitle: 'Amanhecer em Manduri', thumb: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop', video: maitaVideoDespertar },
    { id: 19, title: 'A Magia do Campo', subtitle: 'Nosso dia a dia', thumb: novaImg4, video: '' },
    { id: 3, title: 'Momentos Maitá III', subtitle: 'Preview Exclusivo', thumb: '', video: maitaVideo1 },
    { id: 14, title: 'Fruto Perfeito', subtitle: 'Safra Especial', thumb: graoColheita4, video: '' },
    { id: 4, title: 'Arte no Preparo', subtitle: 'Preview Exclusivo II', thumb: processCuraImg, video: maitaVideoPreparo },
    { id: 20, title: 'Pé de Café', subtitle: 'Crescimento', thumb: novaImg5, video: '' },
    { id: 5, title: 'Momentos Maitá IV', subtitle: 'Natureza em Movimento', thumb: '', video: maitaVideo4 },
    { id: 17, title: 'Armazenamento', subtitle: 'Cuidados essenciais', thumb: novaImg2, video: '' },
    { id: 6, title: 'A Colheita Seletiva', subtitle: 'Mãos que cuidam', thumb: 'https://images.unsplash.com/photo-1524350300060-d39f447120e7?q=80&w=1000&auto=format&fit=crop', video: maitaVideoColheita },
    { id: 21, title: 'Pé de Café em Detalhes', subtitle: 'Nossa base', thumb: novaImg6, video: '' },
    { id: 7, title: 'Lifestyle Maitá', subtitle: 'O feeling da do torrefador', thumb: gardenImg, video: maitaVideoLifestyle },
    { id: 15, title: 'Detalhes do Grão', subtitle: 'Safra Especial', thumb: graoColheita5, video: '' },
    { id: 8, title: 'Nossa Torrefação', subtitle: 'O perfume do grão', thumb: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1000&auto=format&fit=crop', video: maitaVideoTorra },
    { id: 18, title: 'Essência da Fazenda', subtitle: 'Nossas Raízes', thumb: novaImg3, video: '' },
    { id: 9, title: 'Raízes do Campo', subtitle: 'Mel direto da natureza', thumb: '', video: maitaVideoExtra1 },
    { id: 11, title: 'Horizontes de Manduri', subtitle: 'Força aérea presente', thumb: '', video: maitaVideoExtra3 },
    { id: 12, title: 'Entre Folhas e Grãos II', subtitle: 'Águas de Santa Bárbara - SP', thumb: '', video: maitaVideoExtra4 },
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#1B4332] font-bold uppercase tracking-widest text-xs mb-4 block">Experiência Visual</span>
          <h1 className="text-5xl font-bold font-serif mb-4 text-[#1B4332]">Momentos Maitá</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">Sinta a atmosfera de nossa produção e a calma do interior através de pequenos fragmentos da nossa rotina.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          {videoCards.map((video) => (
            <div key={video.id} className="group relative aspect-[9/16] bg-stone-200 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
              {video.video ? (
                <video
                  src={video.video}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-1000"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img src={video.thumb} className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-1000" alt={video.title} />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent opacity-80" />

              {video.video && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              )}

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#C19A6B] mb-1">{video.subtitle}</p>
                <h3 className="text-xl font-bold font-serif leading-tight">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: FOOTER ---
const Footer: React.FC<{ onNavigate: (p: string) => void }> = ({ onNavigate }) => (
  <footer className="bg-stone-900 text-stone-400 py-20 px-4 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-6 mb-8">
            {LOGO_SVG}
            <span className="text-3xl font-bold font-serif text-white">{BRAND_NAME}</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed">
            Cultivado sob as sombras protetoras do Horto Florestal e da Floresta Estadual de Manduri. Um tributo à biodiversidade paulista em cada gole.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navegação</h4>
          <ul className="space-y-4 text-sm">
            <li><button onClick={() => { onNavigate('home'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Início</button></li>
            <li><button onClick={() => { onNavigate('history'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Nossa História</button></li>
            <li><button onClick={() => { onNavigate('products'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Produtos</button></li>
            <li><button onClick={() => { onNavigate('process'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Processo de Produção</button></li>
            <li><button onClick={() => { onNavigate('roast'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Torra</button></li>
            <li><button onClick={() => { onNavigate('videos'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors">Momentos Maitá (Vídeos e Fotos)</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contato</h4>
          <p className="text-sm mb-2">Manduri - SP</p>
          <p className="text-sm mb-4 text-white font-bold">+55 11 97021-0989</p>
          <a
            href={getWhatsAppLink("Olá! Gostaria de falar com a equipe do Café Maitá.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1B4332] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#081C15] transition-all shadow-lg"
          >
            FALAR NO WHATSAPP
          </a>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center text-[10px] tracking-widest uppercase">
        © 2026 Café Maitá • Manduri/SP • 100% Arábica
      </div>
    </div>
  </footer>
);

export default App;
