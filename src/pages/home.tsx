import { useEffect } from "react";
import { getSession } from "../lib/user";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const checkSession = async () => {
    const session = await getSession();

    if (session) return;
    else navigate('/sign-in')
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <section>
      <h2>홈</h2>
    </section>
  );
}

export default Home;
