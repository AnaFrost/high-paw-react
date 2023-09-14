import React, { useState } from "react";

import { Button } from "@common/buttons";
import { EditIcon } from "@icons";
import { AnimatedModal } from "@common/animatedModal";
import { Form } from "@entities/form";
import { Input } from "@common/inputs";

export const EditProfileModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button edit onClick={() => setOpened(true)}>
        <EditIcon />
      </Button>
      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <Form formName="Edit profile">
          <>
            <Input placeholder="Name" required name="name" type="text" />
            <Input
              placeholder="Description"
              required
              name="description"
              type="text"
            />
          </>
        </Form>
      </AnimatedModal>
    </>
  );
};
