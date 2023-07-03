
export default function ISR({ data }: any) {
  return (
    <>
      ISR With Relative
      <div>Data : </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://629aa176656cea05fc2c3402.mockapi.io/api/categories`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
}
