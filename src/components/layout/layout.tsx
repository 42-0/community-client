import { ReactNode, useState } from 'react';

export interface LayoutProps {
  children: ReactNode;
  pageName: string
}

const LayoutComponent = ({ children, pageName }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      ddd
    </div>
  );
};

export default LayoutComponent;
