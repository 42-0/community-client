import { ReactNode } from 'react';
import HeadComponent from './head';
import { main } from './index.style';

export interface LayoutProps {
  children: ReactNode;
  home?: boolean,
  pageName?: string;
}

const Layout = ({ children, home = false, pageName = '' }: LayoutProps) => {
  const siteTitle = '매체';

  return (
    <>
      {/* Head */}
      <HeadComponent pageName={pageName} home={home} siteTitle={siteTitle} />

      {/* Header */}
      {/* <header> */}
      {/* <div> 헤더부분 </div> */}
      {/* </header> */}

      {/* Main */}
      <main css={main}>
        {children}
      </main>

    </>
  );
};

export default Layout;
