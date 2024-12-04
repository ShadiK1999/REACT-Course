import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandingChars = ({ children, maxChars = 100 }: Props) => {
  if (children.length <= maxChars) return <p>{children}</p>;

  const [expanded, setExpanded] = useState(true);
  const text = children.substring(0, maxChars);
  return (
    <div>
      <span>{expanded ? text + "..." : children}</span>
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "More" : "Less"}
      </button>
    </div>
  );
};

export default ExpandingChars;
