"use client";
import { AppButton, TextP } from "@repo/ui";
import React from "react";
import { IoClose } from "react-icons/io5";
import { AppTextInput, Spinner } from "../_comps";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AirtimeBeneficiaryRpc } from "@repo/rpc";

export const formSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .max(11, { message: "Maximum of 11 numbers" })
    .min(11, { message: "Minimum of 11 numbers" }),
});

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  name: "",
};

export type IFormSchema = z.infer<typeof formSchema>;

export function AddBeneficiaryModal(props: { onClose: VoidFunction }) {
  const rpc = new AirtimeBeneficiaryRpc();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (input: { phone: string; name: string }) => {
      console.log("On mutate");
      try {
        const res = await rpc.create({
          user_id: 1,
          phone: input.phone,
          name: input.name,
        });

        console.log("on success:", res);
        return res;
      } catch (error) {
        throw new Error("Could create gift card");
      }
    },
    onSuccess: async (data, variables, context) => {
      props.onClose();
    },
    onError: (e) => {
      console.log("Oops an error occurred", e);
    },
  });

  async function onSubmit(value: IFormSchema) {
    mutation.mutate({
      phone: value.phone.toString(),
      name: value.name,
    });
  }
  return (
    <>
      <div className="flex items-center justify-between mt-2 mb-0">
        <TextP>Add a beneficiary</TextP>
        <div
          className="bg-secondary/60 rounded-lg p-[2px]"
          onClick={props.onClose}
        >
          <IoClose className="text-card-foreground" />
        </div>
      </div>

      <div
        className={`px-2 py-2 rounded-md mb-2 w-full 
        flex flex-col items-center justify-center`}
      >
        <AppTextInput
          errorMessage={form.formState.errors.name?.message}
          control={form.control.register("name")}
          name={"name"}
          place="Enter name"
          className="mt-2"
          label="Name"
        />
        <AppTextInput
          errorMessage={form.formState.errors.phone?.message}
          control={form.control.register("phone")}
          name={"phone"}
          place="Enter recipient's phone number"
          className="mt-2"
          label="Phone"
          type="number"
        />

        {mutation.isLoading ? (
          <Spinner />
        ) : (
          <AppButton
            className="my-2 w-[80%]"
            onClick={() => {
              form.handleSubmit(onSubmit)();
            }}
          >
            Send
          </AppButton>
        )}
      </div>
    </>
  );
}
