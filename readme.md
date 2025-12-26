# 💳 Verificação de Status de Pagamento

Você está desenvolvendo um sistema para **verificar o status de pagamento de clientes**.  
De acordo com o status informado, o sistema deve exibir uma mensagem apropriada.

---

## 📌 Regras de Negócio

- Se o status for **`"pendente"`**, exibir:
  > **Pagamento pendente**
- Se o status for **`"aprovado"`**, exibir:
  > **Pagamento aprovado**
- Se o status for **`"recusado"`**, exibir:
  > **Pagamento recusado**

📎 Para a implementação, utilize a estrutura **`switch / case`**.

---

## 🧪 Exemplo de Entrada:

```js
const status = "aprovado";
```

---

## ❗Saída esperada:

```
Pagamento aprovado.

```
