// api/verificar.js
export default function handler(req, res) {
  // Só permite requisições POST por segurança
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { senha } = req.body;
  const senhaCorreta = process.env.ADMIN_PASSWORD;

  // Verifica se a senha enviada bate com a do servidor
  if (senha === senhaCorreta) {
    return res.status(200).json({ valido: true });
  } else {
    return res.status(401).json({ valido: false });
  }
}