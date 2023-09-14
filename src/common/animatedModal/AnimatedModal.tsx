import React, { FC } from "react";

import { Portal } from "@common/portal";
import { Layout } from "./Layout";

import { useMount } from "./useMount";

interface IAnimatedModal {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AnimatedModal: FC<IAnimatedModal> = ({
  opened,
  onClose,
  children,
}) => {
  const { mounted } = useMount({ opened });

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};
