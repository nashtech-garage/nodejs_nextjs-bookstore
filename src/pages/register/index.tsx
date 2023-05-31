import { Button, Form, Input, Card } from 'antd'
import { useRouter } from 'next/router'

import styles from './index.module.scss'

Registry.title = 'Registry'

export default function Registry() {
  const router = useRouter()

  const onFinish = () => {}

  return (
    <Card className={styles.register}>
      <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
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

        <Form.Item
          name='confirm'
          label='Nhập Lại Mật Khẩu'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập lại mật khẩu!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Mật Khẩu không trùng khớp!'))
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='Họ Tên'
          name='fullname'
          rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='phone'
          label='Số Điện Thoại'
          rules={[
            {
              required: true,
              message: 'Số điện thoại không hợp lệ!',
              pattern: new RegExp(/^[0-9]+$/),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='address'
          label='Địa Chỉ'
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <div className={styles.button_group}>
          <Button type='primary' htmlType='submit'>
            Đăng ký
          </Button>
          <Button
            onClick={() => router.push('/login', undefined, { scroll: false })}
          >
            Quay lại
          </Button>
        </div>
      </Form>
    </Card>
  )
}
