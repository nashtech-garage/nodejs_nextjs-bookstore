import { Button, Form, Input, Card, notification } from 'antd'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'

import { useAuth } from '@/hooks'
import styles from './index.module.scss'

export default function Login() {
  const router = useRouter()
  const { user, onLogin } = useAuth()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])
  if (user) return null

  const onFinish = async (values: any) => {
    const { email, password } = values
    try {
      const response = await onLogin(email, password)
      notification.success({
        message: response.message,
      })
    } catch (error: any) {
      notification.error({
        message: error.message,
      })
    }
  }

  return (
    <>
      <Head>
        <title>Book Store | Login</title>
        <meta
          name='description'
          content='Login to our bookstore ecommerce platform and access your personalized account. Enjoy a seamless shopping experience, track your orders, manage your wishlist, and explore exclusive member benefits. Sign in securely and easily to unlock a world of books tailored to your preferences.'
        />
      </Head>
      <Card className={styles.login}>
        <Form
          name='basic'
          onFinish={onFinish}
          autoComplete='off'
          labelCol={{ flex: '85px' }}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Vui lòng nhập Email!',
              },
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
    </>
  )
}
