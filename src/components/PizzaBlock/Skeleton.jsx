import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="120" r="120" />
    <rect x="0" y="265" rx="5" ry="5" width="280" height="27" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="428" rx="5" ry="5" width="95" height="27" />
    <rect x="125" y="420" rx="30" ry="30" width="152" height="47" />
  </ContentLoader>
);

export default Skeleton;