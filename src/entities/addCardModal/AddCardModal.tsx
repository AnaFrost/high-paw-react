import React, { useState } from "react";

import { AnimatedModal } from "@common/animatedModal";
import { Form } from "@entities/form";
import { Button } from "@common/buttons";
import { Input, RadioInput } from "@common/inputs";
import { AddIcon } from "@icons";

export const AddCardModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button add onClick={() => setOpened(true)}>
        <AddIcon />
      </Button>
      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <Form formName="Add new card">
          <>
            <Input
              placeholder="Description"
              name="description"
              type="text"
              required
            />
            <Input placeholder="Photo link" name="link" type="url" required />
            <span>Type your pet</span>
            <div className="radio-btn-container">
              <RadioInput
                labelText="Cat"
                id="forCat"
                name="typeAnimal"
                value="cat"
              />
              <RadioInput
                labelText="Dog"
                id="forDog"
                name="typeAnimal"
                value="dog"
              />
              <RadioInput
                labelText="Other"
                id="forOther"
                name="typeAnimal"
                value="other"
              />
            </div>
          </>
        </Form>
      </AnimatedModal>
    </>
  );
};
