import React from "react";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <FcLike size="20" onClick={toggle} />;
  return <FcLikePlaceholder size="20" onClick={toggle} />;
};

export default Like;
