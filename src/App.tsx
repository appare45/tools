import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Section,
  TextArea,
} from "@radix-ui/themes";
import { useState } from "react";

const tabToCSV = (data: string): string => {
  return data.replace(/\t/g, ",");
};

export default function MyApp() {
  const [data, setData] = useState("");
  return (
    <Container>
      <Section>
        <Box my={"3"}>
          <Heading>スプレッドシート</Heading>
        </Box>
        <TextArea
          size={"3"}
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
      </Section>
      <Section>
        <Flex my={"3"} gap={"3"}>
          <Heading>CSV</Heading>
          <Button
            variant="outline"
            onClick={() => {
              navigator.clipboard.writeText(tabToCSV(data));
            }}
          >
            コピー
          </Button>
        </Flex>
        <TextArea size={"3"} disabled value={tabToCSV(data)} />
      </Section>
    </Container>
  );
}
