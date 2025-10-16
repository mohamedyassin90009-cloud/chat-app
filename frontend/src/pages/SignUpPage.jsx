import { useAuthStore } from "../store/useAuthStore";
import {
  Flag,
  Mail,
  Lock,
  MessageSquare,
  User,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import ChatHero from "../components/ChatHero";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";
  useEffect(() => {
    console.log("Language changed:", i18n.language);
    console.log("isArabic:", isArabic);
  }, [i18n.language, isArabic]);

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 8)
      return toast.error("Password must be at least 8 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label
                className={`label ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <span className="label-text font-medium">{t("full_name")}</span>
              </label>
              <div className="relative">
                <div
                  className={`absolute inset-y-0 flex items-center pointer-events-none 
        ${isArabic ? "right-0 pr-3" : "left-0 pl-3"}`}
                >
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  dir={isArabic ? "rtl" : "ltr"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder={isArabic ? "   الاسم الكامل" : "John Doe"}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label
                className={`label ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <span className="label-text font-medium">{t("email")}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label
                className={`label ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                <span className="label-text font-medium">{t("password")}</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  {t("loading...")}
                </>
              ) : (
                t("create_account")
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              {t("have_account")}
              {""}
              <Link to="/login" className="link link-primary">
                {t("signin")}
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <ChatHero />
    </div>
  );
}

export default SignUpPage;

// "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
