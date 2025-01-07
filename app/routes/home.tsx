import { Header } from "~/components/header/header";
import type { Route } from "./+types/home";
import { Footer } from "~/components/footer/footer";
import { redirect } from "react-router";
import { Hero } from "~/components/hero/hero";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Oracle of Pools" },
    { name: "description", content: "Welcome to The Pool Whisperer!" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const id = formData.get("ID") as string;
  const networkName = formData.get("networkName") as string;
  console.log("Id", id); console.log("networkName", networkName);

  // Redirect to the new page with the id
  return redirect(`/${networkName}/${id}`);
}

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="overflow-y-auto">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
