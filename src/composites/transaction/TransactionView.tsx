import images from "images/images";
import React from "react";
import { Tabs, rem } from "@mantine/core";

type Props = {};

const TransactionView = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h1 className=" font-bold">Transaction</h1>
        {/* fix  */}
        <div className="flex items-center border-main-color border text-main-color bg-light-gray px-3 py-0.5 justify-around rounded-full">
          <p className="text-sm">Select Month</p>
          <img src={images.downArrowIcon} alt="" />
        </div>
      </div>
      {/* tabs */}
      <Tabs defaultValue="all" color="gray" >
        <Tabs.List>
          <Tabs.Tab value="all">All</Tabs.Tab>
          <Tabs.Tab value="Addition">Addition</Tabs.Tab>
          <Tabs.Tab value="Dedection">Dedection</Tabs.Tab>
          <Tabs.Tab value="refund">refund</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all">
            <div>
                
            </div>
        </Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default TransactionView;
