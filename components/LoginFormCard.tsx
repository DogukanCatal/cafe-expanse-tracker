"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "@/schemes/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginFormCard() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hesabina giris yap</CardTitle>
        <CardDescription>Email ve sifreniz ile giris yapiniz.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

export default LoginFormCard;
