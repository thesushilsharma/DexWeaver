import { Header } from "~/components/header/header";
import type { Route } from "./+types/home";
import { Footer } from "~/components/footer/footer";
import { Hero } from "~/components/hero/hero";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Oracle of Pools" },
    { name: "description", content: "Welcome to The Pool Whisperer!" },
  ];
}
export default function Home() {
  return <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow">
      <Hero />
    </main>
    <Footer />
  </div>
}
