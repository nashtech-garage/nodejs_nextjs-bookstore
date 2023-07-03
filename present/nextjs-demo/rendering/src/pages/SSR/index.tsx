export default function SSR({ data }: any) {
  return (
    <>
      SSR Page
      <div>This is data: </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://629aa176656cea05fc2c3402.mockapi.io/api/categories`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
