import { AccessNotice } from "@/components/apphub/accessNotice";
import Software from "@/components/apphub/software";
import { requireUserContext } from "@/utils/auth/session";
import { hubTools } from "@/utils/tools";

interface Props {
  searchParams: Promise<{ notice?: string }>;
}

export default async function AppHub({ searchParams }: Props) {
  const [{ permissions }, query] = await Promise.all([
    requireUserContext(),
    searchParams,
  ]);
  const allowedToLaunch = new Set(
    permissions
      .filter((permission) => permission.scopes.includes("launch"))
      .map((permission) => permission.resource),
  );
  const tools = hubTools().filter((tool) => allowedToLaunch.has(tool.resource));

  return (
    <div className="grid max-w-full grid-cols-6 gap-5 p-5">
      {query.notice === "access_denied" ? <AccessNotice /> : null}
      {tools.map((tool) => (
        <Software
          key={tool.resource}
          description={tool.subtitle}
          image={`/${tool.image}`}
          name={tool.name}
          url={`/api/tools/${tool.key}/launch`}
        />
      ))}
      {tools.length === 0 ? (
        <p className="col-span-6 text-center text-muted">
          No tiene herramientas habilitadas.
        </p>
      ) : null}
    </div>
  );
}
