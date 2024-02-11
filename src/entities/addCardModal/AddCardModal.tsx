import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { AddIcon } from "@icons";
import { AnimatedModal } from "@common/animatedModal";

import { AddCardButtonEl } from "@common/buttons";
import {
  InputEl,
  InputSubmitEl,
  InputRadioEl,
  InputErrorMessage,
  ErrorMessageField,
  LabelEl,
} from "@common/inputs";
import { FormEl, Title, RadioButtonsContainer } from "@common/form";

enum TypePetEnum {
  cat = "cat",
  dog = "dog",
  other = "other",
}

interface IAddCardModal {
  description: string;
  link: string;
  typePet: TypePetEnum;
}

export const AddCardModal: FC = () => {
  const [opened, setOpened] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IAddCardModal>({ mode: "onChange" });

  const onSubmit = (data: object) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <AddCardButtonEl onClick={() => setOpened(true)}>
        <AddIcon />
      </AddCardButtonEl>

      <AnimatedModal opened={opened} onClose={() => setOpened(false)}>
        <FormEl onSubmit={handleSubmit(onSubmit)}>
          <Title className="form__title">Add new card</Title>
          <div>
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

            <InputEl
              {...register("link", { required: "This field is required" })}
              placeholder="Photo link"
              type="url"
            />
            <ErrorMessageField>
              {errors?.link && (
                <InputErrorMessage>
                  {errors?.link?.message || "Error!"}
                </InputErrorMessage>
              )}
            </ErrorMessageField>

            <span>Type your pet</span>
            <RadioButtonsContainer>
              <LabelEl htmlFor="cat">
                <InputRadioEl
                  {...register("typePet", {
                    required: "This field is required",
                  })}
                  id="cat"
                  type="radio"
                  value="cat"
                />
                Cat
              </LabelEl>
              <LabelEl htmlFor="dog">
                <InputRadioEl
                  {...register("typePet", {
                    required: "This field is required",
                  })}
                  id="dog"
                  type="radio"
                  value="dog"
                />
                Dog
              </LabelEl>
              <LabelEl htmlFor="other">
                <InputRadioEl
                  {...register("typePet", {
                    required: "This field is required",
                  })}
                  id="other"
                  type="radio"
                  value="other"
                />
                Other
              </LabelEl>
            </RadioButtonsContainer>
          </div>
          <InputSubmitEl value="Save" disabled={!isValid} />
        </FormEl>
      </AnimatedModal>
    </>
  );
};
