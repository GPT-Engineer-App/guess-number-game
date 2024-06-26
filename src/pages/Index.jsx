import React, { useState } from "react";
import { Box, Button, Text, Input, VStack, HStack, useToast, Grid } from "@chakra-ui/react";
import { FaRedo, FaCheck } from "react-icons/fa";

const Index = () => {
  const [target, setTarget] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const toast = useToast();

  const resetGame = () => {
    setTarget(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  const checkGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess)) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid number.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const diff = numGuess - target;
    setAttempts(attempts + 1);

    if (diff === 0) {
      const praise = attempts < 5 ? "天才" : attempts < 10 ? "聪明" : attempts < 15 ? "加油哦" : "你是不是在瞎猜啊";
      setMessage(`Correct! You took ${attempts + 1} guesses. ${praise}`);
    } else if (diff > 0) {
      setMessage(diff > 10 ? "比这个数小得多" : "比这个数小一点");
    } else {
      setMessage(-diff > 10 ? "比这个数大得多" : "比这个数大一点");
    }
  };

  return (
    <VStack spacing={4} align="center">
      <Text fontSize="xl">Guess the Number!</Text>
      <Text>{message || guess}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        {Array.from({ length: 9 }, (_, i) => (
          <Button key={i + 1} onClick={() => setGuess(guess + (i + 1).toString())} isDisabled={message.includes("Correct!")}>
            {i + 1}
          </Button>
        ))}
        <Button onClick={checkGuess} leftIcon={<FaCheck />} colorScheme="blue" gridColumn="span 2" isDisabled={message.includes("Correct!")}>
          OK
        </Button>
        <Button key={0} onClick={() => setGuess(guess + "0")} isDisabled={message.includes("Correct!")}>
          0
        </Button>
        <Button onClick={() => setGuess(guess.slice(0, -1))} leftIcon={<FaRedo />} colorScheme="red">
          Backspace
        </Button>
        <Button onClick={resetGame} leftIcon={<FaRedo />} colorScheme="red">
          Reset
        </Button>
      </Grid>
    </VStack>
  );
};

export default Index;
