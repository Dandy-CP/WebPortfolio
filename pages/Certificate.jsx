import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Head from 'next/head';
import Image from 'next/image';

import CardSkeleton from '../components/CardSkeleton';
import SetCertificate from '../config/redux/action/fetchDataCertificate';
import {
  CardCertif,
  ContainerCertificate,
  TitleCertificate,
} from '../styles/Certificate/certificate.styled';
import { MainContainer } from '../styles/GlobalStyle';

const Certificate = () => {
  const { MyCertificate, IsLoading } = useSelector(
    (state) => state.MyCertificate,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SetCertificate());
  }, []);

  return (
    <MainContainer>
      <Head>
        <title>Dandy Candra - Frontend Developer | Certificate</title>
      </Head>

      <TitleCertificate>
        <h1>Certificate</h1>
        <p>Here are some of my Certificate over the course of my journey.</p>
      </TitleCertificate>

      {IsLoading && <CardSkeleton cards={6} />}

      <ContainerCertificate>
        {MyCertificate.map((data) => (
          <CardCertif key={data.id}>
            <a href={data.urlPdf} target="_blank" rel="noreferrer">
              <Image
                src={data.thumbnailPdf}
                alt="certif"
                width={350}
                height={250}
              />
            </a>
          </CardCertif>
        ))}
      </ContainerCertificate>
    </MainContainer>
  );
};

export default Certificate;
