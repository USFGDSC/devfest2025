# 🎨 Scroll-Based Logo Animation Feature

## Visão Geral

A navbar do DevFest USF possui um sistema único de mudança de logo baseado na posição do scroll do usuário, criando uma experiência visual dinâmica e envolvente.

## Como Funciona

### 📊 Lógica de Mudança

O logo muda progressivamente conforme o usuário faz scroll pela página:

- **0-25% scroll**: Logo Light (claro)
- **25-50% scroll**: Logo Blue (azul)
- **50-75% scroll**: Logo Green (verde)
- **75-100% scroll**: Logo Red (vermelho)

### 🎭 Animações

#### Transição Principal

- **Duração**: 300ms com easing `ease-out`
- **Efeitos**: Opacity, scale, blur, e translate
- **Estado de transição**: Temporário opacity fade com scale down

#### Efeitos Visuais

- **Fade out**: `opacity-0 scale-95 blur-sm translate-y-1`
- **Fade in**: `opacity-100 scale-100 blur-0 translate-y-0`
- **Glow effect**: Gradiente sutil durante transições
- **Key prop**: Force re-render para animações suaves

### ⚡ Performance

#### Otimizações Implementadas

- **RequestAnimationFrame**: Throttling de scroll events
- **Passive listeners**: Melhor performance de scroll
- **State management**: Prevenção de transições múltiplas
- **Mathematical precision**: Cálculos de scroll percentage otimizados

#### Código de Performance

```javascript
let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // Scroll logic here
      ticking = false;
    });
    ticking = true;
  }
};
```

### 🎨 Animações CSS Customizadas

#### Keyframes Adicionais

- `logo-fade-in`: Entrada suave com scale e translate
- `logo-fade-out`: Saída suave com blur effect
- `logo-container`: Container com cubic-bezier transition

#### Classes Utilitárias

- `.logo-enter`: Animação de entrada
- `.logo-exit`: Animação de saída
- `.logo-container`: Container com transições suaves

### 🔧 Configuração Técnica

#### Estados do Componente

```typescript
const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(false);
```

#### Timing de Transição

- **Delay antes da mudança**: 100ms
- **Duração da transição**: 200ms
- **Total da animação**: 300ms

### 🎯 Experiência do Usuário

#### Feedback Visual

- Transições suaves sem "saltos"
- Glow effect sutil durante mudanças
- Mantém consistência visual da marca
- Responsivo em todos os breakpoints

#### Acessibilidade

- Mantém `alt` text apropriado para cada variante
- Não interfere com navegação por teclado
- Respeita preferências de movimento reduzido

## 🚀 Resultado Final

Uma navegação que reage dinamicamente ao scroll do usuário, proporcionando uma experiência visual rica e engajante que reflete a progressão através do conteúdo da página.
