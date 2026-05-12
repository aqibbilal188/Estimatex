import PageTransitionShell from "@/components/PageTransitionShell";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransitionShell>{children}</PageTransitionShell>;
}
