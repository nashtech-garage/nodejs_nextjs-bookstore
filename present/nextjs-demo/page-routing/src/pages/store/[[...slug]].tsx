import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();

  return <>Store Page {JSON.stringify(router.query)}</>;
}
