export default function Yay() {
  return 'hello world!';
}

export const getStaticPaths = async () => {
  return {
    paths: ['/a', '/b', '/c'],
    // If fallback is true the rewrite is never matched
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return {
    props: { path: params.yay },
    revalidate: 120,
  };
};
