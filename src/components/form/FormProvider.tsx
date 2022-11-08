import { FormProvider as RHFormProvider } from "react-hook-form";
import React from 'react'
import { FormProviderProps } from "../../types/type";
export default function FormProvider({ children, onSubmit, methods }: FormProviderProps) {
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </RHFormProvider>
  );
}
