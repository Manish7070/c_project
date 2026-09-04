import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent hover:bg-muted-background text-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button 
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <div className={cn("card-premium p-6 md:p-8", className)}>
      {children}
    </div>
  );
};

export const Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <div className={cn("section-padding", className)}>
      {children}
    </div>
  );
};

export const SectionHeading = ({ 
  title, 
  subtitle, 
  align = "center",
  className
}: { 
  title: string; 
  subtitle?: string; 
  align?: "left" | "center";
  className?: string
}) => {
  return (
    <div className={cn(
      "mb-12 md:mb-16", 
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const Badge = ({ 
  children, 
  className,
  color = "blue"
}: { 
  children: React.ReactNode; 
  className?: string;
  color?: "blue" | "green" | "purple" | "yellow" | "red" | "orange"
}) => {
  const colors = {
    blue: "bg-accent-blue/20 text-blue-700",
    green: "bg-accent-green/20 text-emerald-700",
    purple: "bg-accent-purple/20 text-purple-700",
    yellow: "bg-accent-yellow/20 text-amber-700",
    red: "bg-accent-red/20 text-red-700",
    orange: "bg-primary/10 text-primary",
  };

  return (
    <span className={cn("badge-soft", colors[color], className)}>
      {children}
    </span>
  );
};
