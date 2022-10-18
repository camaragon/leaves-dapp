import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import "./FAQ.css";
import brownLeaf from "../../Images/footer-leafs/brown-leaf.png";
import autumnLeaf from "../../Images/footer-leafs/autumn-leaf.png";

export const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What are LEAVES?",
      answer:
        "10,000 LEAVES is the Prelude to our Web3 adventure. These LEAVES were hand drawn then altered with keywords to generate the backgrounds through AI interpretation. Collecting one leaf grants holders a guaranteed mint for our main drop in November. ",
      open: false,
    },
    {
      question: "When is the launch?",
      answer:
        "The mint will be 10/28 in the morning when leaves are most crisp.",
      open: false,
    },
    {
      question: "How many are available?",
      answer: "10,000 LEAVES will be available.",
      open: false,
    },
    {
      question: "What will be the mint price of a NFT?",
      answer:
        "As this collection is the prelude to our main drop in November, LEAVES will cost 0.03 Eth. Owning a leaf will reduce the mint price of our main drop by 0.03 Eth as well held during the presale 3 days earlier.",
      open: false,
    },
    {
      question: "Minting Limits?",
      answer: "Wallets will be limited to minting 5 LEAVES per transaction.",
      open: false,
    },
    {
      question: "What are Gate Keepers?",
      answer:
        "Gate Keepers is the title granted to our most active and supportive members of the community. When we succeed, we want our Gate Keepers to enjoy some of the success as well. The 250 strongest supporters are granted this title. The list will be reevaluated on a monthly basis but during the month a holder is a Gate Keeper, they are granted increased voting power for the Tree Fund, free mints to our drop, share of all secondary sale, access to the Founder’s Fund.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <Stack
      id="faq"
      component="section"
      height="fit-content"
      backgroundColor="primary.darkGreen"
      textAlign="center"
      spacing={6}
    >
      <img
        className="faq-leaves"
        src={brownLeaf}
        alt="brown leaf"
        style={{
          height: "100%",
          position: "absolute",
          transform: "translateX(-35%) rotate(45deg)",
        }}
      />
      <img
        className="faq-leaves"
        src={autumnLeaf}
        alt="autumn leaf"
        style={{
          height: "95%",
          position: "absolute",
          left: "60%",
          transform: "translateY(25%) rotate(0deg)",
        }}
      />

      <Typography
        item
        variant="h2"
        padding="5% 0 0 0"
        fontWeight="900"
        fontSize="500%"
        color="common.white"
        sx={{ textShadow: "2px 2px 4px #000000" }}
      >
        FAQ
      </Typography>
      <div className="faqs" style={{ zIndex: 1 }}>
        {faqs.map((faq, i) => (
          <div
            className={"faq " + (faq.open ? "open" : "")}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <div
              className="faq-question"
              style={{
                color: "white",
                fontFamily: "EB Garamond",
                fontWeight: "900",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              {faq.question}
            </div>
            <div
              className="faq-answer"
              style={{
                color: "white",
                fontFamily: "EB Garamond",
                fontWeight: "900",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </Stack>
  );
};
