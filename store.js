import { readFile, writeFile } from "node:fs/promises";

const ARQUIVO = new URL("./data/mensagens.json", import.meta.url);

export async function lerMensagens() {
  try {
    const dados = await readFile(ARQUIVO, "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      await salvarMensagens([]);
      return [];
    }
    throw erro;
  }
}

export async function salvarMensagens(mensagens) {
  await writeFile(ARQUIVO, JSON.stringify(mensagens, null, 2), "utf-8");
}
