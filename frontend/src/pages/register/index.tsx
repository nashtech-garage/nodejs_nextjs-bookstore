import { Button, Form, Input, Card, notification } from 'antd'
import { useRouter } from 'next/router'

import styles from './index.module.scss'
import { useAuth } from '@/hooks'
import { useEffect } from 'react'

Registry.title = 'Registry'

export default function Registry() {
  const router = useRouter()
  const { user, onRegister } = useAuth()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])
  if (user) return null

  const onFinish = async (values: any) => {
    const { email, password, fullName, phone, address } = values
    try {
      const response = await onRegister(
        email,
        password,
        fullName,
        phone,
        address
      )
      notification.success({
        message: response.message,
      })
      router.push('/login', undefined, { scroll: false })
    } catch (error: any) {
      notification.error({
        message: error.message,
      })
    }
  }

  return (
    <Card className={styles.register}>
      <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            { required: true, type: 'email', message: 'Vui lòng nhập email!' },
          ]}
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
          name='fullName'
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
