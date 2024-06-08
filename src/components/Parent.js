import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Child1 from './Child1';
import Child2 from './Child2';
import { motion } from 'framer-motion';

const Parent = () => {
  const [money, setMoney] = useState(0);

  const incrementMoney = () => {
    setMoney(money + 1000);
  };

  const decrementMoney = () => {
    setMoney(money - 500);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Parent Component
        </Typography>
        <Typography variant="h6">
          Money: <motion.span animate={{ scale: [1, 1.1, 1] }}>{money}</motion.span>
        </Typography>
      </Paper>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Child1 incrementMoney={incrementMoney} />
        <Child2 decrementMoney={decrementMoney} />
      </Box>
    </Container>
  );
};

export default Parent;
