// prettier-ignore
import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

// UI
import { Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";

interface InputFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  label: string;
  placeholder?: string;
  type?: string;
  height?: string;
}

export const CustomField = <TFieldValues extends FieldValues>({
  name,
  control,
  label,
  type = "text",
  placeholder,
}: InputFieldProps<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          <Input {...field} name={name} type={type} placeholder={placeholder} />
          {fieldState.error && (
            <FieldError>{fieldState.error.message}</FieldError>
          )}
        </Field>
      )}
    />
  );
};
