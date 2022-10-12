import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import "./FAQ.css";

export const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What are Unpiloted NFTs?",
      answer:
        "Set of 2,222 aircraft NFTs that will grow into a 10,000 collection through a series of 3 generations.",
      open: false,
    },
    {
      question: "When is the launch?",
      answer: "This is a stealth drop.",
      open: false,
    },
    {
      question: "How many are available?",
      answer: "2,222 NFTs will be available in the first mint.",
      open: false,
    },
    {
      question: "What will be the mint price of a NFT?",
      answer: "The mint price per NFT will be 0.08 ETH.",
      open: false,
    },
    {
      question: "How many can I mint per transaction? Per wallet?",
      answer:
        "Each individual can mint 10 per transaction with no limits per wallet.",
      open: false,
    },
    {
      question: "How can I join the whitelist?",
      answer:
        "Whitelist access will be granted to individual holders based on how active they are in the community. There will be a reserved number of spots for whitelist access.",
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
      component="section"
      height="100vh"
      backgroundColor="primary.darkGreen"
      textAlign="center"
      spacing={3}
    >
      <Typography item variant="h2">
        FAQ
      </Typography>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <div
            className={"faq " + (faq.open ? "open" : "")}
            key={i}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </Stack>
  );
};
