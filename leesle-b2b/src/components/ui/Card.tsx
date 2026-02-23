import { Link } from "@/i18n/navigation";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className = "", href }: CardProps) {
  const baseStyles =
    "bg-brand-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300";

  if (href) {
    return (
      <Link href={href} className={`block ${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}
