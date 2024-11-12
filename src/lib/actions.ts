"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login(formData: FormData) {
	const supabase = await createClient();

	// in practice, you should validate your inputs
	const loginData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signInWithPassword(loginData);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	revalidatePath("/", "page");
	redirect("/");
}

export async function signup(formData: FormData) {
	const supabase = await createClient();

	// in practice, you should validate your inputs
	const signupData = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	};

	const { error } = await supabase.auth.signUp(signupData);

	if (error) {
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/");
}

export async function signOut() {
	const { error } = await (await createClient()).auth.signOut();
}
