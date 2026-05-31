import img from "../assets/loginBg.jpg";
import logo from "../assets/inventory.png";
//
import * as z from "zod";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// prettier-ignore
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "../components/ui/field";
import { Input } from "../components/ui/input";
import { useState } from "react";

function Login() {
  const [passOublier, setPassOublier] = useState(false);

  const togglePassOublier = () => {
    setPassOublier(!passOublier);
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
    <div
      className={styles.container}
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // opacity: 0.9,
      }}
    >
      <Card className="w-full sm:max-w-md mx-10 sm:p-10 p-4 ">
        <div className="flex items-center justify-center gap-1.5   my-1  ">
          <img src={logo} alt="Logo" className="h-12 w-12  " />
          <h1 className="text-3xl tracking-tight uppercase  font-extrabold font-mono ">
            sotckFlow
          </h1>
        </div>
        <CardHeader className="my-3  text-center">
          <CardTitle>{passOublier ? "Reset Password" : "Connexion"}</CardTitle>
          <CardDescription>
            {passOublier
              ? "Enter your email to receive password reset instructions."
              : "Enter your email and password to sign in."}
          </CardDescription>
        </CardHeader>
        <CardContent className="my-3">
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={loginForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      name="email"
                      placeholder="m@example.com"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={loginForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      height="40px"
                      {...field}
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Button
                variant="link"
                className="h-auto p-0 self-end cursor-pointer"
              >
                Mot de passe oublié?
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="mb-5">
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
    </div>
  );
}

const styles = {
  container: "h-screen w-screen flex items-center justify-center",
  card: "w-full sm:max-w-md border-2 mx-10",
};
export default Login;
