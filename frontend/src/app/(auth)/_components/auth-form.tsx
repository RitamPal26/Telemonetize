"use client";

import { P, paragraphVariants } from "@/components/custom/p";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { RiGithubFill, RiLoader3Fill } from "@remixicon/react";
import { toast } from "sonner";
import { useState } from "react";

import { APP_DOMAIN } from "@/lib/env";
import { authClient } from "@/lib/better-auth/auth-client";

interface Props {
  action: "Sign In" | "Sign Up";
}

const AuthForm: React.FC<Props> = ({ action }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card
      className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 
                     rounded-2xl shadow-xl transition-all duration-300 
                     animate-fade-in-up sm:my-8
                     border border-slate-200/50 dark:border-slate-700/30
                     overflow-hidden"
    >
      <CardHeader
        className="space-y-2 p-6 sm:p-8 border-b border-slate-200/50 dark:border-slate-700/30 
                           rounded-t-2xl bg-slate-50/30 dark:bg-slate-800/20"
      >
        <CardTitle
          className={paragraphVariants({
            size: "large",
            weight: "bold",
            className:
              "text-3xl tracking-tight text-indigo-600 dark:text-indigo-400",
          })}
        >
          {action}
        </CardTitle>
        <CardDescription className="text-slate-600 dark:text-slate-400 pt-1">
          {action} to access your Telemonetize account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6 p-6 sm:p-8">
        <Button
          variant="lift"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 
                     bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700
                     text-white py-3 px-5 rounded-lg 
                     font-semibold text-base 
                     transition-all duration-200 
                     focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400
                     disabled:opacity-60 disabled:cursor-not-allowed
                     shadow-md hover:shadow-lg hover:scale-105 
                     animate-pulse-on-hover"
          onClick={async () => {
            await authClient.signIn.social(
              {
                provider: "github", // Changed from "google" to "github" to match backend config
                callbackURL: `${APP_DOMAIN}/dashboard`,
              },
              {
                onSuccess: () => {
                  toast.success("Redirecting to GitHub sign-in page");
                },
                onError: (c) => {
                  toast.error(c.error.message);
                },
                onRequest: () => {
                  setIsLoading(true);
                },
                onResponse: () => {
                  setIsLoading(false);
                },
              }
            );
          }}
        >
          {isLoading ? (
            <RiLoader3Fill className="animate-spin w-5 h-5" />
          ) : (
            <RiGithubFill className="w-5 h-5" />
          )}
          {action} with GitHub {/* Updated text to reflect GitHub */}
        </Button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-300 dark:border-slate-700" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-800 px-2 text-slate-500 dark:text-slate-400">
              Or
            </span>
          </div>
        </div>

        <P
          variant="muted"
          size="small"
          weight="default"
          className="text-center text-slate-600 dark:text-slate-400 mt-4"
        >
          {action === "Sign In" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 transition-colors duration-200"
              >
                Create one now
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 transition-colors duration-200"
              >
                Sign In here
              </Link>
            </>
          )}
        </P>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
