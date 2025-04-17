import { useNavigate } from "react-router";
import Input from "../components/Input";
import { supabaseClient } from "../lib/supabaseClient";
import { setSessionStorage } from "../lib/user";

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        alert("아이디와 비밀번호를 모두 작성해 주세요");
        return;
      }

      const response = await supabaseClient().auth.signInWithPassword({
        email: email.toString(),
        password: password.toString(),
      });

      if (response.error) {
        alert("아이디 또는 비밀번호를 확인해 주세요");
        throw new Error();
      }

      setSessionStorage(response.data.session);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <Input label={"이메일"} autoComplete="email" type="email" name="email" placeholder="이메일" />
        <Input label={"비밀번호"} autoComplete="new-password" type="password" name="password" placeholder="비밀번호" />
        <button type="submit">제출</button>
      </form>
    </section>
  );
}

export default SignIn;
