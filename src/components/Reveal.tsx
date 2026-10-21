import type { CSSProperties, ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}) {
  const mergedStyle = { ...style, "--reveal-delay": `${delay}ms` } as CSSProperties;
  return (
    <Tag className={`reveal ${className}`} style={mergedStyle}>
      {children}
    </Tag>
  );
}
