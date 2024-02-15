interface LangType {
  [key: string]: {
    [key: string]: string;
  };
}
const lang: LangType = {
  en: {
    search: "Search",
    login: "Login",
    signup: "Sign Up",
    searchPlaceHolder: "What would you like to watch you today?",
  },
  hindi: {
    search: "खोज",
    login: "लॉग इन",
    signup: "साइन अप करें",
    searchPlaceHolder: "आज तक क्या चाहते है",
  },
  spanish: {
    search: "buscar",
    login: "iniciar sesión",
    signup: "Registrarse",
    searchPlaceHolder: "¿Qué quieres ver hoy?",
  },
};
export default lang;
