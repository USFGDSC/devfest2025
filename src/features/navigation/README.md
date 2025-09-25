# Navigation Components

Este módulo contém os componentes de navegação para o website DevFest USF.

## Componentes

### NavigationBar

Navigation bar principal com as seguintes funcionalidades:

- **Logo do DevFest USF** com design responsivo
- **Menu de navegação desktop** com links para seções da página
- **Menu mobile responsivo** que se adapta a telas menores
- **Efeito de glassmorphism** quando o usuário faz scroll
- **Botão "Add to Calendar"** no desktop que abre o Google Calendar
- **Botão "Register Now"** para inscrições
- **Navegação suave** entre seções usando scroll behavior

### FloatingCalendarButton

Botão flutuante discreto para dispositivos móveis com:

- **Visibilidade condicional** - aparece apenas após scroll de 200px
- **Posicionamento fixo** no canto inferior direito
- **Animações suaves** de entrada/saída e hover
- **Tooltip informativo** com instruções claras
- **Efeito pulse** para chamar atenção
- **Função identical** ao botão de calendar da navbar

## Funcionalidades Especiais

### Google Calendar Integration

Ambos os componentes incluem integração completa com Google Calendar:

- **Título do evento**: "DevFest USF 2025"
- **Data e horário**: 1 de dezembro de 2025, 9:00 - 18:00 UTC
- **Localização**: University of South Florida, Tampa, FL
- **Descrição detalhada** do evento
- **Link direto** para adicionar no Google Calendar

### Responsividade

- **Desktop (lg+)**: Navegação completa com todos os elementos visíveis
- **Tablet (md)**: Menu compacto com elementos essenciais
- **Mobile (sm)**: Menu hambúrguer + botão flutuante discreto

### Acessibilidade

- **ARIA labels** apropriados para todos os botões
- **Navegação por teclado** suportada
- **Contrast ratios** adequados
- **Focus indicators** visíveis

## Uso

```tsx
import { NavigationBar, FloatingCalendarButton } from "@/features/navigation";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <FloatingCalendarButton />
      {/* Resto do conteúdo */}
    </>
  );
}
```

## Dependências

- **React/Next.js** para componentes
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **Next/Image** para otimização de imagens
