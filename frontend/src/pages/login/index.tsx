import { Button, Form, Input, Card } from 'antd'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

Login.title = 'Login'

export default function Login() {
  const router = useRouter()

  const onFinish = () => {}

  return (
    <Card className={styles.login}>
      <Form name='basic' onFinish={onFinish} autoComplete='off'>
        <Form.Item
          label='Tài Khoản'
          name='username'
          rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Mật Khẩu'
          name='password'
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password />
        </Form.Item>
        <div className={styles.button_group}>
          <Button type='primary' htmlType='submit'>
            Đăng nhập
          </Button>
          <Button
            onClick={() =>
              router.push('/register', undefined, { scroll: false })
            }
          >
            Đăng ký
          </Button>
        </div>
      </Form>
    </Card>
  )
}
