// docs/openapi.yaml을 Swagger UI로 보여주는 페이지예요. 백엔드 팀 공유용이라 배포에도 열려 있어요(검색 노출만 차단).
import type { Metadata } from "next";
import { SwaggerViewer } from "./_sections/SwaggerViewer";

export const metadata: Metadata = {
  title: "API 문서",
  robots: { index: false },
};

export default function ApiDocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-20">
      <SwaggerViewer />
    </div>
  );
}
