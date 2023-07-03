import { useRouter } from "next/router";

export default function Shop() {
  const router = useRouter();

  return <>Shop Page {JSON.stringify(router.query)}</>;
}
