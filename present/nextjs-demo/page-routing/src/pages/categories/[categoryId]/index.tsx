import { useRouter } from "next/router";

export default function CategoryDetail() {
  const router = useRouter();

  return <>Category Detail {JSON.stringify(router.query)}</>;
}
