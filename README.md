# Guia para implementação de um Editor de texto

--

## Criando e usando o editor
  - Verificar estilos globais do projeto que possam afetar o editor
  - Criar um client component com o Editor
  - Criar um contexto para alterar e fornecer o conteúdo do editor
  - Envolver a aplicação ou parte enderaçada ao uso do editor com o provider dele
  - Criar um client component de Formulário, que entre seus inputs, tem um com valor
  fixo contendo o conteúdo do editor. Este será recuperado através do contexto deste.
  - Ao submeter o formulário, o valor do editor será incluso na formData
  - Usar o Editor e Form no server component da página
  
  - Seu editor está configurado e pronto.