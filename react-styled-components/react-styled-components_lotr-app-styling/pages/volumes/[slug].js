import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #efefef;
  `;
  const BackLink = styled(Link)`
    display: block;
    margin-bottom: 20px;
    padding: 50px 0px 20px 30px;
    text-decoration: none;
    font-size: 1.1rem;
    color: #121212;
  `;

  const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    padding-left: 30px;
  `;

  const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
    padding: 0px 30px;
  `;
  const ContentWrapper = styled.div`
    display: flex;
    background-color: ${volume.color};
    padding: 30px;
    gap: 20px;
  `;
  const BookList = styled.ul`
    align-self: center;
    margin-top: 30px;

    li {
      display: block;
      margin-bottom: 30px;
      color: #cfcfcf;
    }

    strong {
      font-size: 1.2rem;
      font-weight: bold;
    }
  `;
  return (
    <>
      <Container>
        <BackLink href="/volumes">← All Volumes</BackLink>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ContentWrapper>
          <BookList>
            {books.map(({ ordinal, title }) => (
              <li key={title}>
                {ordinal} <br /> <strong>{title}</strong>
              </li>
            ))}
          </BookList>
          <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={200}
            height={300}
          />
        </ContentWrapper>
        {previousVolume ? (
          <div>
            <Link href={`/volumes/${previousVolume.slug}`}>
              ← Previous Volume: {previousVolume.title}
            </Link>
          </div>
        ) : null}
        {nextVolume ? (
          <div>
            <Link href={`/volumes/${nextVolume.slug}`}>
              Next Volume: {nextVolume.title} →
            </Link>
          </div>
        ) : null}
      </Container>
    </>
  );
}
