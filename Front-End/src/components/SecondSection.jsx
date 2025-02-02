import React from "react";
import styled from "styled-components";

const SecondSection = () => {
  return (
    <Section>
      <LeftDiv>
        <img src="/sectionImages/Left Design.png" alt="" />
      </LeftDiv>
      <RightDiv>
        <img src="/sectionImages/Right Design.png" alt="" />
      </RightDiv>

      <h1 className="text-center cinzel text-4xl font-bold pt-[100px] pb-[50px]">
        What is Isami Zone Project?
      </h1>

      <div className="flex w-[68%] m-auto gap-[30px] items-center justify-between mb-[60px]">
        <p className="poppins text-[19px] text-[#171717]">
          <b>Islami Zone</b> is an online institute that connects teachers and
          students passionate about learning the Quran, Tajweed, or the Arabic
          language. It offers a unique approach by leveraging custom-built
          programs and applications specifically designed for effective
          learning. Unlike other platforms, Islami Zone operates independently
          without relying on third-party video conferencing tools or software.
        </p>
        <img src="/sectionImages/QURANPAK.png" alt="" />
      </div>

      <iframe
        width="85%"
        height="600px"
        className="m-auto mb-[20px]"
        src="https://www.youtube.com/embed/6dqAwh2MCg0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Section>
  );
};

export default SecondSection;

const Section = styled.section`
  position: relative;
`;

const LeftDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const RightDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
