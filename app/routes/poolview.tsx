import type { Route } from "./+types/poolview";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const { ID, networkName } = params;

  return { ID, networkName };
}

export default function PoolDetailsPage({ loaderData }: Route.ComponentProps) {
  const { ID, networkName } = loaderData
  return (
    <div className="bg-black">
      <h1>ID Details</h1>
      <p> ID: {ID}</p>
      <p> Network Name: {networkName}</p>
    </div>
  );
}
