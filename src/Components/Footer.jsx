import React from 'react';
import { Container } from './Container';
import { Typografy } from '../Ui/Typografy';

export const Footer = () => {
  return (
    <footer>
      <Container className="flex flex-col sm:flex-row justify-between mt-[50px] mb-[37px] sm:mb-[52px] gap-[80px]">
        <div>
          <div className="w-[116px] h-[29px] mb-[12px]">
            <img src="./images/logo.svg" />
          </div>
          <Typografy type="description" className="max-w-[433px]">
            User flows library of crypto, NFT, and Web3 projects. Insights,
            experts reviews to enhance Web3 UX
          </Typografy>
        </div>
        <div>
          <h5 className="text-white font-medium mb-[13px]">PLATFORM</h5>
          <p className="font-light text-lg leading-9 hover:cursor-pointer">
            Terms and Conditions
            <br /> Privacy Policy
            <br /> hello@web3flows.com
          </p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-[13px]">FOLLOW</h5>
          <div className="flex gap-8 hover:cursor-pointer">
            <img src="./images/Vector.svg" />
            <img src="./images/Vector-2.svg" />
            <img src="./images/Vector-3.svg" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
