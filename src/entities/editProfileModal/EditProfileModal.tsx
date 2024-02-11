import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { AnimatedModal } from "@common/animatedModal";

import { EditIcon } from "@icons";

import { EditProfileButtonEl } from "@common/buttons";
import {
  InputEl,
  InputSubmitEl,
  InputErrorMessage,
  ErrorMessageField,
} from "@common/inputs";
import { FormEl, Title } from "@common/form";

interface IInputProfileForm {
  name: string;
  description: string;
}

export const EditProfileModal = () => {
  const [opened, setOpened] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IInputProfileForm>({ mode: "onChange" });

  const onSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <EditProfileButtonEl onClick={() => setOpened(true)}>
        <EditIcon />
      </EditProfileButtonEl>

      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <FormEl onSubmit={handleSubmit(onSubmit)}>
          <Title>Edit profile</Title>
          <div>
            <InputEl
              {...register("name", { required: "This field is required" })}
              placeholder="Name"
            />
            <ErrorMessageField>
              {errors?.name && (
                <InputErrorMessage>
                  {errors?.name?.message || "Error!"}
                </InputErrorMessage>
              )}
            </ErrorMessageField>
            <InputEl
              {...register("description", {
                required: "This field is required",
              })}
              placeholder="Description"
            />
            <ErrorMessageField>
              {errors?.description && (
                <InputErrorMessage>
                  {errors?.description?.message || "Error!"}
                </InputErrorMessage>
              )}
            </ErrorMessageField>
          </div>
          <InputSubmitEl value="Save" disabled={!isValid} />
        </FormEl>
      </AnimatedModal>
    </>
  );
};
