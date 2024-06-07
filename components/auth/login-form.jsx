"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { SiteLogo } from "@/components/svg";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";

import googleIcon from "@/public/images/auth/google.png";
import facebook from "@/public/images/auth/facebook.png";
import twitter from "@/public/images/auth/twitter.png";
import GithubIcon from "@/public/images/auth/github.png";

const schema 			= z.object( {
		email: z.string().email( { message: "Your email is invalid." } )
	,	password: z.string().min( 4 )
	,
} );

import { useMediaQuery } from "@/hooks/use-media-query";

const LogInForm 		= () => {
	const [isPending, startTransition] 			= React.useTransition();
	const [passwordType, setPasswordType] 		= React.useState( "password" );
	const isDesktop2xl 							= useMediaQuery( "(max-width: 1530px)" );

	const togglePasswordType 					= () => {
		if( passwordType === "text" ) {
			setPasswordType( "password" );
		}
		else if( passwordType === "password" ) {
			setPasswordType("text");
		}
	};

	const {
			register
		,	handleSubmit
		,	reset
		,	formState: { errors }
		,
	} 											= useForm( {
			resolver: zodResolver(schema)
		,	mode: "all"
		,	defaultValues: {
					email: "dashtail@codeshaper.net"
				,	password: "password"
				,
			}
		,
	} );

	const [isVisible, setIsVisible] 			= React.useState( false );

	const toggleVisibility 						= () => setIsVisible( !isVisible );

	const onSubmit 								= (data) => {
		startTransition( async () => {
			let response 						= await signIn(
					"credentials"
				,	{
							email: data.email
						,	password: data.password
						,	redirect: false
						,
					}
			);

			console.log( response );

			if( response?.ok ) {
				toast.success( "Login Successful" );
				window.location.assign("/dashboard");
				reset();
			}
			else if( response?.error ) {
				toast.error(response?.error);
			}
		} );
	};

	return (
		<div className="w-full py-10">
			<Link href="/dashboard" className="inline-block">
				<SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
			</Link>
			<div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
				안녕하세요. 건민네 입니다. 👋
			</div>
			<div className="2xl:text-lg text-base text-default-600 2xl:mt-2 leading-6">
				등록된 사용자 정보를 입력하세요.
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="mt-5 2xl:mt-7">
				<div>
					<Label htmlFor="email" className="mb-2 font-medium text-default-600">
						이메일{" "}
					</Label>
					<Input
							disabled={isPending}
							{...register("email")}
							type="email"
							id="email"
							className={
								cn(
										""
									,	{
												"border-destructive": errors.email
											,
										}
								)
							}
							size={!isDesktop2xl ? "xl" : "lg"}
					/>
				</div>
				{
						errors.email
					&&	(
							<div className=" text-destructive mt-2">{errors.email.message}</div>
						)
				}

				<div className="mt-3.5">
					<Label
							htmlFor="password"
							className="mb-2 font-medium text-default-600"
					>
						암호{" "}
					</Label>
					<div className="relative">
						<Input
								disabled={isPending}
								{...register("password")}
								type={passwordType}
								id="password"
								className="peer "
								size={!isDesktop2xl ? "xl" : "lg"}
								placeholder=" "
						/>

						<div
								className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 cursor-pointer"
								onClick={togglePasswordType}
						>
							{
								passwordType === "password" ?
										(
											<Icon
													icon="heroicons:eye"
													className="w-5 h-5 text-default-400"
											/>
										)
									:	(
											<Icon
													icon="heroicons:eye-slash"
													className="w-5 h-5 text-default-400"
											/>
										)
							}
						</div>
					</div>
				</div>
				{
						errors.password
					&&	(
							<div className=" text-destructive mt-2">
								{errors.password.message}
							</div>
						)
				}

				<div className="mt-5  mb-8 flex flex-wrap gap-2">
					<div className="flex-1 flex  items-center gap-1.5 ">
						<Checkbox
								size="sm"
								className="border-default-300 mt-[1px]"
								id="isRemebered"
						/>
						<Label
								htmlFor="isRemebered"
								className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
						>
							아이디 기억하기
						</Label>
					</div>
					<Link href="/auth/forgot" className="flex-none text-sm text-primary">
						암호를 잊었나요?
					</Link>
				</div>
				<Button
						className="w-full"
						disabled={isPending}
						size={!isDesktop2xl ? "lg" : "md"}
				>
					{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					{isPending ? "로딩중입니다..." : "로그인"}
				</Button>
			</form>
			<div className="mt-6 xl:mt-8 flex flex-wrap justify-center gap-4">
				{/* 구글 로그인 버튼 */}
				<Button
						type="button"
						size="icon"
						variant="outline"
						className="rounded-full  border-default-300 hover:bg-transparent"
						disabled={isPending}
						onClick={ () =>
							signIn(
									"google"
								,	{
											callbackUrl: "/dashboard"
										,
									}
							)
						}
				>
					<Image src={googleIcon} alt="google" className="w-5 h-5" />
				</Button>
				{/* 깃허브 로그인 버튼 */}
				<Button
						type="button"
						size="icon"
						variant="outline"
						className="rounded-full  border-default-300 hover:bg-transparent"
						disabled={isPending}
						onClick={ () =>
							signIn(
									"github"
								,	{
											callbackUrl: "/dashboard"
										,	redirect: false
										,
									}
							)
						}
				>
					<Image src={GithubIcon} alt="google" className="w-5 h-5" />
				</Button>
				{/* 페이스북 로그인 버튼 */}
				<Button
						type="button"
						size="icon"
						variant="outline"
						className="rounded-full border-default-300 hover:bg-transparent"
				>
					<Image src={facebook} alt="google" className="w-5 h-5" />
				</Button>
				{/* 트위터 로그인 버튼 */}
				<Button
						type="button"
						size="icon"
						variant="outline"
						className="rounded-full  border-default-300 hover:bg-transparent"
				>
					<Image src={twitter} alt="google" className="w-5 h-5" />
				</Button>
			</div>
			<div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
				아직 회원 가입을 하지 않았나요?{" "}
				<Link href="/auth/register" className="text-primary">
					{" "}
					회원 가입하기{" "}
				</Link>
			</div>
		</div>
	);
};

export default LogInForm;
