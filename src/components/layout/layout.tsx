import { ReactNode } from 'react';
import HeadComponent from './head/head';
import { main } from './layout.style';

export interface LayoutProps {
  children: ReactNode;
  home?: boolean,
  pageName?: string;
}

const Layout = ({ children, home = false, pageName = '' }: LayoutProps) => {
  const siteTitle = '매체';

  return (
    <>
      <HeadComponent pageName={pageName} home={home} siteTitle={siteTitle} />

      <main css={main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
