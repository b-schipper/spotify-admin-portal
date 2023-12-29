"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerArtist } from "@/services/auth-service";
import { useAuth } from "./AuthProvider";

const registerSchema = z.object({
  username: z.string({ required_error: "Username is required" }).min(1),
  email: z.string({ required_error: "Email is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

type registerValidation = z.infer<typeof registerSchema>;

const RegisterArtistForm = () => {
  const router = useRouter();
  const { accessToken, setToken } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerValidation>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: registerValidation) => {
    try {
      handleRegisterArtist(data.username, data.email, data.password);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  const handleRegisterArtist = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      const response = await registerArtist(username, email, password);

      router.push("/login");
    } catch (error) {
      throw new Error("Something went wrong");
    }
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register as an Artist</h1>
      <label className="text-white">Username</label>
      <input 
        type="text" 
        {...register("username")}
      />
      <label className="text-white">Email</label>
      <input 
        type="text" 
        {...register("email")}
      />
      <label className="text-white">Password</label>
      <input 
        type="text" 
        {...register("password")}
      />
      <button type="submit">Register</button>
      <div>
        <span>Already have an account?</span>
        <Link href={"/login"}>Log in</Link>
      </div>
    </form>
  );
}

export default RegisterArtistForm;