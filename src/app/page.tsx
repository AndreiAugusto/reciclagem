'use client'

import { useState } from 'react';
import { Search, MapPin, Recycle, Lightbulb, ExternalLink, Info, CheckCircle } from 'lucide-react';

export default function PortalReciclagem() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  type Product = {
    name: string;
    icon: string;
    disposal: string;
    tips: string[];
    color: string;
  };
  const products = {
    'vidro': {
      name: 'Vidro',
      icon: '🍶',
      disposal: 'Separe por cores (transparente, verde, âmbar). Retire tampas e rótulos. Descarte em coletores específicos ou pontos de coleta.',
      tips: ['Não misture vidros quebrados com recicláveis comuns', 'Embale vidros quebrados em jornal', 'Vidros de medicamentos devem ir para farmácias'],
      color: 'green'
    },
    'plastico': {
      name: 'Plástico',
      icon: '🥤',
      disposal: 'Limpe as embalagens, retire rótulos quando possível. Separe por tipo (PET, PEAD, etc.). Descarte na coleta seletiva.',
      tips: ['Verifique o número de reciclagem no fundo da embalagem', 'Tampinhas podem ser doadas para ONGs', 'Sacolas plásticas têm pontos específicos em supermercados'],
      color: 'blue'
    },
    'papel': {
      name: 'Papel',
      icon: '📄',
      disposal: 'Separe papéis limpos e secos. Remova grampos, espirais e plásticos. Descarte na coleta seletiva.',
      tips: ['Papel higiênico e guardanapos usados não são recicláveis', 'Papéis plastificados ou encerados não servem', 'Caixas de pizza sujas devem ir para o lixo comum'],
      color: 'yellow'
    },
    'metal': {
      name: 'Metal',
      icon: '🥫',
      disposal: 'Limpe latas e embalagens metálicas. Remova rótulos quando possível. Descarte na coleta seletiva.',
      tips: ['Latas de tinta devem ir para pontos específicos', 'Papel alumínio pode ser reciclado se estiver limpo', 'Aerossóis vazios são recicláveis'],
      color: 'gray'
    },
    'oleo': {
      name: 'Óleo de Cozinha',
      icon: '🛢️',
      disposal: 'Armazene em garrafa PET. Nunca descarte na pia ou no solo. Leve para pontos de coleta específicos.',
      tips: ['1 litro de óleo contamina 1 milhão de litros de água', 'Pode ser transformado em sabão ou biodiesel', 'Restaurantes têm coleta especializada'],
      color: 'orange'
    },
    'eletronico': {
      name: 'Eletrônicos',
      icon: '📱',
      disposal: 'Leve para pontos de coleta de lixo eletrônico. Fabricantes têm programas de logística reversa.',
      tips: ['Apague dados pessoais antes do descarte', 'Baterias devem ser retiradas quando possível', 'Alguns componentes contêm metais preciosos'],
      color: 'purple'
    },
    'bateria': {
      name: 'Baterias',
      icon: '🔋',
      disposal: 'Nunca descarte no lixo comum. Leve para pontos de coleta em lojas de eletrônicos ou supermercados.',
      tips: ['Contêm metais pesados tóxicos', 'Pilhas recarregáveis duram mais e poluem menos', 'Estabelecimentos que vendem devem aceitar de volta'],
      color: 'red'
    },
    'organico': {
      name: 'Resíduo Orgânico',
      icon: '🍌',
      disposal: 'Faça compostagem em casa ou descarte na coleta orgânica. Cascas e restos de comida podem virar adubo.',
      tips: ['Compostagem reduz 30% do lixo doméstico', 'Evite colocar carnes e laticínios na composteira', 'Minhocas aceleram o processo de decomposição'],
      color: 'green'
    }
  };

  const collectionPoints = [
    {
      name: 'ASSCAVG(Associação de catadores de Materiais Recicláveis de Várzea GRANDE)',
      address: 'Rua I, 216 - Jardim Eldorado, Várzea Grande - MT, 78150-754',
      accepts: ['vidro', 'plastico', 'papel', 'metal'],
      phone: '(65) 3682-1297',
      hours: 'Seg-Sex: 8h-17h'
    },
    {
      name: 'BIOTERRA Indústria de Reciclagem LTDA.',
      address: 'Rua K, nº 152, Distrito Industrial, Cuiabá-MT',
      accepts: ['plastico'],
      phone: '(65) 3028-8600',
      hours: 'Dom-Sex: 7h-17h'
    },
    {
      name: 'Canaã Recicláveis Ltda.',
      address: 'Rua Progresso, nº 100, Jardim Ubatã, 78025-000, Cuiabá-MT',
      accepts: ['plastico', 'papel'],
      phone: '(65) 3637-7266',
      hours: 'Dom-Sex: 07:30h-17:30h'
    },
    {
      name: 'COMMAR MT – Comércio e Manufatura de materiais recicláveis de Mato Grosso',
      address: 'Rua 29 de Maio, nº 97, Areão, 78010-305, Cuiabá-MT',
      accepts: ['plastico', 'papel', 'metal', 'vidro', 'bateria', 'oleo', 'eletronico'],
      phone: '(65) 99242-1641',
      hours: 'Seg-Sáb: 07:00h-17:30h'
    },
    {
      name: 'Phloraceae – Farmácia de Manipulação',
      address: 'Av. Isaac Póvoas, nº 1.326, Cuiabá-MT',
      accepts: ['plastico', 'papel'],
      phone: '(65) 3315-1000',
      hours: 'Seg-Sáb: 08:00h-18:30h'
    },
    {
      name: 'Sucatão Corujo e CIA Ltda.',
      address: 'Av. Jornalista Alves de Oliveira, nº 550, Cidade Alta, 78030-445, Cuiabá-MT',
      accepts: ['plastico', 'metal', 'papel', 'bateria', 'eletronico'],
      phone: '(65) 3637-4699',
      hours: 'Seg-Sex: 07:00h-17:00h'
    },
    {
      name: 'Programa Papa pilhas - Banco Santander',
      address: 'Rua Pedro Celestino, 24, 78005-010, Cuiabá-MT',
      accepts: ['bateria'],
      phone: '(65) 3313-2700',
      hours: 'Seg-Sex: 09:00h-17:00h'
    },
    {
      name: 'Projeto Fernisis',
      address: 'Rua John Kennedy, nº 200, Alvorada, Cuiabá-MT',
      accepts: ['oleo', 'organico'],
      phone: '(65) 99315-1630',
      hours: 'Seg-Dom: 07:30h-17:45h'
    }
  ];

  const handleSearch = () => {
    const normalizedSearch = searchTerm.toLowerCase().trim();
    const found = Object.keys(products).find(key => 
      key.includes(normalizedSearch) || 
      products[key as keyof typeof products].name.toLowerCase().includes(normalizedSearch)
    );
    
    if (found) {
      setSelectedProduct(products[found as keyof typeof products] as any);
    } else {
      setSelectedProduct(null);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'border-green-500 bg-green-50 text-green-800',
      blue: 'border-blue-500 bg-blue-50 text-blue-800',
      yellow: 'border-yellow-500 bg-yellow-50 text-yellow-800',
      gray: 'border-gray-500 bg-gray-50 text-gray-800',
      orange: 'border-orange-500 bg-orange-50 text-orange-800',
      purple: 'border-purple-500 bg-purple-50 text-purple-800',
      red: 'border-red-500 bg-red-50 text-red-800'
    };
    return colors[color] || colors.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center space-x-3">
            <Recycle className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoDescarte
            </h1>
          </div>
          <p className="text-center text-gray-600 mt-2 text-lg">
            Portal de Conscientização sobre Reciclagem e Descarte Responsável
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Como descartar seu resíduo?</h2>
            <p className="text-gray-600">Digite o nome do produto para descobrir a forma correta de descarte</p>
          </div>
          
          <div className="flex max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ex: vidro, plástico, óleo usado, eletrônico..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-l-xl focus:outline-none focus:border-green-500 transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-r-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 font-semibold"
            >
              Buscar
            </button>
          </div>
        </section>

        {/* Search Result */}
        {selectedProduct && (
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
            <div className={`border-2 rounded-xl p-6 ${getColorClasses(selectedProduct.color)}`}>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{selectedProduct.icon}</span>
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2" />
                    Como descartar:
                  </h4>
                  <p className="leading-relaxed">{selectedProduct.disposal}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Dicas importantes:
                  </h4>
                  <ul className="space-y-1">
                    {selectedProduct.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Quick Access Grid */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Acesso Rápido</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(product as any)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 hover:border-green-300"
              >
                <div className="text-3xl mb-2">{product.icon}</div>
                <div className="font-semibold text-gray-800 text-sm">{product.name}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Collection Points */}
        <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <MapPin className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Pontos de Coleta em Várzea Grande e Cuiabá</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collectionPoints.map((point, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{point.name}</h3>
                <p className="text-gray-600 mb-3">{point.address}</p>
                <p className="text-sm text-gray-500 mb-2">📞 {point.phone}</p>
                <p className="text-sm text-gray-500 mb-4">🕒 {point.hours}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Aceita:</p>
                  <div className="flex flex-wrap gap-2">
                    {point.accepts.map((item, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {products[item as keyof typeof products]?.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={`https://www.google.com.br/maps/place/${encodeURIComponent(point.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Ver no Google Maps
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="mt-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Por que reciclar é importante?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold mb-2">Preserva o Meio Ambiente</h3>
                <p className="text-sm opacity-90">Reduz a extração de recursos naturais e diminui a poluição do solo, ar e água.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold mb-2">Gera Economia</h3>
                <p className="text-sm opacity-90">Cria empregos na cadeia de reciclagem e reduz custos de produção industrial.</p>
              </div>
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">♻️</div>
                <h3 className="font-bold mb-2">Economia Circular</h3>
                <p className="text-sm opacity-90">Transforma resíduos em novos produtos, fechando o ciclo de consumo responsável.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Recycle className="w-6 h-6" />
            <span className="font-bold">EcoDescarte</span>
          </div>
          <p className="text-gray-400 mb-2">
            Projeto de Extensão Universitária - ODS 12: Consumo e Produção Responsáveis
          </p>
          <p className="text-sm text-gray-500">
            Contribuindo para um futuro mais sustentável através da educação ambiental
          </p>
          <p className="text-sm text-gray-500">
            Aluno Andrei Augusto Farias de Costa
          </p>
        </div>
      </footer>
    </div>
  );
}