import React from 'react';

interface PageTextProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  fontSize?: any;
  color?: string;
}
export const PageText: React.FC<PageTextProps> = ({
  children,
  className,
  fontSize,
  color,
  ...otherProps
}) => {
  return <span className={className}>{children}</span>;
};
