//
import { useNavigate } from "react-router";

import * as z from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// prettier-ignore

import { Button } from "../components/ui/button";
import { FieldGroup } from "../components/ui/field";

import { useState } from "react";

import { FormContainer } from "../components/customn/formContainer";
import { CustomCard } from "../components/customn/customCard";
import { CustomField } from "../components/customn/customField";

function Login() {
  const [passOublier, setPassOublier] = useState(false);

  const navigate = useNavigate();

  const togglePassOublier = () => {
    setPassOublier(!passOublier);
    if (!passOublier) {
      navigate("/forget-password");
    } else {
      navigate("/login");
    }
  };

  const loginFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  });

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // ICI LE PRMIER PROBLEME
  function onSubmit(data: z.infer<typeof loginFormSchema>) {
    // toast.promise(
    //   () =>
    //     new Promise((resolve) => {
    //       setTimeout(() => resolve({ data: data }), 2000);
    //     }),
    //   {
    //     loading: "Logging in...",
    //     success: "Logged in successfully!",
    //     error: "Failed to log in. Please try again.",
    //   },
    // );

    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code className="text-sm">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }
  return (
    <FormContainer>
      <CustomCard
        title="Connexion"
        description="Enter your email and password to sign in."
      >
        <form onSubmit={loginForm.handleSubmit(onSubmit)}>
          <FieldGroup>
            <CustomField
              name="email"
              control={loginForm.control}
              label="Email"
              placeholder="m@example.com"
            />

            <CustomField
              name="password"
              control={loginForm.control}
              label="Password"
              placeholder="••••••••"
              type="password"
            />
          </FieldGroup>

          <FieldGroup className="flex items-center justify-between ">
            <Button
              variant="link"
              onClick={togglePassOublier}
              className="text-sm self-end"
            >
              {passOublier ? "Back to Login" : "Forgot Password?"}
            </Button>

            <Button
              className="w-full"
              variant="default"
              size="lg"
              type="submit"
            >
              Sign in
            </Button>
          </FieldGroup>
        </form>
      </CustomCard>
    </FormContainer>
  );
}

export default Login;
