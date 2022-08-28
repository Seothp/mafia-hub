import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

export const Portal = ({ children }: Props) => {
  return createPortal(children, document.body);
};
