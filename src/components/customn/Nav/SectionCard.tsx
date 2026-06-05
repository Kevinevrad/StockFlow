import { IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../ui/card";
import { Badge } from "../../ui/badge";

function CardStats() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          $45,231.89
        </CardTitle>
        <CardAction>
          <Badge variant="outline">
            <IconTrendingUp />
          </Badge>
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          Trending up this month <IconTrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground">
          Visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default CardStats;
