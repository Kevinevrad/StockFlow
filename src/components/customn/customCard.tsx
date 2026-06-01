// prettier-ignore
import {Card, CardHeader,CardTitle, CardDescription, CardContent,} from "../ui/card";

import { FormHeader } from "./formHeader";

// prettier-ignore
export const CustomCard = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => {
  return (
    <Card className="card w-full sm:max-w-md border-2 mx-10">
      <FormHeader headerTitle="StockFlow" />
      <CardHeader className="text-center my-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-center  ">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>

    </Card>
  );
};
