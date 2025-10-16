// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // ⬅️ add this
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          full_name: "Full Name",
          have_account: "Already have an account?",
          login: "Login",
          signup: "Sign Up",
          settings: "Settings",
          profile: "Profile",
          logout: "Logout",
          welcome: "Welcome back!",
          email: "Email",
          password: "Password",
          signin: "Sign in",
          loading: "Loading...",
          no_account: "Don&apos;t have an account?",
          create_account: "Create account",
          signin_subtitle:
            "Sign in to continue your conversations and catch up with your messages.",
          profile_information: "Your profile information",
          profile_update: "Click the camera icon to update your photo",
          hello: "Sign in to your account",
          account_info: "Account Information",
          member_since: "Member Since",
          account_stat: "Account Status",
          active: "active",
          welcome_to: "Welcome to Talksy!",
          bio: "Select a conversation fro the sidebar to start chatting",
        },
      },
      ar: {
        translation: {
          full_name: "الاسم",
          have_account: "هل لديك حساب بالفعل؟",
          login: "تسجيل الدخول",
          signup: "إنشاء حساب",
          settings: "الإعدادات",
          logout: "تسجيل الخروج",
          welcome: "!مرحبًا بعودتك",
          email: "البريد الألكتروني",
          password: "كلمة المرور",
          signin: "تسجيل الدخول",
          loading: "جار التحميل...",
          no_account: "ليس لديك حساب؟",
          create_account: "انشاء حساب",
          signin_subtitle:
            "قم بتسجيل الدخول لمتابعة محادثاتك والاطلاع على رسائلك.",
          profile: "الملف الشخصي",
          profile_information: "معلومات الملف الشخصي",
          profile_update: "اضعط علي ايقونة الكاميرا لتحديث صورة ملفك الشخصي",
          hello: "سجّل الدخول إلى حسابك",
          account_info: "معلومات الحساب",
          member_since: "عضو منذ",
          account_stat: "حالة الحساب",
          active: "نشط",
          welcome_to: "Talksy! مرحبا بك في ",
          bio: "اختر محادثة من الشريط الجانبي لبدء الدردشة",
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      // 👇 order matters: first check localStorage, then browser language
      order: ["localStorage", "navigator"],
      caches: ["localStorage"], // save user choice in localStorage
    },
  });

export default i18n;
