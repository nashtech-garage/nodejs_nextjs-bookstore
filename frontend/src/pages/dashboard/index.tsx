import { LayoutDashboard } from '@/components'

import styles from './index.module.scss';

Dashboard.title = 'Dashboard'
Dashboard.layout = LayoutDashboard

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <p>
        Tài khoản: <b>admin</b>
      </p>
      <p>
        Họ Tên: <b>Nguyễn Văn Admin</b>
      </p>
      <p>
        Số điện thoại: <b>0999999</b>
      </p>
      <p>
        Địa chi: <b>999 Đường Hai Bà Chưng, Phường 13, Quận 1, Thành Phú Hồ Chí Minh</b>
      </p>
    </div>
  )
}
