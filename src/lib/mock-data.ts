// Mock data store for the admin area.
// Persists in-memory across navigation within a session.

export type Lojista = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cnpj: string;
  cidade: string;
  estado: string;
  ativo: boolean;
  criadoEm: string;
};

export type Equipamento = {
  id: string;
  lojistaId: string;
  nome: string;
  descricao: string;
  valorDiaria: number;
  valorMulta: number;
  status: "disponivel" | "alugado" | "atrasado";
};

export type Locacao = {
  id: string;
  lojistaId: string;
  equipamentoId: string;
  cliente: string;
  dataSaida: string; // ISO
  dataPrevista: string; // ISO
  dataDevolucao?: string; // ISO
  valorDiaria: number;
  valorTotal: number;
  status: "ativa" | "finalizada" | "atrasada";
};

const lojistas: Lojista[] = [
  {
    id: "l1",
    nome: "Ferramentas Silva LTDA",
    email: "contato@ferramentassilva.com.br",
    telefone: "(11) 98765-4321",
    cnpj: "12.345.678/0001-90",
    cidade: "São Paulo",
    estado: "SP",
    ativo: true,
    criadoEm: "2024-08-12",
  },
  {
    id: "l2",
    nome: "MegaLoc Equipamentos",
    email: "atendimento@megaloc.com.br",
    telefone: "(21) 99876-1234",
    cnpj: "98.765.432/0001-10",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    ativo: true,
    criadoEm: "2024-09-03",
  },
  {
    id: "l3",
    nome: "Construfácil Locações",
    email: "vendas@construfacil.com.br",
    telefone: "(31) 91234-5678",
    cnpj: "45.678.912/0001-34",
    cidade: "Belo Horizonte",
    estado: "MG",
    ativo: true,
    criadoEm: "2024-10-21",
  },
  {
    id: "l4",
    nome: "TecnoRent Indústria",
    email: "comercial@tecnorent.com.br",
    telefone: "(41) 99988-7766",
    cnpj: "33.222.111/0001-55",
    cidade: "Curitiba",
    estado: "PR",
    ativo: false,
    criadoEm: "2024-11-15",
  },
  {
    id: "l5",
    nome: "ProLocadora Sul",
    email: "contato@prolocadora.com.br",
    telefone: "(51) 98877-6655",
    cnpj: "77.888.999/0001-22",
    cidade: "Porto Alegre",
    estado: "RS",
    ativo: true,
    criadoEm: "2025-01-08",
  },
];

const equipamentos: Equipamento[] = [
  { id: "e1", lojistaId: "l1", nome: "Betoneira 400L", descricao: "Motor 2HP, capacidade 400 litros", valorDiaria: 120, valorMulta: 80, status: "alugado" },
  { id: "e2", lojistaId: "l1", nome: "Andaime Tubular 1,5m", descricao: "Módulo galvanizado", valorDiaria: 45, valorMulta: 30, status: "disponivel" },
  { id: "e3", lojistaId: "l1", nome: "Furadeira de Impacto Pro", descricao: "850W, mandril 13mm", valorDiaria: 60, valorMulta: 40, status: "disponivel" },
  { id: "e4", lojistaId: "l2", nome: "Compressor de Ar 50L", descricao: "2HP, 8 bar", valorDiaria: 95, valorMulta: 60, status: "atrasado" },
  { id: "e5", lojistaId: "l2", nome: "Gerador a Diesel 5kVA", descricao: "Partida elétrica", valorDiaria: 280, valorMulta: 180, status: "alugado" },
  { id: "e6", lojistaId: "l2", nome: "Serra Circular 7¼\"", descricao: "1800W profissional", valorDiaria: 70, valorMulta: 45, status: "disponivel" },
  { id: "e7", lojistaId: "l3", nome: "Martelete Demolidor 11kg", descricao: "Hexagonal 30mm", valorDiaria: 150, valorMulta: 100, status: "alugado" },
  { id: "e8", lojistaId: "l3", nome: "Placa Vibratória 90kg", descricao: "Motor 4 tempos", valorDiaria: 220, valorMulta: 140, status: "disponivel" },
  { id: "e9", lojistaId: "l4", nome: "Solda Inversora 200A", descricao: "Bivolt automático", valorDiaria: 110, valorMulta: 70, status: "disponivel" },
  { id: "e10", lojistaId: "l5", nome: "Roçadeira a Gasolina", descricao: "43cc, 2 tempos", valorDiaria: 85, valorMulta: 55, status: "alugado" },
  { id: "e11", lojistaId: "l5", nome: "Lavadora Alta Pressão", descricao: "1800 PSI", valorDiaria: 75, valorMulta: 50, status: "disponivel" },
  { id: "e12", lojistaId: "l5", nome: "Escada Extensiva 13 deg.", descricao: "Alumínio 5,4m", valorDiaria: 40, valorMulta: 25, status: "atrasado" },
];

