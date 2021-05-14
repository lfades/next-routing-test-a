export default function Yay() {
  return 'hello world! 2';
}

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps = async ({ params }) => {
  console.log(params);
  return {
    props: { path: params.yay },
    revalidate: 120,
  };
};
