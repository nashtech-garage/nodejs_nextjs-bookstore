export type LayoutDashboardProps = {
  children: React.ReactNode
}

export function LayoutDashboard({ children }: LayoutDashboardProps) {
  return (
    <>
      <main className='container'>{children}</main>
    </>
  )
}
