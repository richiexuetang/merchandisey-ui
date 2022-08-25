import React from 'react';

interface ItemWrapperProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  maxWidth?: string;
  margin?: string;
}
export const PageItemWrapper: React.FC<ItemWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return <div className={className}>{children}</div>;
};
