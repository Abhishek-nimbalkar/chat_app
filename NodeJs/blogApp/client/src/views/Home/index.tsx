import Api from "api";
import Loader from "components/Loader";
import PostComponent from "components/Post";
import PostBanner from "components/PostBanner";
// import PostBanner from "components/PostBanner";
import PostHeader from "components/PostHeader";
import useGetData from "hooks";
import { IApiData } from "interfaces";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer } from "react-toastify";

// import { useEffect, useState } from "react";
// import { json } from "stream/consumers";

import {
  PostBody,
  PostsContainer,
  PostsRightConatainer,
  PostsWrapper,
} from "style/components/PostHeaderStyle";
import getData from "utils/getData";
// import { JsxElement } from "typescript";

const Home = () => {
  const [state, setState] = useState<Array<IApiData>>([]);
  const [skip, setSkip] = useState<number>(0);
  useEffect(() => {
    getData(skip).then((data) => {
      setState(data?.data);
      setSkip(skip + 5);
      // console.log(data?.data);
    });
  }, []);

  // console.log("State before=======", state);

  // const { data, isLoading } = useGetData("posts/5");
  // const postData: Array<IApiData> = data?.data;
  // console.log(postData);
  // console.log(isLoading);
  // useEffect(()=>{
  //   fetchMoreData()
  // },[])

  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setSkip(skip + 5);
    // console.log('skip ========', skip)
    getData(skip).then((data) => {
      setTimeout(() => {
        // console.log("data form get ==============", data?.data);

        setState(state.concat(data?.data));
      }, 1500);
    });

    // console.log("State After ===========", state);

    // console.log("size.length", state.length);
  };

  return (
    <>
      <PostBody>
        <PostHeader />
        <PostBanner />
        <PostsWrapper>
          <InfiniteScroll
            dataLength={state.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Loader />}
          >
            <PostsContainer>
              {state?.map((ele: IApiData, key: any) => (
                <PostComponent
                  key={key}
                  title={ele.title}
                  body={ele.body}
                  img={ele.images[0]}
                  id={ele._id}
                />
              ))}
            </PostsContainer>
          </InfiniteScroll>
          <PostsRightConatainer></PostsRightConatainer>
        </PostsWrapper>
      </PostBody>
    </>
  );
};

export default Home;
