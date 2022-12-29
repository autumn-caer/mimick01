import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Button,
} from "@chakra-ui/react";

const QueryForm: React.FC = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [detail, setDetail] = useState("");
  const [tel, setTel] = useState("");

  const handleNameInputChange = (e: any): void => setName(e.target.value);
  const isQueryError = query === "";
  const isNameError = name === "";

  return (
    <Box>
      <Flex justify="end">
        <Box w={{ base: "100%", sm: "100%", md: "100%", lg: "60%" }}>
          <Stack spacing={10} marginBottom="30%">
            <Stack fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}>
              <Text>お気軽にお問い合わせ下さい。</Text>
            </Stack>
            <Stack fontSize={{ base: "xs", sm: "md", md: "md", lg: "md" }}>
              <Text>
                MIMIGURIにご興味を持っていただき誠にありがとうございます。
              </Text>
              <Text>
                お仕事の相談、お見積り、取材のご依頼など、お気軽にお問い合わせください。担当者より折り返しご連絡させていただきます。
              </Text>
            </Stack>
            <Stack spacing={7}>
              <FormControl isInvalid={isQueryError}>
                <FormLabel>Country</FormLabel>
                <Select
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  placeholder="選択してください"
                >
                  <option>1.ご依頼・お見積もり</option>
                  <option>2.ワークショップへのご相談</option>
                  <option>3. 採用へのご応募</option>
                  <option>4. 取材ご依頼</option>
                  <option>5. その他のお問い合わせ</option>
                </Select>
                {!isQueryError ? (
                  <FormHelperText>Enter Query</FormHelperText>
                ) : (
                  <FormErrorMessage>Query is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isNameError}>
                <FormLabel>お名前</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={handleNameInputChange}
                />
                {!isNameError ? (
                  <FormHelperText>Enter the email</FormHelperText>
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isNameError}>
                <FormLabel>会社名</FormLabel>
                <Input
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                  }}
                />
                {!isNameError ? (
                  <FormHelperText>Enter the Company</FormHelperText>
                ) : (
                  <FormErrorMessage>Company is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={isNameError}>
                <FormLabel>電話番号</FormLabel>
                <Input
                  type="tel"
                  value={tel}
                  onChange={(e) => {
                    setTel(e.target.value);
                  }}
                />
                {!isNameError ? (
                  <FormHelperText>Enter the Tel</FormHelperText>
                ) : (
                  <FormErrorMessage>Tel is required.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>お問い合わせ内容</FormLabel>
                <Textarea
                  value={detail}
                  onChange={(e) => {
                    setDetail(e.target.value);
                  }}
                />
              </FormControl>
              <Button colorScheme="teal" variant="outline" size="lg">
                送信
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default QueryForm;
