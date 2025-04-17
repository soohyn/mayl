import { useEffect } from "react";
import { getSession, removeSessionStorage } from "../lib/user";
import { useNavigate } from "react-router";
import { supabaseClient } from "../lib/supabaseClient";

function Home() {
  const navigate = useNavigate();

  const checkSession = async () => {
    const session = await getSession();

    if (session) return;
    else navigate("/sign-in");
  };

  const handleLogout = async () => {
    try {
      const response = await supabaseClient().auth.signOut();
      if (response.error) throw new Error();

      removeSessionStorage();
      navigate('/sign-in')
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <section>
      <h2>홈</h2>
      <button type="button" onClick={handleLogout}>
        로그아웃
      </button>
    </section>
  );
}

export default Home;
