import axios from "axios";
import type { WikiSummary, WikiInfo } from "../types/car";

// Wikipedia Axios 인스턴스
const wikiClient = axios.create({
  baseURL: "https://en.wikipedia.org/api/rest_v1",
});

// 브랜드 + 모델명 → 설명 및 이미지 조회
export async function fetchWikiInfo(
  brand: string,
  model: string,
): Promise<WikiInfo | null> {
  const title = `${brand} ${model}`.trim().replace(/\s+/g, "_");

  try {
    const { data } = await wikiClient.get<WikiSummary>(
      `/page/summary/${encodeURIComponent(title)}`,
    );
    if (data.type !== "standard") return null;
    return { extract: data.extract, thumbnail: data.thumbnail };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    throw error;
  }
}
