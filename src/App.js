import {
  Button,
  Grid,
  ChakraProvider,
  Input,
  Text,
  GridItem,
} from '@chakra-ui/react';
import functionPlot from 'function-plot';

import { useEffect, useRef, useState } from 'react';
export default function App() {
  const [func, setFunc] = useState('x*x');

  const ref = useRef(null);
  const inputRef = useRef(null);
  let contentsBounds = ref;
  let width = 1000;
  let height = 800;
  let ratio = contentsBounds.width / width;
  width *= ratio;
  height *= ratio;

  const onSubmitButton = (inputRef) => {
    setFunc(inputRef.current.value);
  };

  useEffect(() => {
    functionPlot({
      target: '#graph',
      width,
      height,
      yAxis: { domain: [-5, 5] },
      grid: true,
      data: [
        {
          fn: func,
        },
      ],
    });
  }, [func]);
  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(9, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <Text fontSize="2xl">Contributors to the project</Text>
          <Text fontSize="1xl">Anıl Er</Text>
          <Text fontSize="1xl">Serhat Genç</Text>
          <Text fontSize="1xl">Ömer Faruk Şahin</Text>
        </GridItem>
        <GridItem colSpan={4}>
          <Text fontSize="6xl"> Graphical Calculation</Text>
          <div ref={ref} id="graph"></div>
          <Input
            variant="filled"
            textAlign="center"
            placeholder="example: x*x"
            w="20%"
            my="2"
            bg="#721817"
            _hover={{ background: '#D63B38' }}
            _focus={{ background: '#721817' }}
            color="#fff"
            ref={inputRef}
          />
          <Button
            bg="#721817"
            color="#fff"
            _hover={{ background: '#D63B38' }}
            w="20%"
            onClick={() => onSubmitButton(inputRef)}
          >
            Calculate
          </Button>
        </GridItem>
        <GridItem colSpan={4} bg="tomato"></GridItem>
      </Grid>
    </ChakraProvider>
  );
}
