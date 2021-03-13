import { session, signIn, signOut, useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import useSWR, { mutate, trigger } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ apidata }) {
  const [session, loading] = useSession();
  const [userInput, setUserInput] = useState("");
  const { data, error } = useSWR(
    "https://next-js-try-bipin.herokuapp.com/posts",
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  //   const [pdata, setData] = useState(apidata);

  const handlesubmit = async (event) => {
    event.preventDefault();

    const dataT = { name: "", body: "" };
    dataT.name = session.user.name;
    dataT.body = userInput;
    // setData([...pdata, dataT]);
    console.log(dataT);
    mutate("https://next-js-try-bipin.herokuapp.com/posts", [...data, dataT]);

    fetch("https://next-js-try-bipin.herokuapp.com/addpost", {
      method: "POST", // or 'PUT',

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataT),
    })
      .then((response) => response.json())
      .then((dataT) => {
        console.log("Success:", dataT);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    trigger("https://next-js-try-bipin.herokuapp.com/posts");
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <>
      {!session && (
        <>
          <div>
            You are not signed in to see this home page
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </>
      )}

      {session && (
        <>
          <div>
            this is the secret , the protected route :)
            <form onSubmit={handlesubmit}>
              <input
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Whats on your mind"
              />
            </form>
            <button onSubmit={handlesubmit}>submit</button>
            <button onClick={() => signOut()}>Sign Out</button>
            {/* {data
              .slice(0)
              .reverse()
              .map((item) => (
                <div id={item.body}>
                  {item.name}
                  <br></br>
                  <div> {item.body} </div>
                </div>
              ))} */}
            {data
              .slice(0)
              .reverse()
              .map((item) => (
                <div id={item.body}>
                  {item.name}
                  <br></br>
                  <div> {item.body} </div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://next-js-try-bipin.herokuapp.com/posts`);
  const apidata = await res.json();
  console.log(apidata);

  if (!apidata) {
    return {
      notFound: true,
    };
  }

  return {
    props: { apidata }, // will be passed to the page component as props
  };
}
