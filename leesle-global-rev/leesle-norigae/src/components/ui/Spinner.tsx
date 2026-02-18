export default function Spinner({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-5 h-5 border-2" : "w-6 h-6 border-3";
  return (
    <div
      className={`${dim} border-gray-light border-t-primary rounded-full animate-spin`}
      style={{ animation: "spin 0.6s linear infinite" }}
    />
  );
}
