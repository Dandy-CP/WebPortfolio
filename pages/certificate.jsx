import Head from 'next/head';
import Image from 'next/image';

import CardSkeleton from '../components/CardSkeleton';
import { GetCertificate } from '../service/api/certificate/certificate.query';
import {
  CardCertif,
  ContainerCertificate,
  TitleCertificate,
} from '../styles/Certificate/certificate.styled';
import { MainContainer } from '../styles/GlobalStyle';

const Certificate = () => {
  const { data: MyCertificate, isLoading } = GetCertificate({
    sizeData: 10,
    pageData: 0,
  });

  return (
    <MainContainer>
      <Head>
        <title>Dandy Candra - Frontend Developer | Certificate</title>
      </Head>

      <TitleCertificate>
        <h1>Certificate</h1>
        <p>Here are some of my Certificate over the course of my journey.</p>
      </TitleCertificate>

      {isLoading ? (
        <CardSkeleton cards={6} />
      ) : (
        <ContainerCertificate>
          {MyCertificate?.items.map((data) => (
            <CardCertif key={data.id}>
              <a href={data.url_pdf} target="_blank" rel="noreferrer">
                <Image
                  src={data.thumbnail_image}
                  alt="certif"
                  width={350}
                  height={250}
                />
              </a>
            </CardCertif>
          ))}
        </ContainerCertificate>
      )}
    </MainContainer>
  );
};

export default Certificate;
