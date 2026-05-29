import "./App.css";
import * as z from "zod";
import { toast } from "sonner";

// prettier-ignore
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,} from "./components/ui/card";
import { Button } from "./components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "./components/ui/field";
import { Input } from "./components/ui/input";
//
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import img from "./assets/log_in.svg";

function App() {
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
    toast.promise(
      () =>
        new Promise((resolve) => {
          setTimeout(() => resolve({ data: data }), 2000);
        }),
      {
        loading: "Logging in...",
        success: "Logged in successfully!",
        error: "Failed to log in. Please try again.",
      },
    );

    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //       <code className="text-sm">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // });
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center gap-4">
        <Card className="w-full sm:max-w-md border-2 mx-10 ">
          <CardHeader className="my-3">
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your email & password below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="my-3">
            <form onSubmit={loginForm.handleSubmit(onSubmit)}>
              <FieldGroup>
                {/* prettier-ignore */}
                <Controller name="email" control={loginForm.control} render={({field, fieldState}) => (<Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input {...field} name="email" placeholder="m@example.com" aria-invalid={fieldState.invalid} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>)} />
                {/* prettier-ignore */}
                <Controller name="password" control={loginForm.control} render={({field, fieldState}) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input {...field} name="password" type="password" placeholder="••••••••" aria-invalid={fieldState.invalid} />
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  </Field>
                )} 
                />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              variant="default"
              size="lg"
              type="submit"
              onClick={loginForm.handleSubmit(onSubmit)}
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>

        <img
          src={img}
          alt="Illustration"
          className="hidden lg:block ml-8  w-1/3"
        />
      </div>
    </>
  );
}

export default App;
