import * as React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d61a67230fa9d678dd6f4ad5dc9da14d8f242c?placeholderIfAbsent=true"
          alt="Login background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full items-center justify-center p-4 md:w-1/2 lg:w-1/3">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
}
