# Ponto Braz — site inicial

Este pacote contém o site inicial responsivo da Ponto Braz, com identidade visual roxa/azul e categorias.

## O que já está pronto
- Página inicial responsiva para celular e computador.
- Identidade visual e banner incluídos.
- Categorias: Filmes e séries, Jogos, Redes sociais, Cursos e métodos, Utilidades e VIP.
- Área de catálogo preparada para receber produtos autorizados.
- Endpoint de status e bloqueio de checkout enquanto pagamento/fornecedor não estiverem configurados.

## O que falta antes de vender
1. Aprovação da Ponto Braz pelo fornecedor (ex.: Portal dos Créditos).
2. Definir produtos, preços, estoque e autorização de revenda.
3. Configurar um provedor de pagamento Pix com credenciais e webhook de confirmação.
4. Configurar domínio, hospedagem HTTPS e e-mail transacional.
5. Implementar e testar a integração do fornecedor e a entrega automática real.

**Atenção:** este site ainda não recebe pagamentos nem entrega códigos. Não anuncie produtos antes de ter autorização e estoque válido. A chave Pix informada pelo proprietário não foi embutida como pagamento automático: uma chave estática não comprova automaticamente que um pedido foi pago.

## Rodar localmente
Requer Node.js 20 ou superior.

```bash
npm install
npm start
```
Abra `http://localhost:3000`.

## Publicação
Hospede como aplicação Node.js com HTTPS. Defina `PORT` conforme a hospedagem. Não publique credenciais no frontend.
