import styles from './index.module.scss'

export type ModuleProps = {
  title?: string
  children: React.ReactNode
}

export function Module({ title, children }: ModuleProps) {
  return (
    <div className={styles.module}>
      {title && <div className={styles.tieu_de_module}>{title}</div>}
      <div className={styles.noi_dung_module}>
        {children}
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  )
}
