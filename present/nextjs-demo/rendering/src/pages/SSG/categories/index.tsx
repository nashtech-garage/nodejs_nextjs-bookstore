export default function SSGWithPageContent({ data }: any) {
  return (
    <>
      SSG With Page Content
      <div>Data : </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://629aa176656cea05fc2c3402.mockapi.io/api/categories"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
