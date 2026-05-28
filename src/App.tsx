import "./App.css";
import { Button } from "./components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader className="my-3">
            <div className="my-5 text-center "> SMART - FlOW</div>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="my-3">
            <form action="#">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFrom="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFrom="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export default App;
