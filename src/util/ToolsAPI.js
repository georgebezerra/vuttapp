import axios from "axios";
import uuid from "uuid";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    Authorization: "whatever-you-want"
  }
});

export async function getTools() {
  try {
    const response = await api.get("/tools");
    return response.data;
  } catch (e) {
    console.error("ERRO: ", e);
  }
}

export async function getSearchGlobal() {
  try {
    const response = await api.get(`/tools?q=`);
    return response.data;
  } catch (e) {
    console.error("ERRO: ", e);
  }
}

export async function getSearchLike() {
  try {
    const response = await api.get(`/tools?tags_like=`);
    return response.data;
  } catch (e) {
    console.error("ERRO: ", e);
  }
}

export async function removeTool(tool) {
  try {
    const response = await api.delete(`/tools/${tool.id}`);
    return response.data;
  } catch (e) {
    console.error("ERRO: ", e);
  }
}

export async function saveTool(tool) {
  try {
    const response = await api.post("/tools", {
      id: uuid(),
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags
    });
    return response.stringify;
  } catch (e) {
    console.error("ERRO: ", e);
  }
  console.log(tool);
}