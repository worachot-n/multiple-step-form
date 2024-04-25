"use client";

import React, { useState } from "react";
import NavButtons from "@/components/FormInputs/NavButtons";
import SelectInput from "@/components/FormInputs/SelectInput";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm() {
  const [loading, setLoading] = useState(false);
  const gender = [
    {
      id: "male",
      title: "Male",
    },
    {
      id: "female",
      title: "Female",
    },
  ];
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function processData(data) {
    console.log(data);
  }
  return (
    <form className="px-12 py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
          Personal info
        </h5>
        <p>Please provide your name,email address,and phone number.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <TextInput
          label="Full Name"
          name="fullName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Date of Birth"
          type="date"
          name="dob"
          register={register}
          errors={errors}
        />
        <SelectInput
          label="Select your Gender"
          name="gender"
          register={register}
          options={gender}
        />
        <TextInput
          label="Your Location Address"
          name="location"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Your Country of Residence"
          name="country"
          register={register}
          errors={errors}
        />
      </div>

      <NavButtons />
    </form>
  );
}
