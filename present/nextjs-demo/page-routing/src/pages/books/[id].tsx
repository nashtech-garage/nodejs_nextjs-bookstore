import { useRouter } from "next/router";

export default function BookDetail() {
  const router = useRouter();

  return <>Books Detail {JSON.stringify(router.query)}</>;
}
