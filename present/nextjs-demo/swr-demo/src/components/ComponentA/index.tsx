import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((r) => r.json());

export default function ComponentA() {
  const { data, error, isLoading, mutate } = useSWR(
    "/api/categories",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
  console.log("Component A Render");
  return (
    <>
      <div>
        ComponentA
        <button onClick={() => mutate()}>Reload</button>
        <p>{data && JSON.stringify(data)}</p>
      </div>
    </>
  );
}
