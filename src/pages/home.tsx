import { useEffect } from "react";
import { getSession } from "../lib/user";
import { NavigateFunction, useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const checkSession = (navigate: NavigateFunction) => {
    const session = getSession();

    if (session) return;
    else navigate('/sign-in')
  };

  useEffect(() => {
    checkSession(navigate);
  }, [navigate]);

  return (
    <section>
      <h2>홈</h2>
    </section>
  );
}

export default Home;
