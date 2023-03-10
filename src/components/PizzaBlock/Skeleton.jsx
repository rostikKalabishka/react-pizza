import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle x="15" y="" cx="125" cy="125" r="125" />
    <rect x="0" y="296" ry="10" width="280" height="23" />
    <rect x="0" y="345" ry="10" width="280" height="88" />
    <rect x="0" y="455" ry="10" width="95" height="30" />
    <rect x="125" y="446" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
