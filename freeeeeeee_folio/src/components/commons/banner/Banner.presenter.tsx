import React from "react";
import * as B from "./Banner.styles";
import { Carousel } from "antd";
import { contentStyle } from "./Banner.styles";

export default function BannerUI() {
  return (
    <B.Banner>
      <Carousel>
        <div>
          <h3 style={contentStyle}>
            <B.Wrapper>
              <img src="/img/la1.JPG" alt="LA사진" />
            </B.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={B.contentStyle}>
            <B.Wrapper>
              <img src="/img/la2.JPG" alt="LA사진" />
            </B.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={B.contentStyle}>
            <B.Wrapper>
              <img src="/img/la3.JPG" alt="LA사진" />
            </B.Wrapper>
          </h3>
        </div>
        <div>
          <h3 style={B.contentStyle}>
            <B.Wrapper>
              <img src="/img/hollywood.JPG" alt="LA사진" />
            </B.Wrapper>
          </h3>
        </div>
      </Carousel>
    </B.Banner>
  );
}
