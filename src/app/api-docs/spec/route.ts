// docs/openapi.yaml을 그대로 서빙해요. /api-docs 페이지의 Swagger UI가 이 주소를 읽어요.
// 빌드 시점에 파일을 읽어 정적으로 구워요 — 서버리스 배포에서 docs/ 폴더가 번들에 없어도 동작해요.
import { readFile } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";

export async function GET() {
  const yaml = await readFile(path.join(process.cwd(), "docs", "openapi.yaml"), "utf8");
  return new Response(yaml, { headers: { "Content-Type": "application/yaml; charset=utf-8" } });
}
