import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SessionTimeoutProps {
  redirectDurationSeconds?: number;
}

export const SessionTimeout = ({
  redirectDurationSeconds = 60,
}: SessionTimeoutProps) => {
  const navigate = useNavigate();

  const [secondsRemaining, setSecondsRemaining] = useState(
    redirectDurationSeconds,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      // Redirect to the login page when the countdown reaches zero
      navigate("/login");
    }
  }, [secondsRemaining, navigate]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8 bg-gray-400 text-white rounded-3xl shadow-md">
      <p className="text-2xl font-semibold mb-4 text-gray-700">
        Session Timed Out!
      </p>
      <p className="text-lg my-4">
        You will be redirected in{" "}
        <span className="font-bold">
          {String(secondsRemaining).padStart(2, "0")}
        </span>{" "}
        seconds
      </p>
      <p className="text-lg mt-8">
        Please{" "}
        <Link to="/login" className="text-blue-500 underline">
          log in
        </Link>{" "}
        again
      </p>
    </div>
  );
};
