# Hero Animation Feature

## Visão Geral

A nova funcionalidade de animação do hero cria uma experiência envolvente e dinâmica para os usuários ao carregarem a página inicial do DevFest USF. A animação segue um fluxo cuidadosamente orquestrado que transmite energia e profissionalismo.

## Componentes

### 1. `AnimatedHeroIntro`

Componente principal responsável pela animação inicial das chaves.

**Características:**

- Tela totalmente branca inicial
- Movimento progressivo das chaves de fora para dentro
- Fechamento das chaves formando um container vazio
- Abertura gradual revelando o texto "DevFest USF"
- Mudança progressiva de cores das chaves
- Efeito de inércia e flutuação
- Partículas animadas
- Ondas concêntricas durante a abertura

### 2. `HeroWithIntro`

Componente wrapper que gerencia a transição entre a animação e o conteúdo principal.

**Características:**

- Controle de exibição da animação vs conteúdo principal
- Transição suave entre estados
- Opção para pular a animação inicial

## Fases da Animação

### 1. **White** (0s)

- Tela completamente branca
- Chaves posicionadas fora da tela
- Opacidade zero

### 2. **Approaching** (1s)

- Chaves começam a se aproximar do centro
- Primeira mudança de cor (hue-rotate: 20deg)
- Rotação suave das chaves

### 3. **Closed** (2s)

- Chaves se aproximam mas mantêm distância segura (-20px / +20px)
- Segunda mudança de cor (hue-rotate: 60deg)
- Formação do "container" preparando para abertura

### 4. **Opening** (3.2s)

- Chaves se afastam significativamente (-80px / +80px)
- Espaço amplo criado para revelação do texto
- Texto "DevFest" começa a aparecer
- Terceira mudança de cor (hue-rotate: 120deg)
- Início das ondas concêntricas

### 5. **Floating** (4.5s)

- Chaves mantêm distância adequada (-70px / +70px)
- Efeito de flutuação das chaves
- Partículas animadas aparecem
- Quarta mudança de cor (hue-rotate: 180deg)
- Texto totalmente visível

### 6. **Animating** (6s+)

- Estado final com animação contínua
- Chaves posicionadas em (-65px / +65px)
- Cor final das chaves (hue-rotate: 150deg)
- Flutuação dinâmica infinita
- **Chaves nunca se sobrepõem ou invadem o espaço do texto**

## Efeitos Visuais

### Mudança de Cores

- Utiliza `filter: hue-rotate()` para transições suaves
- Progressão: Verde → Verde-Amarelo → Verde-Azul → Verde-Ciano → Verde-Roxo

### Efeito de Inércia

- Animação `gentleFloat` e `subtleFloat`
- Movimento orgânico que simula física real
- Restrições aos limites da tela

### Partículas Flutuantes

- 8 partículas com gradiente verde-azul
- Movimento independente com delays escalonados
- Opacidade variável para profundidade

### Ondas Concêntricas

- 3 ondas com tamanhos e delays diferentes
- Efeito `ripple` que simula impacto
- Aparece durante abertura das chaves

## Interatividade

### Pular Animação

- Clique em qualquer lugar durante a animação
- Indicação visual discreta após 2 segundos
- Transição imediata para estado final

### Acessibilidade

- Respeita preferências de movimento reduzido
- Elementos decorativos marcados com `aria-hidden`
- Contraste adequado para texto de instrução

## Configuração

```tsx
<HeroWithIntro
  skipIntro={false} // Pular animação inicial
  introDuration={5} // Duração em segundos
/>
```

```tsx
<AnimatedHeroIntro
  duration={5} // Duração total
  autoPlay={true} // Iniciar automaticamente
  allowSkip={true} // Permitir pular
  onAnimationComplete={() => {}} // Callback de conclusão
/>
```

## Performance

### Otimizações

- Uso de `transform` e `opacity` para animações suaves
- Hardware acceleration através de `transform3d`
- Cleanup automático de timers
- CSS-in-JS para animações complexas

### Responsividade

- Tamanhos adaptativos das chaves
- Breakpoints para mobile, tablet e desktop
- Texto responsivo com `clamp()`

## Customização

### Timing

- Fases configuráveis via props
- Delays independentes para cada elemento
- Curvas de easing personalizadas

### Cores

- Sistema baseado em hue-rotate para variações
- Manutenção da identidade visual do DevFest
- Compatibilidade com modo escuro

### Animações

- CSS keyframes modulares
- Reutilização de efeitos
- Fácil extensão para novos elementos

## Integração

A animação é automaticamente integrada na página principal através do componente `HeroWithIntro`, substituindo o `HeroSection` estático anterior. A transição é suave e mantém toda a funcionalidade existente.

## Tecnologias Utilizadas

- **React Hooks**: useState, useEffect
- **TypeScript**: Tipagem completa
- **Tailwind CSS**: Styling utilitário
- **CSS-in-JS**: Animações complexas
- **SVG**: Ícones das chaves vetoriais
