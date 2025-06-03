import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 md:py-24">
      <Card className="w-full max-w-md text-center">
        <CardContent className="py-8 space-y-4">
          <h1 className="text-3xl font-bold">Welcome to Horsepower.VIP</h1>
          <p className="text-muted-foreground">
            The virtual garage .
          </p>
          <Button asChild>
            <a href="/garage">Enter My Garage</a>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
