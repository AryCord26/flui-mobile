# Flui Mobile — Aplicativo para Motoristas

## Sobre o projeto

O **Flui Mobile** é o aplicativo desenvolvido para motoristas de veículos elétricos dentro do *Charge Platform Challenge*.  

O app foi projetado para oferecer uma experiência simples, moderna e intuitiva na busca e utilização de pontos de recarga elétrica, promovendo mobilidade sustentável e conectividade urbana.

A aplicação permite que os usuários:
- encontrem estações próximas;
- visualizem disponibilidade em tempo real;
- filtrem pontos de recarga;
- consultem detalhes das estações;
- avaliem a experiência de uso.

---

# Tecnologias utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Router
- React Native Maps
- Lucide Icons

---

# Funcionalidades

## Home / Mapa
- visualização de estações próximas;
- mapa interativo;
- localização do usuário;
- pins de carregamento.

## Busca e filtros
- busca por estação;
- filtros por:
  - tipo de conector;
  - disponibilidade;
  - potência;
  - distância.

## Detalhes da estação
- endereço;
- conectores disponíveis;
- potência;
- disponibilidade;
- avaliações;
- botão de iniciar recarga.

## Avaliações
- notas dos usuários;
- comentários;
- feedback da experiência.

---

# Estrutura do projeto

```bash
src/
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── SearchScreen.tsx
│   ├── StationScreen.tsx
│   └── ReviewsScreen.tsx
│
├── components/
│   ├── StationCard.tsx
│   ├── FilterButton.tsx
│   ├── MapPin.tsx
│   └── Header.tsx
│
├── navigation/
│   └── AppNavigator.tsx
│
├── data/
│   └── mock.ts
│
├── theme/
│   └── colors.ts
│
└── assets/
```

---

# Instalação

## Clone o repositório

```bash
git clone https://github.com/seuusuario/flui-mobile.git
```

## Entre na pasta

```bash
cd flui-mobile
```

## Instale as dependências

```bash
npm install
```

---

# Executando o projeto

## Iniciar Expo

```bash
npx expo start
```

---

# Executar no Android

```bash
npx expo run:android
```

---

# Executar no iOS

```bash
npx expo run:ios
```

---

# Identidade visual

## Paleta principal

| Cor | Hex |
|---|---|
| Verde principal | `#22C55E` |
| Verde escuro | `#16A34A` |
| Azul escuro | `#0F172A` |
| Branco gelo | `#F8FAFC` |
| Cinza claro | `#CBD5E1` |

---

# Objetivo do projeto

A proposta do aplicativo Flui é facilitar o acesso à infraestrutura de carregamento elétrico, proporcionando:
- praticidade;
- sustentabilidade;
- acessibilidade;
- experiência moderna para motoristas.

---

# Protótipos desenvolvidos

## Aplicativo mobile
- tela de mapa;
- busca com filtros;
- detalhes da estação;
- avaliações;
- navegação funcional.

## Plataforma web
- dashboard administrativo;
- gerenciamento de estações;
- visualização de avaliações.

---

# Melhorias futuras

- autenticação de usuários;
- integração com backend;
- carregamento em tempo real;
- sistema de reservas;
- pagamento integrado;
- notificações push;
- dark mode;
- monitoramento de recarga ao vivo.

---

# Desenvolvido para

## Charge Platform Challenge — Flui

Projeto acadêmico voltado para inovação em mobilidade elétrica e plataformas digitais sustentáveis.
