/**
 * The login page has its own layout — it should NOT inherit the admin sidebar.
 * This file overrides the parent admin/layout.tsx for this route only.
 */
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
