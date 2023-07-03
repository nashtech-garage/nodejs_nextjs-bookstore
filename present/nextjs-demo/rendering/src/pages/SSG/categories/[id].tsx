export default function SSGWithPagePath({ data }: any) {
  return (
    <>
      SSG With Page Path
      <div>Data : </div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://629aa176656cea05fc2c3402.mockapi.io/api/categories"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post: any) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://629aa176656cea05fc2c3402.mockapi.io/api/categories/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
