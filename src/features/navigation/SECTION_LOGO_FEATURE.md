# 🎯 Section-Based Logo Animation Feature

## Visão Geral

A navbar do DevFest USF agora possui um sistema **inteligente** de mudança de logo baseado nas **seções visíveis** da página, oferecendo uma experiência visual contextual e totalmente responsiva.

## ✨ Por Que Esta Abordagem é Melhor

### 🎯 **Responsividade Real**

- **Funciona em qualquer altura de tela** (mobile, tablet, desktop)
- **Adapta-se ao conteúdo** independentemente do tamanho
- **Contexto visual** baseado no que o usuário está vendo

### 📱 **Consistência Cross-Device**

- **Mobile**: Seções menores ativam o logo corretamente
- **Desktop**: Seções maiores mantêm a mesma lógica
- **Tablet**: Funciona perfeitamente entre os dois

## Como Funciona

### 📊 **Mapeamento de Seções**

```javascript
const sectionLogoMap = {
  hero: 0, // Light - Início/landing
  about: 1, // Blue - Sobre o evento
  speakers: 2, // Green - Palestrantes
  schedule: 3, // Red - Agenda
  sponsors: 3, // Red - Patrocinadores
  faq: 3, // Red - FAQ
};
```

### 🔍 **Intersection Observer**

```javascript
const observerOptions = {
  root: null,
  rootMargin: "-50% 0px -50% 0px", // Trigger no centro da viewport
  threshold: 0,
};
```

**O que isso significa:**

- **Detecta quando seção está no centro** da tela
- **Ignora seções parcialmente visíveis** (top/bottom)
- **Performance otimizada** - sem scroll listeners pesados

### 🎬 **Fluxo de Detecção**

1. **Usuário faz scroll** → Seção entra na viewport
2. **Observer detecta** → Seção está no centro da tela
3. **Mapeia seção → logo** → Usando `sectionLogoMap`
4. **Inicia animação** → `isTransitioning = true`
5. **Troca logo suavemente** → 300ms de transição
6. **Finaliza** → `isTransitioning = false`

## 🎨 **Mapeamento Visual**

### **Hero Section** 🏠

- **Logo**: Light (claro)
- **Contexto**: Boas-vindas, primeiro impacto
- **Cor**: Neutro para destaque do conteúdo

### **About Section** ℹ️

- **Logo**: Blue (azul)
- **Contexto**: Informações institucionais
- **Cor**: Azul Google, confiabilidade

### **Speakers Section** 🎤

- **Logo**: Green (verde)
- **Contexto**: Palestrantes, crescimento
- **Cor**: Verde Google, conhecimento

### **Schedule+ Sections** 📅

- **Logo**: Red (vermelho)
- **Contexto**: Ação, agenda, urgência
- **Cor**: Vermelho Google, call-to-action

## ⚡ **Vantagens Técnicas**

### 🚀 **Performance**

- **Intersection Observer** é nativo e otimizado
- **Não usa scroll listeners** pesados
- **Detecção precisa** sem cálculos complexos

### 📱 **UX Superior**

- **Contexto visual** baseado no conteúdo
- **Transições naturais** na mudança de seção
- **Funciona em qualquer dispositivo**

### 🔧 **Manutenibilidade**

- **Fácil de configurar** novas seções
- **Mapeamento claro** entre seção e logo
- **Lógica simples** e compreensível

## 🎯 **Exemplo de Funcionamento**

```
Usuário na Hero Section:
- Observer detecta #hero no centro
- sectionLogoMap['hero'] = 0
- Logo muda para Light

Usuário scrolla para About:
- Observer detecta #about no centro
- sectionLogoMap['about'] = 1
- Logo muda para Blue com animação suave
```

## 🚀 **Resultado Final**

Uma navbar que **responde inteligentemente** ao contexto do usuário, proporcionando:

- ✅ **Feedback visual contextual**
- ✅ **Experiência responsiva real**
- ✅ **Performance otimizada**
- ✅ **UX superior em todos os dispositivos**

**Agora o logo reflete exatamente onde o usuário está na jornada do site!** 🎯
