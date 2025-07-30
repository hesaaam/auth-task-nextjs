// src/app/auth/page.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, AuthFormValues } from '@/lib/validation';
import { useAuth } from '@/hooks/useAuth';

import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import styles from './Auth.module.scss';

export default function AuthPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormValues) => {
    setIsLoading(true);
    try {
      // The phone number is only for validation practice as per task requirements.
      console.log('Validated phone:', data.phone);
      await login();
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('ورود با خطا مواجه شد. لطفاً دوباره تلاش کنید.');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authForm}>
        <h1>ورود به پنل کاربری</h1>
        <p>برای ورود، شماره موبایل خود را وارد کرده و روی دکمه ورود کلیک کنید.</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="شماره موبایل"
            type="tel"
            {...register('phone')}
            error={errors.phone?.message}
            placeholder="09123456789"
          />
          <Button type="submit" isLoading={isLoading}>
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
}
