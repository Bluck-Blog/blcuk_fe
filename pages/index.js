// lib

//components
import MainPage from "../components/main/MainPage";
import { GET } from "../api/Get";
import { content } from "../mok/contents";
import { useEffect } from "react";

//img

export default function Home(props) {
  const aaa = async () => {
    const data = await GET.selectAllPosts();
    console.log(data);
  };

  useEffect(() => {
    aaa();
  }, []);
  return <MainPage content={props.content} />;
}

export async function getStaticProps() {
  const fakeData = [...content];

  try {
    // const data = await GET.selectAllPosts();
    return {
      props: {
        // 나중에 data로 바꾸기
        content: fakeData,
      },
    };
  } catch (err) {
    return {
      props: {
        content: fakeData,
      },
    };
  }
}