const locacoes: Locacao[] = [
  { id: "loc1", lojistaId: "l1", equipamentoId: "e1", cliente: "Construtora Boa Obra", dataSaida: "2025-04-18", dataPrevista: "2025-04-25", valorDiaria: 120, valorTotal: 840, status: "ativa" },
  { id: "loc2", lojistaId: "l2", equipamentoId: "e4", cliente: "João Pereira ME", dataSaida: "2025-04-10", dataPrevista: "2025-04-17", valorDiaria: 95, valorTotal: 665, status: "atrasada" },
  { id: "loc3", lojistaId: "l2", equipamentoId: "e5", cliente: "Eventos RJ Produções", dataSaida: "2025-04-20", dataPrevista: "2025-04-27", valorDiaria: 280, valorTotal: 1960, status: "ativa" },
  { id: "loc4", lojistaId: "l3", equipamentoId: "e7", cliente: "Demolidora Central", dataSaida: "2025-04-15", dataPrevista: "2025-04-22", valorDiaria: 150, valorTotal: 1050, status: "ativa" },
  { id: "loc5", lojistaId: "l5", equipamentoId: "e10", cliente: "Jardim Verde Paisagismo", dataSaida: "2025-04-19", dataPrevista: "2025-04-26", valorDiaria: 85, valorTotal: 595, status: "ativa" },
  { id: "loc6", lojistaId: "l5", equipamentoId: "e12", cliente: "Pintura Express", dataSaida: "2025-04-08", dataPrevista: "2025-04-15", valorDiaria: 40, valorTotal: 280, status: "atrasada" },
  { id: "loc7", lojistaId: "l1", equipamentoId: "e3", cliente: "Reforma Já", dataSaida: "2025-04-01", dataPrevista: "2025-04-08", dataDevolucao: "2025-04-08", valorDiaria: 60, valorTotal: 420, status: "finalizada" },
  { id: "loc8", lojistaId: "l3", equipamentoId: "e8", cliente: "Pavimentos MG", dataSaida: "2025-03-25", dataPrevista: "2025-04-05", dataDevolucao: "2025-04-04", valorDiaria: 220, valorTotal: 2420, status: "finalizada" },
  { id: "loc9", lojistaId: "l1", equipamentoId: "e2", cliente: "Reforma Já", dataSaida: "2025-03-15", dataPrevista: "2025-03-22", dataDevolucao: "2025-03-22", valorDiaria: 45, valorTotal: 315, status: "finalizada" },
  { id: "loc10", lojistaId: "l2", equipamentoId: "e6", cliente: "Marcenaria Silva", dataSaida: "2025-03-10", dataPrevista: "2025-03-17", dataDevolucao: "2025-03-18", valorDiaria: 70, valorTotal: 560, status: "finalizada" },
];

// Reactive subscribers
type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((l) => l());
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// API
export const mockDb = {
  // Lojistas
  listLojistas: () => [...lojistas],
  getLojista: (id: string) => lojistas.find((l) => l.id === id),
  createLojista: (data: Omit<Lojista, "id" | "criadoEm">) => {
    const novo: Lojista = {
      ...data,
      id: `l${Date.now()}`,
      criadoEm: new Date().toISOString().slice(0, 10),
    };
    lojistas.push(novo);
    notify();
    return novo;
  },
  updateLojista: (id: string, data: Partial<Lojista>) => {
    const i = lojistas.findIndex((l) => l.id === id);
    if (i >= 0) {
      lojistas[i] = { ...lojistas[i], ...data };
      notify();
    }
  },
  deleteLojista: (id: string) => {
    const i = lojistas.findIndex((l) => l.id === id);
    if (i >= 0) {
      lojistas.splice(i, 1);
      notify();
    }
  },

  // Equipamentos
  listEquipamentos: () => [...equipamentos],
  equipamentosPorLojista: (lojistaId: string) =>
    equipamentos.filter((e) => e.lojistaId === lojistaId),

  // Locações
  listLocacoes: () => [...locacoes],
  locacoesPorLojista: (lojistaId: string) =>
    locacoes.filter((l) => l.lojistaId === lojistaId),
};
