import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

export default function ComponentB() {
  const { data, error, isLoading } = useSWR("/api/categories", fetcher, {
    revalidateOnFocus: false,
  });
  console.log("Component B Render");
  return (
    <>
      <div>
        ComponentB
        <p>{data && JSON.stringify(data)}</p>
      </div>
    </>
  );
}
