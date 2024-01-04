import api from "../api";

export async function pegarRepositorioDoUsuario(id) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return []
  }
}

export async function salvarRepositorioDoUsuario(postId, name, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: name,
      data: data,
      postId: postId,
      id: id
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}