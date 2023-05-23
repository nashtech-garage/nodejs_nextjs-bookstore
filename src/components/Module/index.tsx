import { Book, BookProps } from '../Book'

export type ModuleProps = {
  title: string
  children: React.ReactNode
}

export function Module({ title, children }: ModuleProps) {
  return (
    <div className='module'>
      <div className='tieu_de_module'>{title}</div>
      <div className='noi_dung_module'>
        {children}
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  )
}
