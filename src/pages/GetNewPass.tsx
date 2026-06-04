import { FormContainer } from "../components/customn/formContainer";
import { CustomCard } from "../components/customn/customCard";
import { FieldGroup } from "../components/ui/field";
import { FormField } from "../components/customn/formField";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function GetNewPass() {
  const navigate = useNavigate();

  const formGetNewPassSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
  });

  const formGetNewPass = useForm<z.infer<typeof formGetNewPassSchema>>({
    resolver: zodResolver(formGetNewPassSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formGetNewPassSchema>) => {
    // Here you would typically handle the form submission, e.g., send a request to your backend to initiate the password reset process.
    console.log("Form submitted with data:", data);
    // For demonstration, we'll just navigate back to the login page after submission.
    navigate("/login");
  };

  const handleGoBack = () => {
    navigate("/login");
  };

  return (
    <FormContainer>
      <CustomCard
        title="Get New Password"
        description="Enter your email to receive a link to reset your password."
      >
        <form onSubmit={formGetNewPass.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* prettier-ignore */}
            <FormField label="Email" type="email" placeholder="Enter your email" name="email" control={formGetNewPass.control} />
          </FieldGroup>

          <FieldGroup className="flex flex-col i ">
            <Button variant="link" className="self-end" onClick={handleGoBack}>
              &larr; Go back to Login
            </Button>
            <Button type="submit" className="w-full my-5 py-5">
              Send Reset Link
            </Button>
          </FieldGroup>
        </form>
      </CustomCard>
    </FormContainer>
  );
}
