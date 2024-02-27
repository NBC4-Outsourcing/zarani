import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { readUserInfo } from 'components/myPageComponent/myPageSupabase';
import MyPageReviews from 'components/myPageComponent/MyPageReviews';
import MyPageContents from 'components/myPageComponent/MyPageContents';
import MyPageHeader from 'components/myPageComponent/MyPageHeader';
import Loading from 'components/common/Loading';

const MyPage = () => {
  // const { isLoading, isError, data } = useQuery('usersAccounts', readUserInfo);
  // // useQuery => refetching
  // if (isError) return <div>오류로 인해 정보를 받아오지 못 하고 있습니다.</div>;
  return (
    <section>
      <MyPageHeader />
      <MyPageContents />
      {/* <MyPageContents data={data} isLoading={isLoading} /> */}
      <MyPageReviews />
    </section>
  );
};

export default MyPage;
