import Software from "@/components/apphub/software";
export default function AppHub() {
  const tools = [
    {
      name: "BENEFICIARIOS",
      subtitle: "HERRAMIENTA TECNOLÓGICA",
      url: `http://${process.env.NEXT_PUBLIC_FRONTEND_HOST || "localhost"}:3002/persons`,
      image: "beneficiary.jpg",
    },
    {
      name: "VENTAS",
      subtitle: "HERRAMIENTA TECNOLÓGICA",
      url: `http://${process.env.NEXT_PUBLIC_FRONTEND_HOST || "localhost"}:3003`,
      image: "sales.png",
    },
    {
      name: "RECAUDACIONES",
      subtitle: "HERRAMIENTA TECNOLÓGICA",
      url: `http://${process.env.NEXT_PUBLIC_FRONTEND_HOST || "localhost"}:3004`,
      image: "collections.png",
    },
  ];

  return (
    <div className="max-w-full gap-7 grid grid-cols-8 p-5">
      {tools.map((computerTool, index) => (
        <Software
          key={index}
          image={computerTool.image}
          name={computerTool.name}
          subtitle={computerTool.subtitle}
          url={computerTool.url}
        />
      ))}
    </div>
  );
}
